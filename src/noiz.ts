import { Noiz } from './client';


const noiz = new Noiz({
  host: 'http://localhost:1337',
  graphQLEndpoint: '/graphql'
})
noiz.initSession()

export default noiz;
