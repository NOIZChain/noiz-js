<template>
    <a class="component-strip-cta">
        <slot />
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Background extends Vue {
}
</script>

<style scoped lang="scss">
.component-strip-cta {
    height: 30px;
    background-color: #FFFFFF;
    color: #b7bbc4;
    width: 100%;
    display: flex;
    flex-shrink: 0;
    justify-content: flex-end;
    align-items: center;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 500;

    & > img {
        height: 100%;
        display: flex;
        margin-right: 10px;
    }
}
</style>
