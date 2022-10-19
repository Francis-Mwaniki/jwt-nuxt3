<template>
  <div class="main-home">
    <h4 class="h">{{ message }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  async mounted() {
    let url = "http://localhost:5000/user";
    const response = await fetch(url, {
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    });
    const content = await response.json();
  },
};
</script>

<style scoped>
body {
  background-color: blue;
}
.main-home {
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
