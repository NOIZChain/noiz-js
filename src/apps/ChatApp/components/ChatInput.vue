<template>
    <form name="chat-form" @submit="onSubmit" novalidate>
        <div class="component-chat-input-wrapper">
            <input v-model="message" class="chat-input" name="message" type="text" :placeholder="$t('askSomething')" />
            <button type="submit" class="submit-button" :style="{
                color: theme.secondaryColor
            }">
                <FontAwesomeIcon icon="arrow-circle-up" />
            </button>
        </div>
    </form>
</template>

<script lang="ts">
import Background from '@/components/Background.vue';
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ChatTheme } from '../state/types';

library.add(faArrowCircleUp)

@Component({
    components: {
        FontAwesomeIcon
    },
})
export default class ChatInput extends Vue {
    @Prop() onSend!: (message: string) => any

    @Inject() readonly theme!: ChatTheme
    
    message: string = ''

    onSubmit(e: Event) {
        e.preventDefault()
        e.stopPropagation()
        
        this.onSend(this.message)
        this.clear()
    }

    clear() {
        this.message = ''
    }
}
</script>

<style scoped lang="scss">
.component-chat-input-wrapper {
    background-color: #ffffff;
    flex-flow: row;
    display: flex;
    outline: none;

    .chat-input {
        border: 0;
        margin: 0;
        padding: 0 20px;
        display: inline-flex;
        flex: 1 1 auto;
        height: 60px;
        font-size: 14px;
        font-weight: 500;
        outline: none;
    }

    .submit-button {
        background: none;
        border: none;
        font-size: 30px;
        outline: none;
        cursor: pointer;
    }
}
</style>
