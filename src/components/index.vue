<template>
  <div>
    <div>index</div>
    <button @click="clickFn">点击加载</button>
    <div class="index">index</div>
    <div class="title-components">index---title</div>
    <counter1></counter1>
    <counter></counter>
    <counter2></counter2>
    <div>-------------------</div>
    <asynccc v-if="componentsFlag"></asynccc>
    <div v-if="componentsFlag">test</div>
    <button @click="getAsyncComponents">加载异步组件</button>
  </div>
</template>

<script lang='ts'>
import vue from 'vue'
import {Component, Vue, Watch, Prop, Emit} from 'vue-property-decorator';
import {State, Getter, Action, Mutation} from 'vuex-class';
import {getMyName,getMyAge} from "../common/util"
import {getMyId} from "../common/own"
import {Independent} from "../common/Independent"
import counter from "../componentRegistration/button-counter-obj"
import counter2 from "../componentRegistration/button-counter-vue.vue"
@Component({
  components:{
    counter,counter2,
    asynccc:function(){
      return import( /* webpackChunkName:'hello' */ '../asyncComponents/hello.vue');
    }
  }
})
export default class Index extends Vue {
  private name='index'
  private componentsFlag:boolean= false;
  private mounted(){
    getMyName("index.vue");
    getMyAge("index.vue");
    getMyId();
    Independent();
  }
  private getAsyncComponents(){
    this.componentsFlag = !this.componentsFlag;
  }
  private clickFn(){
    // import(/* webpackChunkName:'lodash222' */'lodash').then((lodash) => {
    //   console.log("lodash:",lodash);
    // });
    // import(/* webpackChunkName:'Independent' */'../common/Independent').then(({Independent}) => {
    //   console.log("Independent:",Independent);
    // });
  }
}
</script>

<style scoped>
  @import "../common/common.css";
  .index{
    color: yellow;
  }
</style>
