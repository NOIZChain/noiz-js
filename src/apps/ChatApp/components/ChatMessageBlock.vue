<template>
    <div class="component-chat-message-block">
        <div v-if="message" class="message-block" v-bind:class="{ bot: who.toLowerCase() === 'bot', client: who.toLowerCase() === 'client' }">
            <div class="chat-bubble" :style="{ 
                backgroundColor: blockColor,
                color: blockTextColor
            }">
                {{ message }}
            </div>
        </div>
        <div class="action-block" v-if="actions && actions.length > 0">
            <div class="action"
                v-for="(action, index) in actions"
                :key="index">
                <button class="answer" 
                    v-if="action.type === IChatActionType.ANSWER"
                    v-bind:style="{ 
                        backgroundColor: answerColor(index === selectedIdx), border: theme.answerBorder 
                    }"
                    @click="onClickAnswer(index, answer.stringValue, $event)"
                    :key="index">
                    {{ action.text }}
                </button>
                <font-awesome-icon class="icon-button"
                    v-else-if="action.type === IChatActionType.ICON_BUTTON"
                    target="_blank" @click.prevent="onClickExit(action.url, $event)"
                    :icon="action.icon.split(/[\s,|]+/g)" size="3x" />
                <p class="link"
                    v-else-if="action.type === IChatActionType.LINK"
                    :href="action.url" target="_blank"
                    @click.prevent="onClickExit(action.url, $event)">
                    {{ action.text }}
                </p>
                <button class="button"
                    v-else-if="action.type === IChatActionType.BUTTON"
                    :href="action.url" target="_blank"
                    @click.prevent="onClickExit(action.url, $event)">
                    {{ action.text }}
                </button>
                <img class="image"
                    v-else-if="action.type === IChatActionType.IMAGE"
                    :href="action.url" target="_blank"
                    @click.prevent="onClickExit(action.url, $event)"
                    :src="action.src" />
                <!-- <div class="video"
                    v-else-if="action.type === IChatActionType.VIDEO">
                    TODO
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { ChatTheme } from '../state/types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library, IconPack, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSms } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { IChatMessage, IChatAction, IChatActionType } from '@/generated/schema-types';

library.add(faEnvelope, faSms, faWhatsapp as IconDefinition)

@Component({
    components: {
        FontAwesomeIcon
    },
})

export default class ChatMessageBlock extends Vue {
    @Prop() message!: string
    @Prop() who!: string
    @Prop() actions!: IChatAction[]
    @Prop() onSend!: (message: string) => any

    @Inject() readonly theme!: ChatTheme

    IChatActionType = IChatActionType

    selectedIdx: number = -1

    onClickAnswer(idx, value, e: Event) {
        this.selectedIdx = idx
        this.onSend(value)
    }

    onClickExit(url: string, e: Event) {
        Enabler.exitOverride('Dynamic URL exit', url)
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

    get envelope() { return faEnvelope }

    get sms() { return faSms }

    get whatsapp() { return faWhatsapp }
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

        .action {

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

            .button {
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

            .icon-button {
                flex-basis: calc(50% - 20px);
                color: #fff;
                cursor: pointer;
                margin: 5px 10px 5px 10px;
                padding: 10px;
            }

            .image {
                flex-basis: calc(50% - 20px);
                cursor: pointer;
                margin: 5px 10px 5px 10px;
                padding: 10px;
            }

            .link {
                flex-basis: calc(50% - 20px);
                color: #fff;
                cursor: pointer;
                margin: 5px 10px 5px 10px;
                padding: 10px;
            }

            .video {
                flex-basis: calc(50% - 20px);
                color: #fff;
                cursor: pointer;
                margin: 5px 10px 5px 10px;
                padding: 10px;
            }
            
        }
    }
}
</style>
