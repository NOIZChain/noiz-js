<template>
    <App class="app-chat" :width="$vssWidth" :height="$vssHeight">
        <div class="brand-header" 
            :style="{ backgroundColor: theme.headerColor, height: headerHeight }"
            :class="{ 
                [theme.headerJustification]: true
            }">
            <div class="logo-block" @click="onClickExit($event)">
                <img class="brand-logo" :src="theme.logo" :style="{ maxHeight: headerHeight }" />
            </div>
        </div>
        <StripCta v-if="$vssHeight >= 300">
            <span>{{ $t('poweredBy') }}</span>
            <img src="https://noiz.emmert.io/img/logo.png" />
        </StripCta>
        <ChatArea :messages="conversation" :onSend="onSend"/>
        <ChatInput :onSend="onSend" />
    </App>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Prop,
    Inject,
    Provide
} from 'vue-property-decorator';
import '@/ad-network/studio/Enabler.js';
import { App, AppSize } from '@/components/App';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from '@/components/Button.vue'
import Background from '@/components/Background.vue'
import StripCta from '@/components/StripCta.vue'
import ChatArea from './components/ChatArea.vue'
import ChatInput from './components/ChatInput.vue'
import { ChatTheme, ChatMessageCallback } from './state/types'
import { IChatMessage, IChatMessageInput, IChatValueType, IChatActionType } from '../../generated/schema-types';
import { NLPChat } from '../../client/nlp';
import { executeSequence, delay } from '@/utils/flow'
import { createLocalization } from '../../locale';
import VueI18n from 'vue-i18n';
import VueScreenSize from 'vue-screen-size';

Vue.use(VueI18n)
Vue.use(VueScreenSize)

const i18n = createLocalization()

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
    i18n
})
export default class ChatApp extends Vue {
    @Prop() nlpChat!: NLPChat
    @Prop() onMessage!: ChatMessageCallback
    @Prop() firstMessage!: string
    @Prop({
        default: () => ({
            width: undefined,
            height: undefined
        })
    }) size!: AppSize
    @Provide() @Prop() theme!: ChatTheme

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
            if (this.firstMessage) {
                this.startConversation()
            }
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
            actions: [],
            who: 'client',
            value: {
                type: IChatValueType.TEXT,
                text: messageText
            }
        }

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

    get headerHeight() {
        if (typeof this.size.height === 'number' ? this.size.height : this['$vssHeight'] > 300) {
            return this.theme.headerHeight
        } else {
            return this.theme.headerMobileHeight
        }
    }

    onClickExit(e: Event) {
        // Enabler.exit('Background exit')
        Enabler.exitOverride('Dynamic URL exit', 'https://noizchain.com/')
    }
}
</script>

<style scoped lang="scss">

.app-chat {
    .brand-header {
        background-color: #FFFFFF;
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        height: 80px;

        &.left {
            justify-content: flex-start;
        }

        &.right {
            justify-content: flex-end;
        }

        &.center {
            justify-content: center;
        }

        .logo-block {
            display: flex;
            flex-flow: column;
            justify-content: center;
        }

        .brand-logo {
            padding: 0 15px;
            max-height: 80px;
        }
    }
}
</style>