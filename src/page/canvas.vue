<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import Img from "../assets/1.jpg";
import { imgToBase64, uploadBase64 } from "../api/index";
export default {
  name: "Canvas",
  computed: {
    canvas() {
      return this.$refs.canvas;
    },
    context() {
      return this.$refs.canvas.getContext("2d");
    }
  },
  async mounted() {
    let img = await this.loadImg(Img);
    this.canvas.width = img.width;
    this.canvas.height = img.height;
    this.context.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      img.width,
      img.height
    );

    let myImg =
      "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqIZ0iaDCVFBN5qiaWnTUGibtqxgTh9Ou9pwVibAB7MvbQu9fapw5rE7mwJJe8cTEFSZ4l2XqDZia2OOSw/132";

    //base64
    const response = await imgToBase64(myImg);
    let myimg = await this.loadImg(response.data.base64);

    this.context.font = "35px Arial";
    this.context.fillText("Healer", 80, 870);
    this.circleImg(this.context, myimg, 80, 740, 43);
    //生成图片
    let base64 = this.canvas.toDataURL("image/jpeg");
    //上传图片
    let upload=await uploadBase64(base64);
    console.log(base64);
  },

  methods: {
    //背景图
    async loadImg(src) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = () => {
          reject();
        };
      });
    },

    //头像
    circleImg(ctx, img, x, y, r) {
      var d = 2 * r;
      var cx = x + r;
      var cy = y + r;
      ctx.arc(cx, cy, r, 0, 2 * Math.PI);
      ctx.clip();
      ctx.restore();
      ctx.drawImage(img, x, y, d, d);
      //名字
      ctx.beginPath();
      ctx.lineWidth = 6;
      ctx.arc(124, 783, 43, 0, 2 * Math.PI, true);
      ctx.closePath();
      ctx.strokeStyle = "#1b540d";
      ctx.stroke();
    }
  }
};
</script>

<style>
canvas {
  width: 100%;
}
#myCanvas {
  border-radius: 100%;
}
</style>
