<template>
    <button class="component-button" @click="handleClick">
        <slot />
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop({
        default: () => undefined,
    }) onClick!: (e: MouseEvent) => any

    handleClick(e: MouseEvent) {
        console.log(e)
        this.onClick(e)
    }
}
</script>

<style scoped lang="scss">
.component-button {
    background: none;
    background-color: #a3a3a3;
    border-radius: 5px;
    color: #fff;
    padding: 7px 14px;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: lighten(#a3a3a3, 10%)
    }
}
</style>
