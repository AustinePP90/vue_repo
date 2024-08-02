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
    <br /><br /><br />
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
    <br /><br /><br />
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
    <br /><br /><br />
    <!-- ------------------------------------------------------------ -->
    <label><input type="number" v-model.number="number" />단</label>
    <button @click="calculate">계산</button>
    <p>{{ number }}단</p>
    <div v-if="showResults">
      <div v-for="multiNum in multiNums" :key="multiNum">
        <p>{{ number }} * {{ multiNum }} = {{ results[multiNum - 1] }}</p>
      </div>
    </div>
    <br /><br /><br />
    <!-- ------------------------------------------------------------ -->
    <div>
      <p>
        <label
          >이메일<input
            type="text"
            placeholder="이메일을 입력하세요"
            v-model="emailValue"
            @input="changeEmail" /></label
        ><span>{{ msgEmail }}</span>
      </p>
      <p>
        <label
          >비밀번호<input
            type="text"
            @input="changePwd"
            v-model="passwordValue"
            placeholder="비밀번호를 입력하세요"
        /></label>
        <span>{{ msgPwd }}</span>
      </p>
      <p>
        <label
          >비밀번호확인<input
            type="text"
            @input="changePwd2"
            v-model="passwordValueConfirm"
            placeholder="비밀번호확인을 입력하세요"
        /></label>
        <span>{{ msgPwd2 }}</span>
      </p>
    </div>
  </div>
</template>

<!-- Vue2에서 사용하는 option api 방식 -->
<script>
export default {
  name: "TestView",

  components: {}, // 자식 컴포넌트들을 말한다

  data() {
    return {
      title: "2ne1 <b>15주년</b> 콘서트",
      text: "",
      // ---------------------------------------------------------------------------
      ygs: [
        { name: "CL", age: 19, position: "리더" },
        { name: "공민지", age: 16, position: "막내" },
        { name: "산다라", age: 26, position: "비주얼" },
        { name: "박봄", age: 26, position: "메인보컬" },
      ],
      // ---------------------------------------------------------------------------
      kor: "",
      eng: "",
      math: "",
      // ---------------------------------------------------------------------------
      number: 1,
      multiNums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      results: [],
      showResults: false,
      // ---------------------------------------------------------------------------
      emailValue: "",
      msgEmail: "이메일을 입력하세요",
      passwordValue: "",
      msgPwd: "비밀번호를 입력하세요",
      passwordValueConfirm: "",
      msgPwd2: "비밀번호를 다시 입력하세요",
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
    // ---------------------------------------------------------------------------
    changeEmail() {
      // this.emailValue이 이메일 형식에 맞는지 체크
      const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 문자열 + @ + 문자열 + . + 문자열
      if (this.emailValue.length == 0) {
        this.msgEmail = "이메일을 입력하세요";
      } else if (emailExp.test(this.emailValue) == true) {
        this.msgEmail = "정상적인 이메일 주소입니다.";
      } else {
        this.msgEmail = "이메일 주소가 올바르지 않습니다.";
      }
    },

    changePwd() {
      const passwordExp =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // 문자(영어, 대문자 가능)와 숫자 그리고 특수기호로 이뤄진 8자리 비밀번호
      if (this.passwordValue.length == 0) {
        this.msgPwd = "비밀번호 8자리를 입력하세요";
      } else if (passwordExp.test(this.passwordValue) == true) {
        this.msgPwd = "사용할수 있는 비밀번호 입니다.";
      } else {
        this.msgPwd = "사용할수 없는 비밀번호 입니다.";
      }
    },

    changePwd2() {
      if (this.passwordValueConfirm == this.passwordValue) {
        this.msgPwd2 = "비밀번호를 제대로 입력했습니다.";
      } else {
        this.msgPwd2 = "비밀번호를 제대로 입력하세요.";
      }
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 20px;
}
</style>
