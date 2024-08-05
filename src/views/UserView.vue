<template>
  <div class="">
    <h1>사용자 정보를 보여줄게</h1>
    <div>
      <p><b>이름:</b>{{ user.name }}</p>
      <p><b>이메일:</b>{{ user.email }}</p>
    </div>
    <button @click="saveUserData1">너의 정보는.1</button>
    <button @click="saveUserData2">너의 정보는.2</button>
    <br />
    <input type="text" v-model="editName" />
    <input type="text" v-model="editEmail" />
    <button @click="saveUser">네 맘속에 저!장!</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  name: "UserView",

  setup() {
    const store = useStore();
    // vuex에서 user데이터를 가져오기
    const user = computed(() => store.state.user);

    const editName = ref("");
    const editEmail = ref("");

    const saveUser = () => {
      // ../store/index.js 경로에서  vuex store안에 mutations속성에 있는 setUser함수에 data값을 넣겠다는 의미, data값을 input.value값(v-model)으로 받겠다는 의미
      const data = { name: editName.value, email: editEmail.value };
      store.commit("setUser", data);
    };

    // 데이터1을 vuex에 저장하는 메서드
    const saveUserData1 = () => {
      const data = { name: "공민지", email: "minzy@yg.com" };
      // ../store/index.js 경로에서  vuex store안에 mutations속성에 있는 setUser함수에 data값을 넣겠다는 의미, data값을 변수로 미리 윗줄(38줄)에 할당 함
      store.commit("setUser", data);
    };

    // 데이터2을 vuex에 저장하는 메서드
    const saveUserData2 = () => {
      const data = { name: "다라다라", email: "daradara@yg.com" };
      store.commit("setUser", data);
    };

    return {
      user,
      saveUserData1,
      saveUserData2,
      saveUser,
      editName,
      editEmail,
    };
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>
