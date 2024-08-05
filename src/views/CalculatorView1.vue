<template>
  <div class="">
    <h1>Calculator1View1</h1>
    <input type="text" v-model="num1" @keyup="plusNumbers" /> <span> + </span>
    <input type="text" v-model="num2" @keyup="plusNumbers" /> <span> = </span>
    <span>{{ result }}</span>
    <br /><br /><br />
    <input type="text" v-model="multiNum1" @keyup="multiNumbers" />
    <span> + </span>
    <input type="text" v-model="multiNum2" @keyup="multiNumbers" />
    <span> = </span>
    <span>{{ result2 }}</span>
  </div>
</template>

<script>
export default {
  name: "Calculator1View1",
  props: {
    // 문자열 타입의 prop 예시
    //sampleString: {
    //  type: String,
    //  default: ''
    //},
    // 숫자 타입의 prop 예시
    //sampleNumber: {
    //  type: Number,
    //  default: 0
    //},
    // 배열 타입의 prop 예시
    //sampleArray: {
    //  type: Array,
    //  default: () => []
    //},
    // 객체 타입의 prop 예시
    //sampleObject: {
    //  type: Object,
    //  default: () => ({})
    //}
  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0,
      multiNum1: 0,
      multiNum2: 0,
      result2: 0,
    };
  },
  watch: {
    // sample1() {
    //   console.log('');
    // }
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {
    // sample2() {
    //   return '';
    // }
    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    plusNumbers() {
      this.result = Number(this.num1) + Number(this.num2);
    },
    multiNumbers() {
      this.result2 = Number(this.multiNum1) * Number(this.multiNum2);
    },
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
