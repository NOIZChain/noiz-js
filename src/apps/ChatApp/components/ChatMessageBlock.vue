<template>
    <div class="component-chat-message-block" v-bind:class="{ bot: who === 'bot', client: who === 'client' }">
        {{ message }}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IChatMessage } from '@/generated/schema-types';

@Component({
    components: {

    },
})
export default class ChatMessageBlock extends Vue {
    @Prop() message!: string
    @Prop() who!: string
}
</script>

<style scoped lang="scss">
.component-chat-message-block {
    &.bot {
        background-color: green;
    }

    &.client {
        background-color: blue
    }
    
}
</style>
