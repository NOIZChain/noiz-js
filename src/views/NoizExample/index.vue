<template>
    <ChatApp :nlpChat="nlpChat" 
        :theme="theme"
        firstMessage="I will answer all the questions"
        :size="{
            width: 300,
            height: 500
        }"
            />
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Prop,
    Provide
} from 'vue-property-decorator';
import ChatApp from '@/apps/ChatApp/index.vue';
import { AppSize } from '@/components/App';
import { ChatTheme } from '@/apps/ChatApp/state/types';
import { nlpChat } from '@/noiz'

@Component({
    components: {
        ChatApp
    },
})
export default class NoizExample extends Vue {
    nlpChat = nlpChat
    theme: ChatTheme = {
        logo: require('./assets/logo.png'),
        backgroundImage: require('./assets/background.jpg'),
        headerColor: '#ffffff',
        headerJustification: 'left',
        botColor: '#5ADC6E',
        botTextColor: '#000000',
        clientColor: '#11478A',
        headerHeight: '50px',
        headerMobileHeight: '25px',
        answerBorder: '1px solid #ffffff',
        answerSelectedColor: '#4C4C4C'
    }
}
</script>

<style scoped lang="scss">

</style>