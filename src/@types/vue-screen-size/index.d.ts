declare module 'vue-screen-size' {
    export type IVueScreenMixin = {
        computed: {
            $vssEvent: () => Event,
            $vssWidth: () => number,
            $vssHeight: () => number,
        },
        methods: {
            getScreenWidth: () => number,
            getScreenHeight: () => number,
            handleResize: (event: Event) => any,
            $vssDestroyListener: () => any
        },
        mounted: () => any,
        destroyed: () => any
    }

    export var VueScreenMixin: IVueScreenMixin
    
    export function install(vue: any): any
}

declare module 'vue/types/vue' {
    interface Vue {
        $vssEvent: Event,
        $vssWidth: number,
        $vssHeight: number
    }
  }