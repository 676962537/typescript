<template>
  <div>
    <div class="about">about</div>
    <div class="title-components">about--title</div>
    <counter1></counter1>
    <counter></counter>
    <counter2></counter2>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';
  import {getMyName,getMyAge} from "../common/util"
  // import {Independent} from "../common/Independent"
  import counter from "../componentRegistration/button-counter-obj"
  import counter2 from "../componentRegistration/button-counter-vue.vue"
  @Component({
    components:{
      counter,counter2
    }
  })
  export default class About extends Vue {
    private name='about'
    private mounted(){
      getMyName("about.vue");
      getMyAge("about.vue");
      // Independent();
      console.log(this.name);
    }
  }
</script>

<style scoped>
  @import "../common/common.css";
  .about{
    color: red;
  }
</style>
