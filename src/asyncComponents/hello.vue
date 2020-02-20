<template>
  <div class="title">我是异步组件</div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';

  @Component({})
  export default class App extends Vue {

  }
</script>

<style scoped>
  .title{
    color: red;
  }
</style>
