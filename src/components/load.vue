<template>
  <div id="app">
    <div class="title">
      <img src="../assets/zuo.jpg">
      <p>补换驾照</p>
      <img src="../assets/duo.jpg">
    </div>
    <div class="count">
      <ul class="top">
        <li v-for="(item,index) in top" :key="index" @click="change(item.tit)">{{item.tit}}</li>
      </ul>
      <Ordere v-if="order"/>
      <Goods v-if="goods"/>
    </div>
  </div>
</template>

<script>
import Ordere from "./order";
import Goods from "./goods";

export default {
  name: "app",
  components: {
    Ordere,
    Goods
  },
  data() {
    return {
      order: true,
      goods: false,
      top: [
        {
          tit: "订单提交",
          flag: "true"
        },
        {
          tit: "填写收货地址",
          flag: false
        },
        {
          tit: "正在办理",
          flag: false
        },
        {
          tit: "办理完成",
          flag: false
        }
      ]
    };
  },
  methods: {
    change(tit) {
      // console.log(tit);
      if (tit === "填写收货地址") {
        this.goods = true;
        this.order = false;
      }
      if (tit === "订单提交") {
        this.goods = false;
        this.order = true;
      }
    }
  }
};
</script>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.title {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  font-size: 30px;
  img {
    width: 46px;
    height: 46px;
  }
}
.count {
  flex: 1;
  width: 100%;
  .top {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    border-bottom: 1px solid #ccc;
    li {
      color: rgb(63, 143, 209);
      text-align: center;
      font-size: 30px;
    }
    .first {
      color: #fff;
      height: 100%;
      line-height: 40px;
      background: rgb(63, 143, 209);
    }
  }
  .img {
    width: 100%;
    height: auto;
  }
  .card {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    dl {
      flex: 1;
      text-align: center;
      dt {
        img {
          width: 90px;
          height: auto;
        }
      }
      dd {
        width: 80%;
        text-align: center;
        margin-left: 10px;
        font-size: 24px;
      }
    }
  }
}
.list {
  width: 100%;
  list-style: none;
  border-top: 15px solid #eee;
  li {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 50px;
    border-bottom: 1px solid #ccc;
    margin-left: -30px;
    font-size: 30px;
  }
  img {
    width: 30px;
    height: 30px;
  }
}
.ques {
  width: 100%;
  background: #eee;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  img {
    width: 100px;
    height: 100px;
  }
}
.money {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-left: 10px;
  }
  button {
    width: 140px;
    height: 100%;
    font-size: 30px;
    border: 0;
    background: #ccc;
  }
}
.allmoney {
  color: red;
  font-size: 28px;
}

.mark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    width: 90%;
    margin-top: 20%;
  }
  div {
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    button {
      width: 100%;
      height: 38px;
      font-size: 30px;
      letter-spacing: 10px;
      border-radius: 8px;
      color: #3aafc0;
    }
    button:first-child {
      border-radius: 8px 8px 0 0;
    }
    button:nth-child(2) {
      border-radius: 0 0 8px 8px;
    }
    button:last-child {
      margin: 8px 0;
    }
  }
}

button:first-child {
  border-radius: 8px 8px 0 0;
}
button:nth-child(2) {
  border-radius: 0 0 8px 8px;
}
button:last-child {
  margin: 10px 0;
}
.popup {
  width: 100%;
}
.van-popup {
  width: 100%;
  .img {
    width: 100%;
  }
}
.active {
  background: blue;
}
</style>
