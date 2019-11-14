<template>
  <div>
    <div class="about">about</div>
    <div class="title-components">about--title</div>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';
  import {getMyName,getMyAge} from "../common/util"
  import {Independent} from "../common/Independent"
  @Component({

  })
  export default class About extends Vue {
    private name='about'
    private mounted(){
      getMyName("about.vue");
      getMyAge("about.vue");
      Independent();
    }
  }
</script>

<style scoped>
  @import "../common/common.css";
  .about{
    color: red;
  }
</style>
