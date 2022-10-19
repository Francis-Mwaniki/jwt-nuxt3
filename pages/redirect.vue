<template>
  <main>
    <div class="" v-if="auth">
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
    <!-- The CSS grid that makes up the entirety of the hero image/banner image area -->
    <section class="top-banner-section" v-else>
      <!-- The CSS grid area that displays the image (layer 1) -->
      <div class="banner-image-div">
        <img
          class="banner-image"
          src="https://plus.unsplash.com/premium_photo-1661678079655-10fe58ab8d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Banner Image"
        />
      </div>
      <!-- The CSS grid area that displays the semi-transparent gradient overlay (layer 2) -->
      <div class="banner-overlay-div"></div>
      <!-- The CSS grid area that displays the content (layer 3) -->
      <div class="banner-text-div">
        <span class="banner-text">
          <p class="banner-h1-text">
            LOST? To access this page you have to be authenticated!!
          </p>
          <p class="banner-body-text">Start here.. Let Go..</p>
          <p class="banner-btn">
            <NuxtLink class="banner-btn-item" to="/register">Register &#8594;</NuxtLink>
          </p>
        </span>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      auth: false,
    };
  },
  async mounted() {
    try {
      /* let url = "http://localhost:7000/user"; */
      let url = "/api/v1/user";
      const response = await fetch(url, {
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        this.auth = true;
        const content = await response.json();
        this.message = "Hi " + content.message.name + " you are logged in";
      } else {
        const content = await response.json();
        this.auth = false;
        this.message = content.message;
      }
    } catch (error) {
      this.auth = false;
      this.message = "you are not logged in";
      this.$router.push("/login");
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
.top-banner-section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 350px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-content: center;
  justify-content: center;
}
.banner-image-div {
  grid-area: 1 / 1 / 2 / 2;
}
.banner-overlay-div {
  grid-area: 1 / 1 / 2 / 2;
}
.banner-text-div {
  grid-area: 1 / 1 / 2 / 2;
}

.banner-image {
  display: grid;
  min-width: 350px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner-overlay-div {
  display: grid;
  max-width: 100%;
  background: black;
  background: linear-gradient(
    60deg,
    rgba(0, 0, 0, 0.7777485994397759) 30%,
    rgba(255, 255, 255, 0) 100%
  );
}
.banner-text-div {
  display: grid;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
}
.banner-h1-text {
  font-size: calc(10pt + 0.15vw);
  letter-spacing: 0.05em;
  font-weight: bolder;
  text-transform: uppercase;
  color: white;
}

.banner-body-text {
  font-size: calc(10pt + 0.15vw);
  margin-top: 0.5em;
  color: white;
  text-decoration: none;
}
banner-body-text :hover {
  color: white;
}
banner-body-text :visited {
  color: white;
}
banner-body-text :active {
  color: white;
}

.banner-btn {
  margin-top: 1em;
}

.banner-btn-item {
  font-size: calc(8pt + 0.15vw);
  padding-top: calc(0.5em + 0.08vw);
  padding-bottom: calc(0.5em + 0.08vw);
  padding-left: calc(0.5em + 0.08vw);
  padding-right: calc(0.5em + 0.08vw);
  color: blue;
  background-color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid white;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
</style>
