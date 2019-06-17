import { Noiz } from '..';
import sendMessage from './graphql/sendMessage.graphql'
import { IMutationsendMessageArgs, ISenderType, IChatValueType } from '@/generated/schema-types'
export class NLPChat {
    readonly noiz: Noiz

    constructor(noiz: Noiz) {
        this.noiz = noiz
    }

    async sendMessage(text: string) {
        const result = await this.noiz.graphql.mutation<IMutationsendMessageArgs>(sendMessage, {
            sessionId: this.noiz.session && this.noiz.session.id || '',
            message: {
                who: ISenderType.CLIENT,
                value: {
                    type: IChatValueType.TEXT,
                    text
                }
            }
        })

        return result.data.sendMessage
    }
}
