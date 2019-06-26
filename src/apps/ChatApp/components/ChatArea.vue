<template>
    <Background class="component-chat-area" :src="theme.backgroundImage" >
        <div class="scroll-wrapper" v-chat-scroll>
            <transition-group name="slide-in" tag="div" class="chat-content">
                <ChatMessageBlock class="chat-block"
                    v-for="(message, index) in messages"
                    :key="index"
                    :class="{ [message.who.toLowerCase()]: true }"
                    :data-index="index"
                    :message="message && message.value && message.value.text"
                    :who="message.who"
                    :actions="message.actions"
                    :onSend="onSend"
                />
            </transition-group>
        </div>
    </Background>
</template>

<script lang="ts">
import Background from '@/components/Background.vue';
import ChatMessageBlock from './ChatMessageBlock.vue';
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { IChatMessage } from '../../../generated/schema-types';
import { ChatTheme } from '../state/types';
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)

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
}
</script>

<style scoped lang="scss">
.component-chat-area {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
    flex-flow: column;
    overflow: hidden;
    position: relative;

    .scroll-wrapper {
        display: flex;
        flex-grow: 1;
        flex-flow: column;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .chat-content {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        width: 100%;
        justify-content: flex-end;
        align-items: flex-start;
    }

    .chat-block {
        display: flex;
        flex-shrink: 0;
        transition: transform .25s ease;

        &.bot {
            &.slide-in-enter-to {
                transform: translateX(0);
            }

            &.slide-in-enter, &.slide-in-leave-to {
                transform: translateX(-100vw);
            }
        }

        &.client {
            &.slide-in-enter-to {
                transform: translateX(0);
            }

            &.slide-in-enter, &.slide-in-leave-to {
                transform: translateX(100vw);
            }
        }
    }
}
</style>
