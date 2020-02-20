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
    <div>name1---{{name1}}</div>
    <div>name2---{{name2}}</div>
    <div>{{gettersName}}</div>
    <div>{{gettersName2}}</div>
  </div>
</template>

<script lang='ts'>
import vue from 'vue'
import {Component, Vue, Watch, Prop, Emit} from 'vue-property-decorator';
import {State, Getter, Action, Mutation,namespace} from 'vuex-class';
import {getMyName,getMyAge} from "../common/util"
import {getMyId} from "../common/own"
import {Independent} from "../common/Independent"
import counter from "../componentRegistration/button-counter-obj"
import counter2 from "../componentRegistration/button-counter-vue.vue"
import {util3} from '../util/index'
const userModule = namespace('user');
const chatModule = namespace('chat');
@Component({
  components:{
    counter,counter2,
    asynccc:() => import( /* webpackChunkName:'async-hello' */ '../asyncComponents/hello.vue')
  }
})
export default class Index extends Vue {
  @userModule.State('name') private name1;
  @chatModule.State('name') private name2;
  @userModule.Mutation('changeName') private changeName;
  @chatModule.Mutation('changeName') private changeName2;
  @userModule.Getter('gettersName') private gettersName;
  @chatModule.Getter('gettersName') private gettersName2;
  @userModule.Action('getData') private getData;
  @chatModule.Action('getData') private getData2;
  private componentsFlag:boolean= false;
  private created(){
    console.log('index created');
  }
  private async mounted(){
    // this.changeName();
    // this.changeName2();
    // let data = await this.$store.dispatch('user/getData');
    // console.log(`userModule--${data}`);
    // let data2 = await this.getData2();
    // console.log(`chatModule--${data2}`);
    // getMyName("index.vue");
    // getMyAge("index.vue");
    // getMyId();
    // Independent();

    // try{
    //   let data = await util();
    //   console.log("await:::",data);
    // }catch(e){
    //   console.log("catch:::",e);
    // }

    // try{
    //   let data = await util3();
    //   console.log("await:::",data);
    // }catch(e){
    //   console.log("catch:::",e);
    // }

    // let fn = () => {
    //   return new Promise(((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(1);
    //     },3000)
    //   }))
    // };
    //
    // console.log(await Promise.resolve(2))
    // try{
    //   await Promise.reject(3)
    // }catch(e){
    //   console.log(e)
    // }
    // console.log(fn());
    // try{
    //   let data = await Promise.resolve(fn())
    //   console.log(data);
    // }catch(e){
    //   console.log(e)
    // }

    // let fn2 = (key:number) => {
    //   let result;
    //   if(key > 2){
    //     result = this.getData4();
    //   }else{
    //     result = ["mahenan"];
    //   }
    //   return Promise.resolve(result)
    // };
    // console.log(fn2(1));
    // fn2(3).catch((e) => {
    //   console.log(e);
    // });

    // let fn2 = (key:number) => {
    //   return new Promise((async (resolve, reject) => {
    //     let data = await this.getData4();
    //     resolve(data);
    //   }))
    // };
    // console.log(await fn2(1));

    // console.log(await fn2(1));
    // console.log(await fn2(3));

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
  private beforeRouteEnter(to: any, from: any,next: any){
    console.log('index beforeRouteEnter');
    next();
  }
  private beforeRouteLeave(to: any, from: any,next: any){
    console.log('index beforeRouteLeave');
    next();
  }
}
</script>

<style scoped>
  @import "../common/common.css";
  .index{
    color: yellow;
  }
</style>
