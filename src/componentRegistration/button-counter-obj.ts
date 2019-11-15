export default {
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
  render:function(h:any){
    return h('div',{
      domProps: {
        innerHTML: `mahenan--button-counter-obj.ts--${(this as any).count}`
      },
      on: {
        click: (this as any).clickHandler
      },
    })
  }
}
