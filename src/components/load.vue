<template>
  <div id="app">
    <div class="title">
      <img src="../assets/zuo.jpg" alt="">
      <p>补换驾照</p>
      <img src="../assets/duo.jpg" alt="">
    </div>
    <div class="count">
      <ul class="top">
        <li class="first">订单提交</li>
        <li>填写收货地址</li>
        <li>正在办理</li>
        <li>办理完成</li>
      </ul>
      <img class="img" src="../assets/img.jpg" alt="">
      <div class="card">
        <dl v-for="(item,index) in list" :key="index" @click="show(item)">
          <dt>
            <img v-if="item.src" :src="item.src">
            <img v-else :src="addImg">
          </dt>
          <dd>{{item.desc}}</dd>
        </dl>
      </div>
      <ol class="list">
        <li @click="typeClick">
          <p>服务类型</p>
          <p>{{form.type}}</p>
        </li>
        <!-- <li>
          <p>
            <span>当前驾照签发城市</span>
            <img src="../assets/wen.jpg" @click="choosClick">
          </p>
          <CityPicker/>
        </li>
        <li>
          <p>
            <span>可补换的签发城市</span>
            <img src="../assets/wen.jpg" @click="canChange">
          </p>
          <p>选择补换地</p>
        </li>-->
        <CityPicker/>
        <li>
          <p>服务费</p>
          <p class="allmoney">￥399</p>
        </li>
        <li class="sale">
          <p>优惠</p>
          <p>
            登陆后查看优惠券
            <img src="../assets/you.jpg" alt="">
          </p>
        </li>
      </ol>
      <div class="ques">
        <p></p>
        <p>常见问题</p>
        <img src="../assets/person.jpg" alt="">
      </div>
      <div class="money">
        <p>
          实付：
          <span class="allmoney">￥399</span>
        </p>
        <button>立即支付</button>
      </div>
    </div>
    <div class="mark" v-show="showMask">
      <img :src="current.demo">
      <div>
        <button @click="upload(1)">拍照</button>
        <button @click="upload(2)">相册</button>
        <button @click="close">取消</button>
      </div>
    </div>
    <div class="popup">
      <van-popup v-model="showType" overlay position="bottom">
        <van-picker
          :columns="columns"
          show-toolbar
          title="服务类型"
          @confirm="confirmType"
          @cancel="cancelType"
        />
      </van-popup>
    </div>

    <div class="city">
      <van-popup v-model="City" overlay>
        <van-picker
          :columns="columns"
          show-toolbar
          title="当前签发城市"
          @confirm="confirmType"
          @cancel="cancelType"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import jia from "../assets/jia.jpg";
import { uploadImg } from "../api/index";

import Current from "./current";
import CityPicker from "./cityPicker";

import axios from "axios";

export default {
  name: "app",
  components: {
    Current,
    CityPicker
  },
  data() {
    return {
      current: {},
      showMask: false,
      showType: false,
      columns: ["换驾照", "补驾照"],
      City: false,
      form: {
        type: ""
      }
    };
  },
  methods: {
    ...mapMutations({
      updateList: "upload/updateList"
    }),
    show(item) {
      console.log(item);
      this.current = item;
      this.showMask = true;
    },
    close() {
      this.showMask = false;
    },
    typeClick() {
      this.showType = true;
    },
    confirmType(value) {
      this.form.type = value;
      this.cancelType();
    },
    cancelType() {
      this.showType = false;
    },
    ChoosCity() {
      this.City = true;
    },
    async upload(type) {
      let index = this.list.findIndex(item => item == this.current);
      console.log(index);
      this.updateList({
        index,
        src: res.data.url
      });
      this.showMask = false;
    }
  },
  computed: {
    ...mapState({
      list: state => state.Load.list
    }),
    addImg() {
      return jia;
    }
  },
  mounted() {
    fetch(
      "/api/ExchangeJiaZhao/getCostList?order_type=1&city_id=110100000000&province_id=110"
    );
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  img {
    width: 26px;
    height: 26px;
  }
}
.count {
  flex: 1;
  width: 100%;
  .top {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    border-bottom: 1px solid #ccc;
    li {
      color: rgb(63, 143, 209);
      text-align: center;
      font-size: 14px;
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
          width: 60px;
          height: auto;
        }
      }
      dd {
        width: 80%;
        text-align: center;
        margin-left: 10px;
      }
    }
  }
}
.list {
  width: 100%;
  list-style: none;
  border-top: 15px solid #eee;
  li {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    margin-left: -30px;
  }
  img {
    width: 30px;
    height: 30px;
  }
}
.ques {
  width: 100%;
  background: #eee;
  height: 60px;
  display: flex;
  justify-content: space-between;
  img {
    width: 50px;
    height: 50px;
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
    width: 80px;
    height: 100%;
    font-size: 16px;
    border: 0;
    background: #ccc;
  }
}
.allmoney {
  color: red;
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
      height: 28px;
      font-size: 18px;
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
</style>
