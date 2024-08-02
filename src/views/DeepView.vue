<template>
  <div class="">
    <p>DeepView Page</p>
    <!-- 컴포넌트를 템플릿에 추가하는 두가지 방법 -->
    <page-title title="나는 옥수수가 싫어요" :age="age2" />
    <!-- "3"은 문자열로 인식함 그래서 결과창에는 문자열 "3"에 숫자 1을 더한(PageTitle의 참조) 31이 나옴 -->
    <PageTitle title="옥수수는 맛있당" age="3" :func="funcContents2" />
    <!-- data() 변수값을 전달할 수 있음 -->
    <PageTitle :title="title2" :age="age1" :func="funcContents" />
  </div>
</template>

<script>
// 컴포넌트를 사용할 때는 import 하고 components 속성에도 등록해야 함
import PageTitle from "@/components/PageTitle.vue";
export default {
  name: "DeepView",
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
    PageTitle,
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      title1: "상추 다이어트 시작",
      title2: "옥수수 먹다 들킴...",
      age1: 16,
      age2: 40,
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
    // sample3() {
    //   return '';
    // }
    // 컴포넌트에서 사용할 메서드를 정의합니다.
    funcContents() {
      return "다섯 소녀들이 부릅니다! LACHATA!";
    },
    funcContents2() {
      return "제시카 동생 크리스탈이 있는 그룹";
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
