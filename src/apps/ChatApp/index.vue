<template>
    <App class="app-chat">
        <div class="brand-header" :style="{ backgroundColor: theme.primaryColor }">
            <div class="brand-description"></div>
            <img class="brand-logo" :src="theme.logo" />
        </div>
        <StripCta>
            <span>{{ $t('poweredBy') }}</span>
            <img :src="require('@/assets/logo-noiz.png')" />
        </StripCta>
        <ChatArea :background="theme.backgroundImage" :theme="theme">
            <ChatMessageBlock v-for="(message, index) in conversation" :key="index" :message="message.value.stringValue" :who="message.who"/>
        </ChatArea>
        <ChatInput :onSend="onSend" :theme="theme" />
    </App>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';
import App from '@/components/App.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from '@/components/Button.vue'
import Background from '@/components/Background.vue'
import StripCta from '@/components/StripCta.vue'
import ChatArea from './components/ChatArea.vue'
import ChatInput from './components/ChatInput.vue'
import ChatMessageBlock from './components/ChatMessageBlock.vue'
import { ChatTheme, ChatMessageCallback } from './state/types'
import { IChatMessage } from '../../generated/schema-types';
import { NLPChat } from '../../client/nlp';

@Component({
    components: {
        HelloWorld,
        Button,
        Background,
        StripCta,
        ChatArea,
        ChatInput,
        ChatMessageBlock,
        App
    },
})
export default class ChatApp extends Vue {
    @Prop() theme!: ChatTheme
    @Prop() nlpChat!: NLPChat
    @Prop() onMessage!: ChatMessageCallback
    conversation: IChatMessage[] = []

    async onSend(message: string) {
        const clientMessage: IChatMessage = {
            answers: [],
            who: 'client',
            value: {
                kind: 'stringValue',
                stringValue: message
            }
        }
        this.conversation.push(clientMessage)

        if (typeof this.onMessage === 'function') {
            this.onMessage(clientMessage)
        }

        console.log('sending message: ', message)
        const data = await this.nlpChat.sendMessage(message)
        console.log('ressponse: ', data)
        console.log('data', data)

        if (data) {
            console.log('pushing message', data)
            this.conversation.push(data)
            if (typeof this.onMessage === 'function') {
                this.onMessage(data)
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