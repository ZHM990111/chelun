<template>
  <div class="home">
    <div class="header">
      <div class="count">
        <img src="../img/logo.png">
        <ul class="menu">
          <li>产品</li>
          <li>关于我们</li>
          <li>大数据</li>
          <li>新闻</li>
          <li>招聘</li>
          <li>商城</li>
          <li>登录</li>
        </ul>
      </div>
    </div>
    <div class="m-header">
      <img src="../img/logo2.png">
      <router-link to="/menu">
        <img src="../img/gengd.png">
      </router-link>
    </div>
    <div class="banner">
      <img src="../img/banner.png" alt="">
    </div>
    <div class="m-banner">
      <img src="../img/banner.png" alt="">
    </div>
    <div class="nav">
      <span>分析评论</span>
      <span>趋势榜单</span>
      <span>研究报告</span>
    </div>
    <div class="draw">
      <div class="suv">SUV TOP10</div>
      <div class="drawOne">
        <div id="main"></div>
        <div class="atten">
          <div class="attenTop">关注指数排行榜</div>
          <ul class="attenList">
            <li v-for="(val,index) in attenData" :key="index">
              <p class="first">
                <span>{{val.top}}</span>
                <span>{{val.name}}</span>
              </p>
              <p>{{val.num}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="drawOne">
        <div id="buy"></div>
        <div class="atten">
          <div class="attenTop">关注指数排行榜</div>
          <ul class="attenList">
            <li v-for="(val,index) in attenData" :key="index">
              <p class="first">
                <span>{{val.top}}</span>
                <span>{{val.name}}</span>
              </p>
              <p>{{val.num}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="bottom">
        <li>公司简介</li>
        <li>合作伙伴</li>
        <li>联系我们</li>
        <li>车轮驾照</li>
        <li>
          <img src="../img/img1.png" alt="">
        </li>
        <li>
          <img src="../img/img2.png" alt="">
        </li>
        <li>
          <img src="../img/img3.png" alt="">
        </li>
      </div>
      <div class="m-bottom">
        <div class="img">
          <img src="../img/img1.png" alt="">
          <img src="../img/img2.png" alt="">
          <img src="../img/img3.png" alt="">
        </div>
        <ul class="counts">
          <li>公司简介</li>
          <li>合作伙伴</li>
          <li>联系我们</li>
          <li>车轮驾照</li>
        </ul>
      </div>
      <div class="bottom-logo">Copyright ©2017 chelun.com 上海易点时空网络有限公司</div>
      <div class="bottom-two">沪ICP备12046769号-4 沪公网安备 31011502007844号</div>
    </div>
  </div>
</template>

<script>
import "../js/flexible.js";
export default {
  name: "Home",
  data() {
    return {
      header:true,
      attenData: [
        {
          top: 1,
          color: "red",
          name: "哈弗H6",
          num: 138.29
        },
        {
          top: 2,
          color: "#f50",
          name: "本田",
          num: 100.0
        },
        {
          top: 3,
          color: "#f80",
          name: "汉兰达",
          num: 92
        },
        {
          top: 4,
          color: "#ccc",
          name: "本田",
          num: 89
        },
        {
          top: 5,
          color: "#ccc",
          name: "途观",
          num: 80
        },
        {
          top: 6,
          color: "#ccc",
          name: "滨值",
          num: 70
        },
        {
          top: 7,
          color: "#ccc",
          name: "本田",
          num: 60
        },
        {
          top: 8,
          color: "#ccc",
          name: "吉利博越",
          num: 56
        },
        {
          top: 9,
          color: "#ccc",
          name: "奔驰",
          num: 54.8
        },
        {
          top: 10,
          color: "#ccc",
          name: "全新路途",
          num: 54.9
        }
      ]
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        if (document.documentElement.scrollTop) {
          this.header = false;
        } else {
          this.header= true;
        }
      },
      false
    );
    var echarts = require("echarts");
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["吉利博越", "冠道", "本田XR-V", "哈弗H6", "途观"]
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Jan/18", "Mar/18", "May/18", "Jul/18", "sep/18", "Nov/18"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "吉利博越",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "冠道",
          type: "line",
          stack: "总量",
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "本田XR-V",
          type: "line",
          stack: "总量",
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "哈弗H6",
          type: "line",
          stack: "总量",
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "途观",
          type: "line",
          stack: "总量",
          data: [820, 932, 901, 934, 1290, 1330, 1020]
        }
      ]
    });

    var Chart = echarts.init(document.getElementById("buy"));
    Chart.setOption({
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["吉利博越", "冠道", "本田XR-V", "哈弗H6", "途观"]
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Jan/18", "Mar/18", "May/18", "Jul/18", "sep/18", "Nov/18"]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "吉利博越",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "冠道",
          type: "line",
          stack: "总量",
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "本田XR-V",
          type: "line",
          stack: "总量",
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "哈弗H6",
          type: "line",
          stack: "总量",
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "途观",
          type: "line",
          stack: "总量",
          data: [820, 932, 901, 934, 1290, 1330, 1020]
        }
      ]
    });
  }
};
</script>

<style scoped>
@import url("../scss/home.css");
</style>
