<template>
  <ul class="cityPicker">
    <li>
      <p>
        <span @click="clickCity">当前驾照签发城市</span>
        <img src="../assets/wen.jpg" @click="choosClick">
      </p>
      <p>{{city.join(' ')}}</p>
    </li>
    <li>
      <p>
        <span @click="clickCost">可补换的签发城市</span>
        <img src="../assets/wen.jpg" @click="canChange">
      </p>
      <p>{{cost.join(' ')}}</p>
    </li>
    <li>
      <p>服务费</p>
      <p class="allmoney">￥399</p>
    </li>
    <div class="current">
      <van-popup v-model="choos" overlay close-on-click-overlay>
        <img class="img" src="../assets/licence.png">
      </van-popup>
    </div>
    <div class="canChange">
      <van-popup v-model="can" overlay close-on-click-overlay>
        <img class="img" src="../assets/licence.png">
      </van-popup>
    </div>
    <div class="picker">
      <van-popup v-model="showCity" overlay position="bottom">
        <van-picker
          :columns="columns"
          show-toolbar
          title="选择签发城市"
          ref="cityPicker"
          @confirm="confirmType"
          @cancel="cancelType"
          @change="changeCity"
        />
      </van-popup>
    </div>
    <div class="mend">
      <van-popup v-model="showMend" overlay position="bottom">
        <van-picker
          :columns="columnsCost"
          show-toolbar
          title="选择可补换城市"
          ref="CostPicker"
          @change="changeCost"
          @confirm="confirmCost"
          @cancel="cancelCost"
        />
      </van-popup>
    </div>
  </ul>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "cityPicker",
  data() {
    return {
      choos: false,
      can: false,
      showMend: false,
      //驾照
      showCity: false,
      //可补换
      columns: [],
      columnsCost: []
    };
  },
  created() {
    this.getCityList();
    this.getCostList();
  },
  methods: {
    ...mapActions({
      getCityList: "cityPicker/getCityList",
      getCostList: "cityPicker/getCostList"
    }),
    ...mapMutations({
      updateState: "cityPicker/updateState"
    }),
    clickCity() {
      this.showCity = true;
    },
    changeCity(picker, values) {
      //省份下标
      let index = this.cityList.findIndex(item => item.name === values[0]);
      this.$refs.cityPicker.setColumnValues(
        1,
        this.cityList[index].list.map(item => item.name)
      );
    },
    changeCost(picker, values) {
      let index = this.costList.findIndex(item => item.name === values[0]);
      this.$refs.CostPicker.setColumnValues(
        1,
        this.costList[index].list.map(item => item.name)
      );
    },

    confirmType(values) {
      this.updateState({ city: values });
      this.cancelType();
    },

    confirmCost(values) {
      this.updateState({ cost: values });
      console.log("values", values);
      this.cancelCost();
    },

    cancelType() {
      this.showCity = false;
    },
    cancelCost() {
      this.showMend = false;
    },
    choosClick() {
      this.choos = true;
    },
    canChange() {
      this.can = true;
    },

    clickCost() {
      if (!this.city.length) {
        alert("请选择签发城市");
      } else {
        this.showMend = true;
        this.getCostList().then(res => {
          this.columnsCost = [
            {
              values: this.costList.map(item => item.name)
            },
            {
              values: this.costList[0].list.map(item => item.name)
            }
          ];
        });
      }
    }
  },
  computed: {
    ...mapState({
      cityList: state => state.cityPicker.cityList,
      city: state => state.cityPicker.city,

      costList: state => state.cityPicker.costList,
      cost: state => state.cityPicker.cost
    })
  },
  created() {
    this.getCityList().then(res => {
      this.columns = [
        {
          values: this.cityList.map(item => item.name)
        },
        {
          values: this.cityList[0].list.map(item => item.name)
        }
      ];
    });
  }
};
</script>

<style>
</style>
