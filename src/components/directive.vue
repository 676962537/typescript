<template>
  <div>
    <div>directive</div>
    <div>------------------------</div>
    <div><input v-focus:foo="1 + 1" type="text" placeholder="请输入内容"></div>
    <p v-pin:[direction]="200">Stick me 200px from the top of the page</p>
    <div v-color>ajkshdkjahskjd</div>
    <button @click="changeDirection">changeDirection</button>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';
  @Component({
    components:{

    },
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el,binding,vnode) {
          console.log("el:",el)
          console.log("binding:",binding)
          console.log("vnode:",vnode)
          el.focus()
        }
      },
      // pin:{
      //   update: function (el, binding:any, vnode) {
      //     el.innerHTML = binding.arg;
      //   }
      // }
      pin(el, binding:any, vnode){
        el.innerHTML = binding.arg;
      }
    }
  })
  export default class App extends Vue {
    private name:string= 'mahenan';
    private direction:string= 'mahenan';
    private changeDirection(){
      this.direction = 'chenhong';
    }
  }
</script>

<style scoped>
  p{
    margin: 0;
    padding: 0;
  }
  .arrow{
    display: inline-block;
    width: 200px;
    height: 200px;
    background: gray;
  }
  .arrow::before{
    border-color: transparent gray transparent transparent;
  }
</style>
