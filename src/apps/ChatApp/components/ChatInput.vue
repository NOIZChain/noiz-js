<template>
    <form name="chat-form">
        <div class="component-chat-input-wrapper">
            <input :value="message" class="chat-input" name="message" type="text" :placeholder="$t('askSomething')" />
        </div>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Background from '@/components/Background.vue'

@Component({
    components: {
    }
})
export default class ChatInput extends Vue {
    @Prop({ default: '' }) message!: string
}
</script>

<style scoped lang="scss">
.component-chat-input-wrapper {
    background-color: #ffffff;
    flex-flow: row;
    display: flex;

    .chat-input {
        border: 0;
        margin: 0;
        padding: 0 20px;
        display: inline-flex;
        flex: 1 1 auto;
        height: 60px;
        font-size: 14px;
        font-weight: 500;
    }
}
</style>
