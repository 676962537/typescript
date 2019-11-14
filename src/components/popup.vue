<template>
  <div>
    <div class="popup">popup.vue</div>
    <div class="title-components">title-popup</div>
  </div>
</template>

<script>
  import {getMyName,getMyAge} from "../common/util"
  import {getMyId} from "../common/own"
  export default {
    name: "popup.vue",
    mounted(){
      getMyName("popup.vue");
      getMyAge("popup.vue");
      getMyId();
    }
  }
</script>

<style scoped>
  @import "../common/common.css";
  .popup{
    color: red;
  }
</style>
