<template>
  <div class="son">
    <p>{{ message }} 아들</p>
    <button @click="clickMsg1">아들1(손자1, 손자2 함께!!!)등장 버튼</button>
    <!-- 자식 conponents에 ref속성으로 고유한 값을 부여할 수 있음 id나 name같은 느낌...? -->
    <GrandSon11 ref="gson11" />
    <GrandSon12 ref="gson12" :realColor="fontColor" />
  </div>
</template>

<script>
import GrandSon11 from "@/components/GrandSon11.vue";
import GrandSon12 from "@/components/GrandSon12.vue";
export default {
  name: "SonPage1",
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
    fontColor: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
    GrandSon11,
    GrandSon12,
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      message: "",
      color: "",
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
    clickMsg1() {
      this.message = "가족을 무척 사랑하는 만능일꾼";
      // $refs.(여기에는 위에서 부여한 refs속성의 값).(여기에는 자식 component에서 호출하고 싶은 method()이름)
      // 부모의 clickMsg1() 함수가 호출되면 자식 components의 함수도 같이 호출 됨
      this.$refs.gson11.clickMsg11_2();
      this.$refs.gson12.clickMsg12();
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
.son {
  background-color: steelblue;
  color: #fff;
  margin-top: 180px;
  padding: 16px;
}
</style>
