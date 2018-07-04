<template>
  <div class="admin-post">
    <section class="update-form">
      <PostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import PostForm from "~/components/Admin/PostForm"
export default {
  name: "index",
  components: {PostForm},
  data() {
    return {
      loadedPost: {
        author: 'Sagar',
        title: 'My new post',
        thumbnailLink: 'https://thumbs.dreamstime.com/b/stack-fruits-container-116695868.jpg',
        content: 'Some things are meant to suck the life out of you'
      }
    }
  }
}
</script>

<style scoped>

</style>
