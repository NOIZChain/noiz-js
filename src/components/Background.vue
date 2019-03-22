<template>
    <div class="component-background" v-bind:style="{ backgroundImage: `url(${src})` }">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Background extends Vue {
    @Prop({
        default: ''
    }) src!: string
}
</script>

<style scoped lang="scss">
.component-background {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
