<template>
  <Background v-bind:src="require('./assets/background.jpg')" id="app">
    <router-view/>
  </Background>
</template>

<script lang="ts">
import Background from '@/components/Background.vue';
import { Component, Prop, Vue, Inject, Provide } from 'vue-property-decorator';
import { ChatTheme } from './apps/ChatApp/state/types';

@Component({
  components: {
    Background
  }
})
export default class App extends Vue {
  @Provide() theme: ChatTheme = {
    logo: '/brand/mcdonalds.png',
    backgroundImage: '/brand/background-chat.png',
    primaryColor: 'rgb(151, 30, 30)',
    secondaryColor: '#FEBF06'
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
