<template>
    <div class="component-app" v-bind:style="{ width: width + 'px', height: height + 'px' }">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
    }
})
export default class App extends Vue {
    width: number = 400
    height: number = 530
}
</script>

<style scoped lang="scss">
.component-app {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
}
</style>
