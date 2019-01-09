<template>
  <div class="picture">
    <h3>上传图片</h3>
    <input type="file" accept="image/png" @change="uploadFile">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import {uploadBase64} from '../api/index'
export default {
  name: "Picture",
  data() {
    return {};
  },
  methods: {
    uploadFile(e){
      console.log('file...', e.target.files[0].size);
      let file = e.target.files[0];
      // 先判断图片是否过大
      if (file.size > 30*1024){
        // 转成base64
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = res=>{
          console.log('res.result...', res.target.result);
          let img = new Image();
          img.src = res.target.result;
          img.onload = async ()=>{
            // 创建canvas进行压缩
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            // 第一种压缩，压缩画布大小
            context.drawImage(img, 0,0,img.width, img.height, 0,0, img.width, img.height);
            let base64 = canvas.toDataURL();
            let res = await uploadBase64(base64);
            console.log('res...', res);
            // 第二种压缩，压缩图片质量
            let base65 = canvas.toDataURL('image/jpeg', 0.1);
            let res2 = await uploadBase64(base65);
            console.log('res2...', res2);
          }
        }
      }
    }
  }
};
</script>

<style>
</style>
