export const commonMixin = {
  data() {
    return {
      sharedData: "모두의 데이터",
      sharedLike: 0,
    };
  },

  methods: {
    sharedMethod() {
      this.sharedData = "모두의 데이터 바꿈 바꿈 바꿈";
    },
    sharedThumbsUp() {
      this.sharedLike = this.sharedLike + 1;
    },
  },

  mounted() {
    console.log("믹스인 mounted");
  },

  unmounted() {
    console.log("믹스인 unmounted");
  },
};
