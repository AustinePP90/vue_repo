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
    <!-- ------------------------------------------------------------ -->
    <table>
      <thead>
        <th>이름</th>
        <th>나이</th>
        <th>포지션</th>
      </thead>
      <tbody>
        <tr v-for="(yg, index) in ygs" v-bind:key="index">
          <td>{{ yg.name }}</td>
          <td>{{ yg.age }}</td>
          <td>{{ yg.position }}</td>
        </tr>
      </tbody>
    </table>
    <!-- ------------------------------------------------------------ -->
    <div>
      <!-- v-model.number, 입력값을 자동으로 숫자로 변환함, parseFloat()를 사용한 것과 유사함 -->
      <label>국어: <input type="number" v-model.number="kor" /></label>
      <br />
      <label>영어: <input type="number" v-model.number="eng" /></label>
      <br />
      <label>수학: <input type="number" v-model.number="math" /></label>
      <br />
      <p>평균: {{ average.toFixed(2) }}</p>
      <p>학점: {{ grade }}</p>
    </div>
    <!-- ------------------------------------------------------------ -->
    <label><input type="number" v-model.number="number" />단</label>
    <button @click="calculate">계산</button>
    <p>{{ number }}단</p>
    <div v-if="showResults">
      <div v-for="multiNum in multiNums" :key="multiNum">
        <p>{{ number }} * {{ multiNum }} = {{ results[multiNum - 1] }}</p>
      </div>
    </div>
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

      ygs: [
        { name: "CL", age: 19, position: "리더" },
        { name: "공민지", age: 16, position: "막내" },
        { name: "산다라", age: 26, position: "비주얼" },
        { name: "박봄", age: 26, position: "메인보컬" },
      ],

      kor: "",
      eng: "",
      math: "",

      number: 1,
      multiNums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      results: [],
      showResults: false,
    };
  },

  computed: {
    average() {
      return (this.kor + this.eng + this.math) / 3;
    },
    grade() {
      if (this.average >= 90) return "A";
      if (this.average >= 80) return "B";
      if (this.average >= 70) return "C";
      if (this.average >= 60) return "D";
      return "F";
    },
  },

  methods: {
    calculate() {
      this.results = this.multiNums.map((num) => this.number * num);
      this.showResults = true;
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 20px;
}
</style>
