<template>
  <div class="main-home">
    <h4 class="h">You are not logged in</h4>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  background-color: blue;
}
.main-home {
  margin-top: 20px;
  display: flex;
  height: 200px;
  background-color: teal;
  border-radius: 7px;
  box-sizing: border-box;
  box-shadow: black;
  justify-items: center;
  align-items: center;
  padding: 30px;
  width: 50%;
  color: black;
  font-family: "Courier New", Courier, monospace;
  font-size: x-large;
  margin: auto;
}
.h {
  justify-items: center;
  align-items: center;
  text-align: center;
  display: flex;
  color: white;
  margin: auto;
}
</style>
