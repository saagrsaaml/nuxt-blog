<template>
  <div>
    <TheNavBar />
    <nuxt/>
  </div>
</template>
<script>
  import TheNavBar from '@/components/Navigation/TheNavBar'

  export default {
    middleware: 'log',
    components: {
      TheNavBar
    }
  }
</script>
<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body {
  margin: 0;
}
</style>
