<template>
    <div class="current">
        <van-popup v-model="showCurrent" overlay close-on-click-overlay>内容</van-popup>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props:["showCurrent"]
};
</script>

<style>
</style>
