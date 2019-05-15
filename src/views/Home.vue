<template>
    <div id="view-home">
        <ChatApp :nlpChat="$root.nlpChat" 
            :size="size"
            :theme="{
                logo: '/brand/mcdonalds.png',
                backgroundImage: '/brand/background-chat.png',
                primaryColor: 'rgb(151, 30, 30)',
                secondaryColor: '#FEBF06'
            }" />
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