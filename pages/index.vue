<template>
  <!-- The CSS grid that makes up the entirety of the hero image/banner image area -->
  <section class="top-banner-section">
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
        <p class="banner-h1-text">Remain relevant in today's technology-driven economy</p>
        <p class="banner-body-text">
          Learn how agile can give you a competitive edge. Let Go..
        </p>
        <p class="banner-btn">
          <NuxtLink class="banner-btn-item" to="/register">Get started &#8594;</NuxtLink>
        </p>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  async mounted() {
    /*   let url = "http://localhost:7000/user"; */
    let url = "/api/v1/user";
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
