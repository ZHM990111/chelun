<template>
    <div class="custom">
        <img src="../assets/person.jpg" @click="Custom">
        <van-popup v-model="showCustom" overlay close-on-click-overlay position="bottom">
            <div class="kefu">
                <button id="cc">联系客服</button>
                <button><a href="tel:17600209240">拨打电话</a></button>
                <button @click="closeCustom">取消</button>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
  name: "Custom",
  data() {
    return {
      showCustom: false
    };
  },
  methods: {
    Custom() {
      this.showCustom = true;
    },
    closeCustom() {
      this.showCustom = false;
    }
  }
};
</script>

<style lang='scss'>
.custom {
  position: fixed;
  right: 10%;
  bottom: 18%;
  width: 50px;
  height: 50px;
}
.kefu {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :last-child {
    margin-top: 40px;
  }
  button {
    border: 1px solid #666;
    width: 80%;
    height: 100px;
    background: #fff;
    color: rgb(12, 209, 209);
    font-size: 30px;
    border-radius: 20px;
  }
}
</style>
