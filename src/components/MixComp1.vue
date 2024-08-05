<template>
  <div class="">
    <h1>Component One(1)</h1>
    <p>{{ sharedData }}</p>
    <button @click="sharedMethod">모두의 METHOD</button>
  </div>
</template>

<script>
import { commonMixin } from "@/mixins/commonMixin";
export default {
  name: "MixComp1",

  mixins: [commonMixin],

  mounted() {
    console.log("컴포넌트1 mounted");
  },

  unmounted() {
    console.log("컴포넌트1 unmounted");
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
