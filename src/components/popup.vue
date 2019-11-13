<template>
  <div>
    <div class="popup">popup.vue</div>
    <div class="title-components">title-popup</div>
  </div>
</template>

<script>
  import {getMyName,getMyAge} from "../common/util"
  // import {getMyId} from "../common/common"
  export default {
    name: "popup.vue",
    mounted(){
      getMyName();
      getMyAge();
      // getMyId();
    }
  }
</script>

<style scoped>
  @import "../common/common.css";
  .popup{
    color: red;
  }
</style>
