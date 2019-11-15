<template>
  <div>
    <div class="popup">popup.vue</div>
    <div class="title-components">title-popup</div>
    <counter1></counter1>
    <counter></counter>
    <counter2></counter2>
  </div>
</template>

<script>
  import {getMyName,getMyAge} from "../common/util"
  import {getMyId} from "../common/own"
  import counter from "../componentRegistration/button-counter-obj"
  import counter2 from "../componentRegistration/button-counter-vue.vue"
  export default {
    name: "popup.vue",
    mounted(){
      getMyName("popup.vue");
      getMyAge("popup.vue");
      getMyId();
    },
    components:{
      counter,counter2
    }
  }
</script>

<style scoped>
  @import "../common/common.css";
  .popup{
    color: red;
  }
</style>
