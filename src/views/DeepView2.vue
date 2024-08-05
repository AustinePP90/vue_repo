<template>
  <div class="deep2">
    <SonPage1 :fontColor="color" />
    <SonPage2 :fontColor="color" />
    <button @click="popColor">숨은 보스 등장 버튼</button>
    <br />
    {{ gpapaValues }}
  </div>
</template>

<script>
import SonPage1 from "@/components/SonPage1.vue";
import SonPage2 from "@/components/SonPage2.vue";
export default {
  name: "DeepView2",
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
    SonPage1,
    SonPage2,
  },
  data() {
    return {
      color: "",
      gpapaValues: [2, 3, 4, 5, 6],
    };
  },
  provide() {
    // provide & inject
    return {
      gpapaLen: this.gpapaValues.length,
      gpapaSmallest: Math.min(...this.gpapaValues),
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
    popColor() {
      this.color = { color: "red" };
    },
    // 컴포넌트에서 사용할 메서드를 정의합니다.
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
