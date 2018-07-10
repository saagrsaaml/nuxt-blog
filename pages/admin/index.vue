<template>
  <div class="admin-page">
    <section class="new-post">
      <section class="hero">
        <div class="hero-body">
          <div class="has-text-centered">
            <figure class="center">
              <AppButton btnStyle="button is-danger is-large" @click="$router.push('/admin/new-post')">
                Create post
              </AppButton>
            </figure>
          </div>
        </div>
      </section>
    </section>
    <section class="exiting-posts">
      <h1>Existing Posts</h1>
      <PostList :posts="loadedPosts" isAdmin/>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'admin',
  middleware: ['check-auth','auth'],
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>

</style>
