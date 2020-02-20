<template>
  <div>
    <div>subCom.vue组件</div>
    <div>---{{data}}---</div>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';

  @Component({})
  export default class App extends Vue {
    @Prop() private data:any;
  }
</script>

<style scoped>

</style>
