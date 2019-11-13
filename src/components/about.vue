<template>
  <div>
    <div class="about">about</div>
    <div class="title-components">about--title</div>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';
  import {getMyName} from "../common/util"
  @Component({

  })
  export default class About extends Vue {
    private name='about'
    private mounted(){
      getMyName();
    }
  }
</script>

<style scoped>
  @import "../common/common.css";
  .about{
    color: red;
  }
</style>
