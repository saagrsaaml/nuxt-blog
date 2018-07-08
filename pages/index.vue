<template>
  <div class="home-page">
    <div class="header-wrapper">
      <section class="hero-top">
        <div class="header">
          <!-- header titles -->
          <div class="header-title">
            <section class="hero is-medium has-text-centered">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title is-1">Get the latest tech news</h1>
                  <h3 class="subtitle is-3">Something Important</h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
    <!-- end of header titles -->

    <!-- main body content -->
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PostPreview from '~/components/Posts/PostPreview'

export default {
  name: 'index',
  // data() {
  //   return {
  //      loadedPosts: []
  //   }
  // },
  components: {
    Logo,
    PostPreview
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style>
</style>
