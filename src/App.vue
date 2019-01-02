<template>
  <div id="app">
    <div class="title">
      <img src="./img/zuo.jpg" alt="">
      <p>补换驾照</p>
      <img src="./img/duo.jpg" alt="">
    </div>
    <div class="count">
      <ul class="top">
        <li class="first">订单提交</li>
        <li>填写收货地址</li>
        <li>正在办理</li>
        <li>办理完成</li>
      </ul>
      <img class="img" src="./img/img.jpg" alt="">
      <div class="card">
        <dl>
          <dt>
            <img src="./img/jia.jpg" alt="">
          </dt>
          <dd>身份证正面</dd>
        </dl>
        <dl>
          <dt>
            <img src="./img/jia.jpg" alt="">
          </dt>
          <dd>身份证反面</dd>
        </dl>
        <dl>
          <dt>
            <img src="./img/jia.jpg" alt="">
          </dt>
          <dd>驾驶证正页</dd>
        </dl>
        <dl>
          <dt>
            <img src="./img/jia.jpg" alt="">
          </dt>
          <dd>驾驶证附页</dd>
        </dl>
        <dl>
          <dt>
            <img src="./img/jia.jpg" alt="">
          </dt>
          <dd>白底身份证照</dd>
        </dl>
      </div>
      <ol class="list">
        <li>
          <p>服务类型</p>
          <p>
            换驾照
            <img src="./img/you.jpg" alt="">
          </p>
        </li>
        <li>
          <p>当前驾照签发城市</p>
          <p>选择签发地</p>
        </li>
        <li>
          <p>可补换的签发城市</p>
          <p>选择补换地</p>
        </li>
        <li>
          <p>服务费</p>
          <p class="allmoney">￥399</p>
        </li>
        <li class="sale">
          <p>优惠</p>
          <p>
            登陆后查看优惠券
            <img src="./img/you.jpg" alt="">
          </p>
        </li>
      </ol>
      <div class="ques">
        <p></p>
        <p @click="toQues">常见问题</p>
        <img src="./img/person.jpg" alt="">
      </div>
      <div class="money">
        <p>
          实付：
          <span class="allmoney">￥399</span>
        </p>
        <button>立即支付</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods:{
    toQues(){

    }
  }
};
</script>

<style lang="scss">
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  margin: 0;
  padding: 0;
  font-size: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}
.count {
  flex: 1;
  width: 100%;
  .top {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    list-style: none;
    border-bottom: 1px solid #ccc;
    li {
      height: 100%;
      line-height: 100px;
      padding: 0 25px;
      color: rgb(63, 143, 209);
    }
    .first {
      color: #fff;
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
    dl {
      flex: 1;
      text-align: center;
      dt{
        img{
          margin-left: 20px;
        }
      }
    }
  }
}
.list {
  width: 100%;
  list-style: none;
  border-top: 40px solid #eee;
  li {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    border-bottom: 4px solid #ccc;
  }
  .sale {
    border-top: 40px solid #eee;
    height: 160px;
  }
}
.ques {
  width: 100%;
  background: #eee;
  height: 150px;
  display: flex;
  justify-content: space-between;
  img {
    width: 100px;
    height: 100px;
  }
}
.money {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 p{
   margin-left: 40px;
 }
  button {
    width: 200px;
    height: 100%;
    font-size: 30px;
    border: 0;
    background: #ccc;
  }
}
.allmoney {
  color: red;
}
</style>
