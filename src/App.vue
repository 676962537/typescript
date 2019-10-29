<template>
  <div id="app">
    <!--write something no changed-->
    <div>App</div>
    <router-link to="/index">/index</router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/normal">/normal</router-link>
    <router-link to="/popup">/popup</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {Component,Vue,Watch} from "vue-property-decorator"
  @Component({

  })
  export default class App extends Vue{
    private mounted(){
      console.log("app")
    }
  }
</script>

<style scoped>

</style>
