import { Noiz } from './client';
import { NLPChat } from './client/nlp';


export const noiz = new Noiz({
  host: process.env.VUE_APP_API_HOST || 'https://api.noiz.live',
  graphQLEndpoint: '/graphql'
})

export const nlpChat = new NLPChat(noiz)
