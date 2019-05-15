import { Noiz } from './client';
import { NLPChat } from './client/nlp';


export const noiz = new Noiz({
  host: 'http://localhost:1337',
  graphQLEndpoint: '/graphql'
})

export const nlpChat = new NLPChat(noiz)
