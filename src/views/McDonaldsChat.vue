<template>
    <ChatApp :nlpChat="nlpChat" 
        :theme="theme"
        firstMessage="I will answer all the questions"
        :size="{
            width: 400,
            height: 530
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
import { AppSize } from '../components/App';
import { ChatTheme } from '../apps/ChatApp/state/types';
import { nlpChat } from '@/noiz'

@Component({
    components: {
        ChatApp
    },
})
export default class McDonaldsChat extends Vue {
    @Prop() firstMessage!: string
    nlpChat = nlpChat

    theme: ChatTheme = {
            logo: 'brand/mcdonalds.png',
            backgroundImage: 'brand/background-chat.png',
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

</style>