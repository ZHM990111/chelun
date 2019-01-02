<template>
  <div class="question">
    <div class="title">
      <div>
        <img src="./img/zuo.jpg" alt="">
      </div>
      <p>补换驾照常见问题</p>
      <img src="./img/duo.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Question"
};
</script>

<style>
.question {
  width: 100%;
  height: 100%;
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
</style>
