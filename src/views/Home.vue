<template>
    <div id="view-home">
        <Chat />
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