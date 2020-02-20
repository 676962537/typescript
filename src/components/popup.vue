<template>
  <div>
    <div class="popup">popup.vue</div>
    <div class="title-components">title-popup</div>
    <counter1></counter1>
    <counter></counter>
    <counter2></counter2>
    <div>----------</div>
    <subCom></subCom>
  </div>
</template>

<script>
  import {getMyName,getMyAge} from "../common/util"
  import {getMyId} from "../common/own"
  import counter from "../componentRegistration/button-counter-obj"
  import counter2 from "../componentRegistration/button-counter-vue.vue"
  import subCom from './subCom.vue';
  export default {
    name: "popup.vue",
    mounted(){
      console.log("popup.vue mounted");
    },
    data(){
      return {
        name:'chenhong'
      }
    },
    components:{
      counter,counter2,subCom
    }
  }
</script>

<style scoped>
  @import "../common/common.css";
  .popup{
    color: red;
  }
</style>
