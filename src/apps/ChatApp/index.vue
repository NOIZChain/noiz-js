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
            <ChatMessageBlock message="Hello World" who="bot"/>
            <ChatMessageBlock message="What's up?" who="client"/>
            <ChatMessageBlock message="What's your favorite color?" who="bot"/>
            <ChatMessageBlock message="Green" who="client"/>
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
import { ChatTheme } from './state/types'
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
    @Prop() conversation!: IChatMessage[]
    @Prop() nlpChat!: NLPChat

    async onSend(message: string) {
        console.log('sending message: ', message)
        const res = await this.nlpChat.sendMessage(message)
        console.log('ressponse: ', res)
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