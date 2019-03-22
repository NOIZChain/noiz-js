<template>
    <App class="app-chat">
        <div class="brand-header" :style="{ backgroundColor: primaryColor }">
            <div class="brand-description"></div>
            <img class="brand-logo" :src="logo" />
        </div>
        <StripCta>
            <span>{{ $t('poweredBy') }}</span>
            <img :src="require('@/assets/logo-noiz.png')" />
        </StripCta>
        <ChatArea :background="chatBackground" />
        <ChatInput />
    </App>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from '@/components/Button.vue'
import App from '@/components/App.vue';
import Background from '@/components/Background.vue'
import StripCta from '@/components/StripCta.vue'
import ChatArea from './components/ChatArea.vue'
import ChatInput from './components/ChatInput.vue'

@Component({
    components: {
        HelloWorld,
        Button,
        App,
        Background,
        StripCta,
        ChatArea,
        ChatInput
    },
})
export default class ChatApp extends Vue {
    @Prop() chatBackground!: string
    @Prop() logo!: string
    @Prop() primaryColor!: string
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