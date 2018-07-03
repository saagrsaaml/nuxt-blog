<template>
  <div class="admin-page">
    <section class="new-post">
      <section class="hero">
        <div class="hero-body">
          <div class="has-text-centered">
            <figure class="center">
              <button class="button is-danger is-large" @click="$router.push('/admin/new-post')">
                Create post
              </button>
            </figure>
          </div>
        </div>
      </section>
    </section>
    <section class="exiting-posts">
      <h1>Existing Posts</h1>
      <PostList />
    </section>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList";
export default {
  name: "index",
  components: {PostList}
}
</script>

<style scoped>

</style>
