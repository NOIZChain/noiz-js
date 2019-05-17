<template>
    <div id="view-home">
        <ChatApp :nlpChat="$root.nlpChat" 
            :theme="theme"
            :firstMessage="$t('firstMessage')"
            :size="size"
             />
        <div class="app-settings">
            <div class="size-settings">
                <div class="size-width">
                    <label>Width</label>
                    <input v-model="size.width" />
                </div>
                <div class="size-height">
                    <label>Height</label>
                    <input v-model="size.height" />
                </div>
            </div>
            <div class="language-settings">
                <button @click="$i18n.locale = 'en'">
                    English
                </button>
                <button @click="$i18n.locale = 'zhHans'">
                    中文（简体）
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';
import ChatApp from '@/apps/ChatApp/index.vue';
import { IChatMessage } from '../generated/schema-types';
import { AppSize } from '../components/App';
import { ChatTheme } from '../apps/ChatApp/state/types';

@Component({
    components: {
        ChatApp
    },
})
export default class Home extends Vue {
    private size: AppSize = {
        width: 400,
        height: 530
    }

    theme: ChatTheme = {
            logo: '/brand/mcdonalds.png',
            backgroundImage: '/brand/background-chat.png',
            headerColor: 'rgb(151, 30, 30)',
            headerJustification: 'right',
            headerHeight: '80px',
            botColor: 'rgb(151, 30, 30)',
            clientColor: '#DC8233',
            submitColor: '#FEBF06',
            answerBorder: '1px solid rgb(220, 130, 50)'
        }
}
</script>

<style scoped lang="scss">
#view-home {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    .size-settings {
        color: white;
    }
}
</style>