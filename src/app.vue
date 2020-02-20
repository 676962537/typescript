<template>
  <div id="app">
    <!--write something no changed-->
    <div>App</div>
    <router-link to="/index">/index</router-link>
    <router-link to="/about">/about</router-link>
    <router-link to="/normal">/normal</router-link>
    <router-link to="/popup">/popup</router-link>
    <router-link to="/directive">/directive</router-link>
    <router-link to="/router1">/router1</router-link>
    <router-link to="/router2">/router2</router-link>
    <div>
      <button @click="goHref('/index')">/index</button>
      <button @click="goHref('/about')">/about</button>
      <button @click="goHref('/normal')">/normal</button>
      <button @click="goHref('/popup')">/popup</button>
      <button @click="goHref('/router1')">/router1</button>
      <button @click="goHref('/router2')">/router2</button>
    </div>
    <div>---------------router3组件----------------------</div>
    <router3 v-if="flags"></router3>
    <div>{{flags}}</div>
    <div>-------------------------------------</div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';
  import router3 from './components/router3.vue';
  @Component({
    components:{
      router3
    }
  })
  export default class App extends Vue {
    private flags:boolean= false;
    private async mounted(){
      this.$router.beforeEach((to,from,next) => {
        console.log("beforeEach next before:",this.$route.path);
        next();
        console.log("beforeEach next after:",this.$route.path);
      });
      this.$router.beforeResolve((to,from,next) => {
        console.log("beforeResolve next before:",this.$route.path);
        // this.flags = to.path === '/router2';
        next();
        console.log("beforeResolve next after:",this.$route.path);
      });
      this.$router.afterEach((to,from) => {
        console.log("afterEach:",this.$route.path);
      });
    }
    private goHref(href:string){
      this.$router.push(href);
    }
  }
</script>

<style scoped>

</style>
