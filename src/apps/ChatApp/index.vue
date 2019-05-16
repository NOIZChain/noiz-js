<template>
    <App class="app-chat" :width="size.width" :height="size.height">
        <div class="brand-header" :style="{ backgroundColor: theme.primaryColor }">
            <div class="brand-description"></div>
            <img class="brand-logo" :src="theme.logo" />
        </div>
        <StripCta>
            <span>{{ $t('poweredBy') }}</span>
            <img :src="require('@/assets/logo-noiz.png')" />
        </StripCta>
        <ChatArea :messages="conversation" :onSend="onSend"/>
        <ChatInput :onSend="onSend" :onFocus="startConversation" />
    </App>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Prop,
    Inject
} from 'vue-property-decorator';
import { App, AppSize } from '@/components/App';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from '@/components/Button.vue'
import Background from '@/components/Background.vue'
import StripCta from '@/components/StripCta.vue'
import ChatArea from './components/ChatArea.vue'
import ChatInput from './components/ChatInput.vue'
import { ChatTheme, ChatMessageCallback } from './state/types'
import { IChatMessage, IChatMessageInput } from '../../generated/schema-types';
import { NLPChat } from '../../client/nlp';
import { executeSequence, delay } from '@/utils/flow'

@Component({
    components: {
        HelloWorld,
        Button,
        Background,
        StripCta,
        ChatArea,
        ChatInput,
        App
    },
})
export default class ChatApp extends Vue {
    @Prop() nlpChat!: NLPChat
    @Prop() onMessage!: ChatMessageCallback
    @Prop() firstMessage!: string
    @Prop({
        default: () => ({
            width: 400,
            height: 530
        })
    }) size!: AppSize

    @Inject() readonly theme!: ChatTheme

    conversation: IChatMessage[] = []
    conversationStarted: boolean = false

    constructor() {
        super()

        this.init()
    }

    async init() {
        const session = await this.nlpChat.noiz.initSession()
        const conversation = session && session.messages

        if (conversation) {
            this.conversation = conversation
        }
    }

    async startConversation() {
        if (this.conversationStarted) return

        const answer = await this.nlpChat.sendMessage(this.firstMessage)
        if (answer) {
            await this.loadResponses(answer)
            this.conversationStarted = true
        }
    }

    async onSend(messageText: string) {
        if (!messageText || messageText.length === 0) return
        
        const clientMessage: IChatMessage = {
            answers: [],
            who: 'client',
            value: {
                kind: 'stringValue',
                stringValue: messageText
            }
        }
        this.conversation.push(clientMessage)

        this.conversation.push(clientMessage)

        if (typeof this.onMessage === 'function') {
            this.onMessage(clientMessage)
        }

        const data = await this.nlpChat.sendMessage(messageText)

        await this.loadResponses(data)
    }

    async loadResponses(responses: IChatMessage[]) {
        if (Array.isArray(responses)) {
            executeSequence(responses, async (message, i) => {
                this.conversation.push(message)
                await delay(1000)
            })

            if (typeof this.onMessage === 'function') {
                responses.forEach(message => {
                    this.onMessage(message)
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
.app-chat {
    .brand-header {
        background-color: #FFFFFF;
        display: flex;
        justify-content: flex-end;

        .brand-logo {
            width: 80px;
            height: 80px;
            padding: 0 15px;
        }
    }
}
</style>