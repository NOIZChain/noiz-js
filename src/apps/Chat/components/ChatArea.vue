<template>
    <Background class="component-chat-area" :src="background" >
        <slot />
    </Background>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Background from '@/components/Background.vue'

@Component({
    components: {
        Background
    }
})
export default class ChatArea extends Vue {
    @Prop({
        default: ''
    }) background!: string
}
</script>

<style scoped lang="scss">
.component-chat-area {
    display: flex;
    flex: 1 1 auto;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-start;
}
</style>
