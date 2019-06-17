<template>
    <Background class="component-chat-area" :src="theme.backgroundImage" >
        <transition-group name="slide-up" tag="div" class="chat-content">
            <ChatMessageBlock class="chat-block"
                v-for="(message, index) in reverseMessages"
                :key="reverseMessages.length - 1 - index"
                :data-index="reverseMessages.length - 1 - index"
                :message="message && message.value && message.value.text"
                :who="message.who"
                :actions="message.actions"
                :onSend="onSend"
            />
        </transition-group>
    </Background>
</template>

<script lang="ts">
import Background from '@/components/Background.vue';
import ChatMessageBlock from './ChatMessageBlock.vue';
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { IChatMessage } from '../../../generated/schema-types';
import { ChatTheme } from '../state/types';

@Component({
    components: {
        Background,
        ChatMessageBlock
    }
})
export default class ChatArea extends Vue {
    @Prop() messages!: IChatMessage[]
    @Prop() onSend!: (message: string) => any

    @Inject() readonly theme!: ChatTheme

    get reverseMessages() {
        return this.messages.slice().reverse()
    }
}
</script>

<style scoped lang="scss">
.component-chat-area {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
    flex-flow: column;
    overflow: hidden;

    .chat-content {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        overflow-y: scroll;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .chat-block {
        transition: all .25s ease;

        &.slide-up-enter-to {
            transform: translateY(0);
        }

        &.slide-up-enter, &.slide-up-leave-to {
            transform: translateY(200px);
        }

        // &.slide-up-enter-active, &.slide-up-leave-active {
        //     transform: translateY(200)
        // }
        // &.slide-up-enter, &.slide-up-leave-to /* .slide-up-leave-active below version 2.1.8 */ {
        //     transform: translateY(0)
        // }
    }
}
</style>
