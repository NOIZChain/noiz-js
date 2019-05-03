import { DocumentNode } from 'graphql'

export type QueryString = string

export type NetworkResolver<Request, QueryResponse, MutationResponse> = (query: string, variables?: object, requestOptions?: Request) => Promise<QueryResponse | MutationResponse>

export interface IError {
    message: string
}

export interface GraphQLError extends IError {
    data?: object,
    formErrors?: { [key: string]: IError }
}

export function serializeGraphQL(document: string | DocumentNode) {
    if (typeof document === 'string') return document

    return document.loc && document.loc.source.body || ''
}

export class GraphQLService<Request, QueryResponse, MutationResponse> {
    private resolver: NetworkResolver<Request, QueryResponse, MutationResponse>
    constructor(resolver: NetworkResolver<Request, QueryResponse, MutationResponse>) {
        this.resolver = resolver
    }

    async query<Variables extends object>(query: string | DocumentNode, variables?: Variables, options?: Request): Promise<QueryResponse> {
        return this.resolver(serializeGraphQL(query), variables, options) as Promise<QueryResponse>
    }

    async mutation<Variables extends object>(mutation: string | DocumentNode, variables?: Variables, options?: Request): Promise<MutationResponse> {
        return this.resolver(serializeGraphQL(mutation), variables, options) as Promise<MutationResponse>
    }
}
