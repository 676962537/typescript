<template>
    <div>
      <div class="normal">normal</div>
      <div class="title-components">normal--title</div>
      <counter1></counter1>
      <counter></counter>
      <counter2></counter2>
    </div>
</template>

<script>
    import vue from "vue"
    import {getMyName,getMyAge} from "../common/util"
    import counter from "../componentRegistration/button-counter-obj"
    import counter2 from "../componentRegistration/button-counter-vue.vue"
    export default {
    name: "normal",
      mounted(){
        getMyName("normal.vue");
        getMyAge("normal.vue");
      },
      components:{
        counter,counter2
      }
  }
</script>

<style scoped>
    @import "../common/common.css";
    .normal{
        color: green;
    }
</style>
