<template>
  <div class="basic">
    <h5>Hello, {{ title }}</h5>
    <h5>{{ title }}, 오늘은 특별한 날이야</h5>
    <h5>{{ title }}, 지금 당장 시작하자!</h5>
    <h5>{{ message }}</h5>
    <h5 v-html="message"></h5>
  </div>
  <div>
    <input type="text" v-model="nickname" />
  </div>
  <div><input type="number" v-model="age" /></div>
  <div>
    <textarea v-model="message" cols="30" rows="10"></textarea>
  </div>
  <div>
    <select name="city" v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">대구</option>
    </select>
  </div>
  <div>
    <p>좋아하는 색은?</p>
    <label><input type="checkbox" v-model="color" value="빨" />빨</label>
    <label><input type="checkbox" v-model="color" value="주" />주</label>
    <label><input type="checkbox" v-model="color" value="노" />노</label>
    <label><input type="checkbox" v-model="color" value="초" />초</label>
    <label><input type="checkbox" v-model="color" value="파" />파</label>
    <label><input type="checkbox" v-model="color" value="남" />남</label>
    <label><input type="checkbox" v-model="color" value="보" />보</label>
    <p>당신의 선택은 {{ color }}</p>
  </div>

  <h3>
    --------------------------------------속성연결---------------------------------------
  </h3>
  <div></div>
</template>

<script>
export default {
  name: "BasicView",
  components: {},
  data() {
    return {
      title: "어서와! 초보자",
      message:
        "지금은 <b>Vue</b> 학습 시간이야 그리고 <span style='color:tomato'>바인딩</span>을 배우는 중이야!",
      nickname: "쟈니파파",
      age: 16 + 16,
      city: "03",
      color: [],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
