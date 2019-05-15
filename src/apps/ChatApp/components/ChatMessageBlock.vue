<template>
    <div class="component-chat-message-block">
        <div class="message-block" v-bind:class="{ bot: who.toLowerCase() === 'bot', client: who.toLowerCase() === 'client' }">
            <div class="chat-bubble">
                {{ message }}
            </div>
        </div>
        <div class="answer-block" v-if="answers.length > 0">
            <button class="answer" v-for="(answer, index) in answers" v-on:click="onClickAnswer(index, answer.stringValue, $event)" v-bind:class="{ selected: index === selectedIdx }" :key="index">
                {{ answer.stringValue }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IChatMessage } from '@/generated/schema-types';

@Component({
    components: {

    },
})

export default class ChatMessageBlock extends Vue {
    @Prop() message!: string
    @Prop() who!: string
    @Prop() answers!: string[]
    @Prop() onSend!: (message: string) => any

    selectedIdx: number = -1

    onClickAnswer(idx, value, e: Event) {
        this.selectedIdx = idx
        this.onSend(value)
    }
}
</script>

<style scoped lang="scss">
.component-chat-message-block {
    display: flex;
    flex-flow: column;
    width: 100%;

    .message-block {
        display: flex;

        &.bot {
            justify-content: flex-start;
            
            .chat-bubble {
                background-color: rgb(220, 130, 50);
                border-radius: 0 10px 10px 10px;
                text-align: left;
            }
        }

        &.client {
            justify-content: flex-end;

            .chat-bubble {
                background-color: rgb(151, 30, 30);
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

    .answer-block {
        display: grid;
        grid-template-columns: repeat(2 ,minmax(200px, 1fr));

        .answer {
            background-color: rgba(0, 0, 0, 0.25);
            border: 1px solid rgb(220, 130, 50);
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

        .selected {
            background-color: rgb(220, 130, 50);
        }
    }
}
</style>
