<template>
    <div class="component-chat-message-block" v-bind:class="{ bot: who === 'bot', client: who === 'client' }">
        <div class="chat-bubble">
            {{ message }}
        </div>
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
    display: flex;
    flex-flow: row;
    width: 100%;

    &.bot {
        justify-content: flex-start;

        .chat-bubble {
            background-color: rgb(220, 130, 50);
            border-radius: 0 10px 10px 10px;
        }
    }

    &.client {
        justify-content: flex-end;

        .chat-bubble {
            background-color: rgb(151, 30, 30);
            border-radius: 10px 10px 0 10px;
        }
    }
    
    .chat-bubble {
        margin: 10px;
        padding: 10px;
        color: #fff;
        
    }
}
</style>
