<template>
  <div class="post-list">
    <!-- main body content -->
    <div class="main-content">
      <div class="container">
        <div class="columns is-centered is-multiline has-text-centered">
          <div class="column is-6">
            <PostPreview
              v-for="post of posts"
              :key="post.id"
              :id="post.id"
              :isAdmin="isAdmin"
              :thumbnail="post.thumbnail"
              :title="post.title"
              :previewText="post.previewText"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview'

export default {
  name: "PostList",
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
