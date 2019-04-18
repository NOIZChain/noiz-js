import { GraphQLService } from '@/utils/ts-graphql';
import Axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { GraphQLError } from 'graphql';
import initSession from './graphql/initSession.graphql'
import { Query, Mutation, SessionData, MutationInitSessionArgs } from '@/generated/graphql';

export interface NoizOptions {
    host: string,
    graphQLEndpoint?: string,
    http?: AxiosRequestConfig
}

export const defaultOptions: NoizOptions = {
    host: 'http://localhost:1337',
    graphQLEndpoint: '/graphql'
}

export type NoizGraphql = GraphQLService<AxiosRequestConfig, ApiResult<Query>, ApiResult<Mutation>>

export interface ApiResult<T> {
    request: AxiosRequestConfig,
    response: AxiosResponse<T>,
    data: T,
    errors?: GraphQLError[]
}

export interface GraphQLResponse<T> {
    data?: T,
    errors?: GraphQLError[]
}

export class Noiz {
    options: NoizOptions
    graphql: NoizGraphql
    http: AxiosInstance
    session?: SessionData

    constructor(options: NoizOptions) {
        this.options = {
            ...defaultOptions,
            ...options 
        }
        this.http = this.initHttp(this.options)
        this.graphql = this.initGraphQL(this.options)
    }

    initHttp(options: NoizOptions) {
        return Axios.create({
            url: options.host,
            timeout: 5000,
            validateStatus: () => true,
            headers: {
                'Content-Type': 'application/json',
                ...(options.http && options.http.headers)
            },
            ...options.http
        })
    }

    initGraphQL(options: NoizOptions): NoizGraphql {
        return new GraphQLService<AxiosRequestConfig, ApiResult<Query>, ApiResult<Mutation>>(async (query, variables, requestOptions) => {
            const payload = {
                variables,
                query
            }
            const response = await this.http.post<GraphQLResponse<Query | Mutation>>(options.graphQLEndpoint || '/graphql', payload, requestOptions)
            
            const data = response && response.data && response.data.data || {}
            const errors = (response.data && response.data.errors) || []

            return {
                data: data,
                response,
                request: response.config,
                errors
            } as ApiResult<Query> | ApiResult<Mutation>
        })
    }

    async initSession() {
        const response = await this.graphql.mutation<MutationInitSessionArgs>(initSession, {
            info: {
                directionDomain: window.location.href,
                referrerDomain: document.referrer,
            }
        })

        if (response.data.initSession) {
            this.session = response.data.initSession.session || undefined
        }
    }
}
