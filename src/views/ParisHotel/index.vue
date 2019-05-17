<template>
    <ChatApp :nlpChat="nlpChat" 
        :theme="theme"
        firstMessage="I will answer all the questions"
        :size="{
            width: 320,
            height: 460
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
export default class McDonaldsChat extends Vue {
    nlpChat = nlpChat
    theme: ChatTheme = {
        logo: require('./assets/logo.png'),
        backgroundImage: require('./assets/background.jpg'),
        headerColor: '#000000',
        headerJustification: 'left',
        botColor: '#AE9264',
        clientColor: '#000000',
        headerHeight: '50px',
        answerBorder: 'none',
        answerSelectedColor: '#000000'
    }
}
</script>

<style scoped lang="scss">

</style>