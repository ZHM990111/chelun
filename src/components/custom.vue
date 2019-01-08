<template>
    <div class="custom">
        <img src="../assets/person.jpg" @click="Custom">
        
    </div>
</template>

<script>
export default {
  name: "Custom",
  methods: {
    Custom() {
      console.log(0);
    }
  }
};
</script>

<style>
.custom {
  position: fixed;
  right: 10%;
  bottom: 18%;
  width: 50px;
  height: 50px;
}
</style>
