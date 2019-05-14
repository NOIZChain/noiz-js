import { Noiz } from '..';
import sendMessage from './graphql/sendMessage.graphql'
import { IMutationsendMessageArgs, ISenderType } from '@/generated/schema-types'
export class NLPChat {
    private readonly noiz: Noiz

    constructor(noiz: Noiz) {
        this.noiz = noiz
    }

    async sendMessage(text: string) {
        return await this.noiz.graphql.mutation<IMutationsendMessageArgs>(sendMessage, {
            sessionId: this.noiz.session && this.noiz.session.id || '',
            message: {
                who: ISenderType.CLIENT,
                value: {
                    kind: 'text',
                    stringValue: text
                }
            }
        })
    }
}
