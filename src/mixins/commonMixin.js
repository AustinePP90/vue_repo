export const commonMixin = {
  data() {
    return {
      sharedData: "모두의 데이터",
    };
  },

  methods: {
    sharedMethod() {
      this.sharedData = "모두의 데이터 바꿈 바꿈 바꿈";
    },
  },

  mounted() {
    console.log("믹스인 mounted");
  },

  unmounted() {
    console.log("믹스인 unmounted");
  },
};
