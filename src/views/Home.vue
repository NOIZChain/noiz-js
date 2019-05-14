<template>
    <div id="view-home">
        <ChatApp :nlpChat="$root.nlpChat" :theme="{
            logo: '/brand/mcdonalds.png',
            backgroundImage: '/brand/background-chat.png',
            primaryColor: 'rgb(151, 30, 30)',
            secondaryColor: '#FEBF06'
        }" />
        <div class="app-settings">
            <button @click="$i18n.locale = 'en'">
                English
            </button>
            <button @click="$i18n.locale = 'zhHans'">
                中文（简体）
            </button>
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

@Component({
    components: {
        ChatApp
    },
})
export default class Home extends Vue {
}
</script>

<style scoped lang="scss">
#view-home {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
}
</style>