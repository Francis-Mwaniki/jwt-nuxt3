<script>
export default {
  watch: {
    $route() {
      location.reload();
    },
  },
  data() {
    return {
      message: "",
      auth: false,
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
  methods: {
    async logout() {
      let url = "http://localhost:7000/logout";
      let res = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (res.ok) {
        let data = await res.json();
        alert(data.message);
        this.$router.push("/login");
        location.reload();
      } else {
        let data = await res.json();
        alert(data.message);
        this.$router.push("/register");
        location.reload();
      }
    },
  },
};
</script>
<template>
  <main class="main">
    <nav class="navs">
      <div class="home-wrapper">
        <NuxtLink to="/"> <h3>Home</h3></NuxtLink>
        <span style="padding-top: 3px"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            style="fill: #ffff"
          >
            <path
              d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z"
            ></path></svg
        ></span>
      </div>
      <div class="auth">
        <div class="sub-auth" v-if="!auth">
          <div class="home-wrapper">
            <NuxtLink to="register">Register</NuxtLink>
            <span style="padding-top: 3px"
              ><svg
                style="height: 40px; width: 40px; color: white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path></svg
            ></span>
          </div>
          <div class="home-wrapper">
            <NuxtLink to="login">login</NuxtLink>
            <span style="padding-top: 3px"
              ><svg
                style="height: 40px; width: 40px; color: white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path></svg
            ></span>
          </div>
          <div class="home-wrapper">
            <NuxtLink to="redirect">VisitUs</NuxtLink>
            <span style="padding-top: 3px"
              ><svg
                style="height: 40px; width: 40px; color: white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path></svg
            ></span>
          </div>
        </div>
        <div class="home-wrapper" v-else>
          <NuxtLink href="#" @click="logout">logout</NuxtLink>
          <span style="padding-top: 3px"
            ><svg
              style="height: 40px; width: 40px; color: white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path></svg
          ></span>
        </div>
      </div>
    </nav>
    <div class="msg-auth">{{ message }}</div>
    <NuxtPage />
  </main>
</template>

<style>
body {
  background: linear-gradient(90deg, teal, black, indigo);
  color: wheat;
  max-width: 100%;
  overflow-x: hidden;
}
main {
  position: relative;
}
.home-wrapper {
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 2px;
}
.navs {
  justify-items: end;
  position: fixed;
  background-color: rgb(95, 42, 38);
  padding: 9px;
  z-index: 2;
  width: 100%;
  padding-bottom: 50px;
  align-items: flex-end;
  display: flex;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
  margin: auto;
}
.auth {
  justify-items: center;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 9px;
  color: white;
  margin: auto;
  text-decoration: none;
}
.sub-auth {
  justify-items: center;
  align-items: center;
  text-align: center;
  display: flex;
  gap: 5px;
}
a {
  color: aliceblue;
  text-decoration: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
a:hover {
  border-radius: 3px;
}
.msg-auth {
  display: flex;
  align-items: center;
  justify-items: center;
  margin: auto;
  top: 70px;
  left: 10px;
  right: 0px;
  position: relative;
  z-index: 3;
}
</style>
