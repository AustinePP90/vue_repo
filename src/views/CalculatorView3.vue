<template>
  <div class="">
    <h1>Calculator1View3</h1>
    <input type="text" v-model="num1" />
    <span> + </span>
    <input type="text" v-model="num2" />
    <span> = </span>
    <span>{{ result }}</span>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue";

function plusNumbers() {
  // 반응형 상태 객체: 속성이 변경 될때 마다 자동으로 DOM을 업데이트
  let state = reactive({
    num1: 0, // 첫번째 텍스트박스와 바인딩될 숫자 상태
    num2: 0, // 두번째 텍스트박스와 바인딩될 숫자 상태
    result: computed(() => Number(state.num1) + Number(state.num2)), // 계산된 결과를 저장할 상태
  });
  return toRefs(state); // toRefs : 반응형 상태객체 -> 일반 자바스크립트 객체
}

export default {
  name: "Calculator1View3",
  setup() {
    // 구조분해할당으로 num1, num2, result값을 얻기
    let { num1, num2, result } = plusNumbers();

    // 구조분해된 변수값을 반환
    return { num1, num2, result };
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
