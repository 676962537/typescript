<template>
    <div>
      <div class="normal">normal</div>
      <div class="title-components">normal--title</div>
    </div>
</template>

<script>
    import vue from "vue"
    import {getMyName,getMyAge} from "../common/util"
    export default {
    name: "normal",
      mounted(){
        getMyName();
        getMyAge();
        console.log(vue);
      }
  }
</script>

<style scoped>
    @import "../common/common.css";
    .normal{
        color: green;
    }
</style>
