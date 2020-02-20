<template>
  <div>
    <div>router2</div>
    <div></div>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';
  import axios from 'axios';
  @Component({})
  export default class App extends Vue {
    private beforeRouteEnter(to: any, from: any,next: any){
      console.log('router2.vue beforeRouteEnter');
      next();
    }
    private beforeRouteLeave(to: any, from: any,next: any){
      console.log('router2.vue beforeRouteLeave');
      next();
    }
    private async created(){
      // let data = await axios.get("/api/index");
      // console.log("data:",data);
    }
    private async mounted(){
      let fn = () => {
        return new Promise(((resolve, reject) => {
          console.log(3);
          setTimeout(() => {
            let data = 2;

            if(data > 1){
              console.log(4);
              resolve(data);
            }else{
              reject('error');
            }
          },5000)
        }))
      };

      let fn2 = async () => {
        try{
          console.log(2);
          await fn();
          console.log(5);
        }catch(e){
          // console.log(e);
        }
      };

      console.log(1);
      await fn2();
      console.log(6);
    }
    // private mounted(){
    //   console.log('router2.vue mounted');
    // }
  }
</script>

<style scoped>

</style>
