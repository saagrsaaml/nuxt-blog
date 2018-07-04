<template>
  <div class="admin-new-post">
    <section class="new-post-form">
      <PostForm />
    </section>
  </div>
</template>

<script>
import PostForm from "~/components/Admin/PostForm"
export default {
  name: "index",
  layout: 'admin',
  components: {PostForm}
}
</script>

<style scoped>

</style>
