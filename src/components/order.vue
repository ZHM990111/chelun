<template>
    <div class="order">
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
            <CityPicker/>
            <li class="sale">
                <p>优惠</p>
                <p>
                    登陆后查看优惠券
                    <img src="../assets/you.jpg" alt="">
                </p>
            </li>
        </ol>
        <div class="ques">
            <router-link to="/question">
                <p>常见问题</p>
            </router-link>
            <Custom/>
        </div>
        <div class="money">
            <p>
                实付：
                <span class="allmoney">￥399</span>
            </p>
            <button @click="toPay">立即支付</button>
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

import { isVip, goPay } from "../api/index";
import Custom from "./custom";

export default {
  name: "Order",
  components: {
    Current,
    CityPicker,
    Custom
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
  //   beforeDestroyed(){
  //     Bus.$emit()
  //   },
  methods: {
    toPay() {
        
    },
    change(tit) {
      console.log(tit);
    },
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
  }
};
</script>

<style>
</style>
