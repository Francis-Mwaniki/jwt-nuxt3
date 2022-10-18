<script>
export default {};
</script>
<template>
  <main class="main">
    <nav class="navs">
      <NuxtLink to="/"> <h3>Home</h3></NuxtLink>
      <div class="auth">
        <NuxtLink to="register">Register</NuxtLink>
        <NuxtLink to="login">login</NuxtLink>
      </div>
    </nav>
    <NuxtPage />
  </main>
</template>

<style>
body {
  background: linear-gradient(90deg, teal, black, indigo);
  color: wheat;
}
main {
  position: relative;
}
.navs {
  margin-bottom: 50px;
  justify-items: end;
  position: fixed;
  background-color: rgb(95, 42, 38);
  padding: 9px;
  z-index: 2;
  width: 100%;
  padding-bottom: 20px;
  align-items: flex-end;
  display: flex;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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
a {
  color: aliceblue;
  text-decoration: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
a:hover {
  border-radius: 3px;
}
</style>
