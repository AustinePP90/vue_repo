<template>
  <div class="">
    <h1>Calculator1View4</h1>
    <input type="text" v-model="state.num1" />
    <span> + </span>
    <input type="text" v-model="state.num2" />
    <span> = </span>
    <span>{{ state.result }}</span>
    <br /><br /><br />
    <input type="text" v-model="state.multiNum1" />
    <span> * </span>
    <input type="text" v-model="state.multiNum2" />
    <span> = </span>
    <span>{{ state.result2 }}</span>
    <br /><br /><br />
    <input type="text" v-model="state.minusNum1" />
    <span> - </span>
    <input type="text" v-model="state.minusNum2" />
    <span> = </span>
    <span>{{ state.result3 }}</span>
    <br /><br /><br />
    <p>자유로운 메모: <input type="text" v-model="state.message" /></p>
    <span>뿅: {{ state.result4 }}</span>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Calculator1View4",
  setup() {
    // 반응형 상태 객체: 속성이 변경 될때 마다 자동으로 DOM을 업데이트
    let state = reactive({
      num1: 0, // 첫번째 텍스트박스와 바인딩될 숫자 상태
      num2: 0, // 두번째 텍스트박스와 바인딩될 숫자 상태
      result: computed(() => Number(state.num1) + Number(state.num2)), // 계산된 결과를 저장할 상태

      multiNum1: 0,
      multiNum2: 0,
      result2: computed(
        () => Number(state.multiNum1) * Number(state.multiNum2)
      ),

      minusNum1: 0,
      minusNum2: 0,
      result3: computed(
        () => Number(state.minusNum1) - Number(state.minusNum2)
      ),

      message: "",
      result4: computed(() => state.message),
    });
    return { state };
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
