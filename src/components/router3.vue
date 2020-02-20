<template>
  <div>router3.vue</div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';

  @Component({})
  export default class App extends Vue {
    private created(){
      // console.log('router3.vue created');
      // console.log('this.$route.path:',this.$route.path);
      // console.log('location.href:',location.href);
    }
    // private mounted(){
    //   console.log('router3.vue mounted');
    //   console.log('this.$route.path:',this.$route.path);
    //   console.log('location.href:',location.href);
    // }
  }
</script>

<style scoped>

</style>
