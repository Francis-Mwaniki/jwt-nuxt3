<template>
  <div class="">
    <link
      href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap"
      rel="stylesheet"
    />

    <div class="hero">
      <div class="hero-one"></div>
      <div class="hero-two"></div>
      <h1 class="header-title">
        <span class="header-primary">Fungi</span
        ><span class="header-sub">and the underground secrets</span>
      </h1>
    </div>
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
    try {
      let url = "http://localhost:7000/user";
      const response = await fetch(url, {
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const content = await response.json();
        this.auth = true;
        this.message = "Hi " + content.message.name + " you are logged in";
      } else {
        const content = await response.json();
        this.auth = false;
        this.message = content.message;
      }
    } catch (error) {
      this.auth = false;
      this.message = "you are not logged in";
    }
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
/* 
https://source.unsplash.com/lfyKGQWEbew
https://source.unsplash.com/PRne5FNBRmk
*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero {
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: #ccc;
  position: relative;
  text-transform: uppercase;
  font-family: "Amatic SC", sans-serif;
  letter-spacing: 17.5px;
}

.hero-one {
  top: 0;
  position: absolute;
  width: 60%;
  background-color: black;
  height: 100vh;
  clip-path: polygon(0 0, 60vw 0, 40vw 100vh, 0 100vh);
  z-index: 1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://plus.unsplash.com/premium_photo-1661678079655-10fe58ab8d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.hero-two {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  background-color: green;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(https://images.unsplash.com/photo-1664574654521-7faf33eb9086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.header-title {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.header-primary {
  font-size: 2em;
  display: block;
  font-weight: 700;
}
</style>
