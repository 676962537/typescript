<template>
  <div>
    <div>index</div>
    <button @click="clickFn">点击加载</button>
    <div class="index">index</div>
    <div class="title-components">index---title</div>
  </div>
</template>

<script lang='ts'>
import vue from 'vue'
import {Component, Vue, Watch, Prop, Emit} from 'vue-property-decorator';
import {State, Getter, Action, Mutation} from 'vuex-class';
import {getMyName,getMyAge} from "../common/util"
import {getMyId} from "../common/common"
@Component({
  components:{

  }
})
export default class Index extends Vue {
  private name='index'
  private mounted(){
    getMyName();
    getMyAge();
    getMyId();
  }
  private clickFn(){

  }
}
</script>

<style scoped>
  @import "../common/common.css";
  .index{
    color: yellow;
  }
</style>
