<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link to="/posts" tag="a" class="navbar-item">Blog</nuxt-link>
        <nuxt-link to="/about" tag="a" class="navbar-item">About</nuxt-link>
        <nuxt-link to="/admin" tag="a" class="navbar-item">Admin</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavBar"
}
</script>

<style scoped>

</style>
