<template>
  <div>
    <div class="about">about</div>
    <div class="title-components">about--title</div>
    <counter1></counter1>
    <counter></counter>
    <counter2></counter2>
    <div>vuex-data->{{data}}</div>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';
  import {getMyName,getMyAge} from "../common/util"
  // import {Independent} from "../common/Independent"
  import counter from "../componentRegistration/button-counter-obj"
  import counter2 from "../componentRegistration/button-counter-vue.vue"
  import router from "../router/index"
  @Component({
    components:{
      counter,counter2
    }
  })
  export default class About extends Vue {
    @State('data') private data:any;
    @State('initStatus') private initStatus:any;
    @Watch('initStatus')
    onchange(value1:any,value2:any){
      console.log("value1:",value1);
      console.log("value2:",value2);
      if(value1){
        console.log("watch data:",this.data);
      }
    }
    private created(){
      console.log('about created',this.$router.currentRoute.path);
      console.log();
    }
    private mounted(){
      console.log('about mounted',this.$router.currentRoute.path);
      console.log(this.$router.currentRoute.path);
    }
    private beforeRouteEnter(to: any, from: any,next: any){
      console.log('about beforeRouteEnter');
      next(vm => {
        console.log('new vue Created');
      });
    }
    private beforeRouteLeave(to: any, from: any,next: any){
      console.log('about beforeRouteLeave');
      next();
    }
  }
</script>

<style scoped>
  @import "../common/common.css";
  .about{
    color: red;
  }
</style>
