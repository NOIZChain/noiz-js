<template>
    <div class="component-chat-message-block">
        <div class="message-block" v-bind:class="{ bot: who.toLowerCase() === 'bot', client: who.toLowerCase() === 'client' }">
            <div class="chat-bubble" :style="{ 
                backgroundColor: blockColor,
                color: blockTextColor
            }">
                {{ message }}
            </div>
        </div>
        <div class="answer-block" v-if="actions.length > 0">
            <button class="answer" 
                v-for="(answer, index) in actions" 
                v-on:click="onClickAnswer(index, answer.stringValue, $event)" 
                v-bind:style="{ 
                    backgroundColor: answerColor(index === selectedIdx), border: theme.answerBorder 
                }" 
                :key="index">
                {{ answer.stringValue }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { IChatMessage } from '@/generated/schema-types';
import { ChatTheme } from '../state/types';

@Component({
    components: {

    },
})

export default class ChatMessageBlock extends Vue {
    @Prop() message!: string
    @Prop() who!: string
    @Prop() actions!: string[]
    @Prop() onSend!: (message: string) => any

    @Inject() readonly theme!: ChatTheme

    selectedIdx: number = -1

    onClickAnswer(idx, value, e: Event) {
        this.selectedIdx = idx
        this.onSend(value)
    }

    answerColor(isSelected) {
        return isSelected ? this.theme.answerSelectedColor : undefined
    }

    get blockColor() {
        return this.who.toLowerCase() === 'bot' ? this.theme.botColor : this.theme.clientColor
    }

    get blockTextColor() {
        return this.who.toLowerCase() === 'bot' ? this.theme.botTextColor : this.theme.clientTextColor
    }
}
</script>

<style scoped lang="scss">
.component-chat-message-block {
    display: flex;
    flex-flow: column;
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;

    .message-block {
        display: flex;
        
        &.bot {
            justify-content: flex-start;
            
            .chat-bubble {
                border-radius: 0 10px 10px 10px;
                text-align: left;
            }
        }

        &.client {
            justify-content: flex-end;

            .chat-bubble {
                border-radius: 10px 10px 0 10px;
                text-align: right;
            }
        }
        
        .chat-bubble {
            flex-grow: 0;
            margin: 10px;
            padding: 10px;
            color: #fff;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 14px;
        }
    }

    .action-block {
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: repeat(2 ,minmax(200px, 1fr));

        .answer {
            flex-basis: calc(50% - 20px);
            background-color: rgba(0, 0, 0, 0.25);
            border: none;
            border-radius: 50px;
            color: #fff;
            cursor: pointer;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 14px;
            margin: 5px 10px 5px 10px;
            outline: none;
            padding: 10px;
            text-align: center;
        }
    }
}
</style>
