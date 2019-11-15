<template>
  <div @click="clickHandler">mahenan--button-counter-vue.vue--{{count}}</div>
</template>

<script lang="ts">
  import {Component,Vue} from "vue-property-decorator"
  @Component({
    components:{

    }
  })
  export default class Counter extends Vue{
    private name = "buttonj-counter-vue.vue"
    private count:number  = 0;
    private clickHandler(){
      this.count++;
    }
  }
</script>

<style scoped>

</style>
