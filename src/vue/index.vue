<template>
  <div>
    <div>index</div>
    <button @click="clickFn">点击加载</button>
  </div>
</template>

<script lang='ts'>
import {Component, Vue, Watch, Prop, Emit} from 'vue-property-decorator';
import {State, Getter, Action, Mutation} from 'vuex-class';
@Component({
  components:{

  }
})
export default class Index extends Vue {
  private mounted(){
  }
  private clickFn(){

  }
}
</script>

<style scoped>

</style>
