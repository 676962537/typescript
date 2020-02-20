<template>
  <div>
    <div>router1</div>
    <button @click="routerPush">点击跳转到router2</button>
<!--    <div id="mahenan">-->
<!--      <div>哈哈哈</div>-->
<!--      呵呵呵-->
<!--      <div><<<<</div>-->
<!--      <div>&lt;&lt;&lt;&lt;</div>-->
<!--    </div>-->
    <div id="mahenan">
      哈哈哈
      呵呵呵
      <<<<
      &lt;&lt;&lt;&lt;
    </div>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';

  @Component({})
  export default class App extends Vue {
    private beforeRouteEnter(to: any, from: any,next: any){
      console.log('router1.vue beforeRouteEnter');
      next();
    }
    private beforeRouteLeave(to: any, from: any,next: any){
      console.log('router1.vue beforeRouteLeave');
      next();
    }
    private async routerPush(){
      // this.changeFlag();
      await this.$router.push("/router2");
      console.log("routerPush this.$route.path:",this.$route.path);
    }
    private mounted(){
      // console.log('router1.vue created');
      // console.log(this.htmlEncode('<'));
      // console.log(this.htmlDecode('&lt;'));
      let node:any = document.getElementById('mahenan');
      console.log(node.innerText);
      console.log(node.innerHTML);
      console.log(node.textContent);
    }
    private htmlEncode(html){
      var sub = document.createElement('div');
      sub.textContent != null ? sub.textContent = html : sub.innerText = html;
      var output = sub.innerHTML;
      // sub = null;
      return output;
    }
    private htmlDecode(text){
      var sub = document.createElement('div');
      sub.innerHTML = text;
      var output = sub.textContent || sub.innerText;
      // sub = null;
      return output;
    }
    // private mounted(){
    //   console.log('router1.vue mounted');
    // }
  }
</script>

<style scoped>

</style>
