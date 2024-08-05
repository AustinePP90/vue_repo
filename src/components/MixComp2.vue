<template>
  <div class="">
    <h1>Component Two(2)</h1>
    <p>{{ sharedData }}</p>
    <button @click="sharedMethod">모두의 METHOD</button>
  </div>
</template>

<script>
import { commonMixin } from "@/mixins/commonMixin";
export default {
  name: "MixComp2",

  mixins: [commonMixin],

  mounted() {
    console.log("컴포넌트2 mounted");
  },

  unmounted() {
    console.log("컴포넌트2 unmounted");
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
