<template>
  <div class="">
    <h1>Component Three with Mixin(3)</h1>
    <p>👍{{ sharedLike }}</p>
    <button @click="sharedThumbsUp">좋아요를 부탁해요</button>
  </div>
</template>

<script>
import { commonMixin } from "@/mixins/commonMixin";
export default {
  name: "MixComp3",

  mixins: [commonMixin],

  mounted() {
    console.log("컴포넌트3 mounted");
  },

  unmounted() {
    console.log("컴포넌트3 unmounted");
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
