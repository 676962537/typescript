import Vue from "vue"
// 定义一个名为 button-counter 的新组件
Vue.component('counter1', {
  data(){
    return{
      count: 0
    }
  },
  methods:{
    clickHandler(){
      (this as any).count++;
    }
  },
  // template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
  render:function(h){
    return h('div',{
      domProps: {
        innerHTML: `mahenan--button-counter.ts--${(this as any).count}`
      },
      on: {
        click: (this as any).clickHandler
      },
    })
  }
})
