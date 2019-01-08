<template>
    <div class="goods">
        <ul class="list">
            <li>
                <p>联系省市</p>
                <p>{{cost.join(' ')}}</p>
            </li>
            <li>
                <p @click="Rela">详细地址</p>
                <p>{{address.length?address.join(' '):'请选择收货地'}}</p>
            </li>
            <li>
                <p>联系电话</p>
                <input type="text" placeholder="请输入联系电话" ref="texts" @blur="phone">
            </li>
            <li>
                <p>联系人</p>
                <input type="text" placeholder="请输入联系人">
            </li>
        </ul>
        <div class="packed">
            <img src="../assets/red.png" @click="redChange">
        </div>
        <Custom/>
        <!-- <button class="sure">确认</button> -->
        <div id="address-model" v-model="showAddress">
            <van-popup v-model="showAddress" position="bottom">
                <van-picker
                    :columns="addressColumns"
                    show-toolbar
                    title="选择收货城市"
                    ref="addressPicker"
                    @change="addressChange"
                    @cancel="addressCancel"
                    @confirm="addressConfirm"
                />
            </van-popup>
        </div>
        <div class="current">
            <van-popup v-model="red" overlay close-on-click-overlay>
                <div style="width: 100%;margin: 0 auto;">
                    <div class="redCard">
                        <div class="redTit">
                            <p style="font-size: 26px;">分享后自己能获得优惠券</p>
                            <p>自己和好友都能得</p>
                        </div>
                        <img class="img" src="../assets/coupon.png">
                        <div class="redFoot">
                            <button @click="closeRed" class="refuse">给钱都不要</button>
                            <button @click="share" class="master">立即分享</button>
                        </div>
                    </div>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { goShare } from "../api/index";
import Custom from "./custom";

export default {
  name: "Goods",
  data() {
    return {
      value: "",
      showAddress: false,
      addressColumns: [],
      red: false
    };
  },
  components: {
    Custom
  },
  methods: {
    share() {
      window["CHELUN_SHARE_DATA_WXMESSAGE"] = {
        title: "拼多多",
        desc: "拼多多，拼多多",
        link:
          "https://www.pinduoduo.com/itry.html?utm_source=baidu&utm_medium=sem&utm_term=search",
        imgUrl:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3789528717,1203429045&fm=27&gp=0.jpg",
        type: "link"
      };
      window["CHELUN_SHARE_DATA_WXTIMELINE"] = {
        type: "photo",
        imgUrl:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546936561169&di=6a69313868b53553b367c0e755a23ee7&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2756043793%2C336115832%26fm%3D214%26gp%3D0.jpg"
      };
      goShare();
    },
    redChange() {
      this.red = true;
    },
    closeRed() {
      this.red = false;
    },
    ...mapActions({
      getAddressList: "cityPicker/getAddressList"
    }),
    ...mapMutations({
      updateState: "cityPicker/updateState"
    }),
    Rela() {
      this.showAddress = true;
    },
    addressChange(picker, values) {
      let index = this.addressList.findIndex(item => item.name == values[0]);
      this.updateState({ addressSelectInd: index });
      console.log(values);
      let ind = this.$refs.addressPicker.getColumnIndex(index);
      //   console.log(ind);
      this.$refs.addressPicker.setColumnValues(
        1,
        this.addressList[index].list.map(item => item.name)
      );
    },
    addressCancel() {
      this.showAddress = false;
    },
    addressConfirm(values) {
      this.updateState({ address: values });
      this.addressCancel();
    },
    phone() {
      let texts = this.$refs.texts.value;
      console.log(this.$refs.texts.value);
      let reg = /^[1]+[3,8]+d{9}$/;
      if (!reg.test(texts)) {
        alert("手机号码有误，请重填");
        return false;
      }
    }
  },
  computed: {
    ...mapState({
      addressList: state => state.cityPicker.addressList,
      address: state => state.cityPicker.address,
      addressSelectInd: state => state.cityPicker.addressSelectInd,
      cost: state => state.cityPicker.cost
    })
  },
  created() {
    this.getAddressList().then(res => {
      this.addressColumns = [
        {
          values: this.addressList.map(item => item.name)
        },
        {
          values: this.addressList[this.addressSelectInd].list.map(
            item => item.name
          )
        },
        {
          values: this.addressList[this.addressSelectInd].list[0].list.map(
            item => item.name
          )
        }
      ];
    });
  }
};
</script>

<style lang='scss' scoped>
.goods {
  width: 100%;
  height: 100%;
}
.redCard {
  background: #fff;
  height: 50%;
  width: 90%;
}
.redFoot {
  button {
    border: 0;
    color: #fff;
    font-size: 24px;
    width: 140px;
    height: 60px;
  }
  .master {
    background: rgb(55, 189, 241);
  }
}
.sure {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #999;
  color: #fff;
  font-size: 30px;
}
.packed {
  position: fixed;
  right: 10%;
  bottom: 30%;
  width: 50px;
  height: 50px;
}
</style>
