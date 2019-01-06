<template>
    <div style="width: 100%;height: 100%;background: #6487f9;" id="menu">
        <div class="top">
            <img style="width: 120px;height: 80px;" src="../img/logo3.png">
            <router-link to="/home">
                <img style="margin-top: 30px;width: 60px;height: 30px;" src="../img/close.png">
            </router-link>
        </div>
        <ul class="list">
            <li>首页</li>
            <li>产品</li>
            <li>关于我们</li>
            <li>车轮大数据</li>
            <li>最新动态</li>
            <li>加入车轮</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped>
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
}
.list {
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
}
li {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #fff;
  font-size: 20px;
  color: #fff;
}
</style>
