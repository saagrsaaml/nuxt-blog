<template>
  <div class="admin-page">
    <section class="new-post" type="link">
      <button class="button is-danger is-large" @click="$router.push('/admin/new-post')">
        Create post
      </button>
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
