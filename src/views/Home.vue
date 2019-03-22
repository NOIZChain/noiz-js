<template>
    <div id="view-home">
        <Chat logo="/brand/mcdonalds.png" 
            chatBackground="/brand/background-chat.png"
            primaryColor="rgb(151, 30, 30)" />
    </div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'vue-property-decorator';
import Chat from '@/apps/Chat/index.vue'

@Component({
    components: {
        Chat
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