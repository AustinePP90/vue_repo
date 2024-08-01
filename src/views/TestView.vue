<!-- Vue 기본 틀 template, sciprt, style -->
<template>
  <div class="test">
    <p>2ne1 <b>15주년</b> 콘서트</p>
    <!-- Mustache(이중 중괄호) {{}} 사용  -->
    <!-- 텍스트 컨텐츠(textContents)를 업데이트 함, tag요소도 일반 텍스트로 나옴, HTML로 삽입하고 싶으면 v-html사용 -->
    <p>{{ title }}</p>
    <p v-text="title"></p>
    <!-- v-html사용, innerHTML처럼 작동함 -->
    <p v-html="title"></p>
    <div>
      <!-- v-model은 양방향 바인딩을 만듬, v-model은 value 속성을 가짐(text, select, textarea) -->
      <!-- 텍스트 유형의 <input>과 <textarea> 경우, value 속성(v-model값이 value값을 가짐, v-model을 사용하면 value를 구할수 있음)과 input 이벤트를 사용
      <input type="checkbox">과 <input type="radio"> 경우, checked 속성과 change 이벤트를 사용
      <select>는 value를 속성으로 사용하고 change를 이벤트로 사용 
      단일 체크박스는 불리언을 값을 사용 -->
      <p>내용: {{ text }}</p>
      <input type="text" v-model="text" />
    </div>
    <div><textarea v-model="text"></textarea></div>
  </div>
</template>

<script>
export default {
  name: "TestView",
  components: {}, // 자식 컴포넌트들을 말한다
  data() {
    return {
      title: "2ne1 <b>15주년</b> 콘서트",
      text: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
div {
  margin-bottom: 20px;
}
</style>
