<template>
  <div class="post-list">
    <!-- main body content -->
    <div class="main-content">
      <div class="container">
        <div class="columns is-centered is-multiline has-text-centered">
          <div class="column is-6">

            <PostPreview
              id="1"
              :isAdmin="isAdmin"
              thumbnail="https://thumbs.dreamstime.com/b/stack-fruits-container-116695868.jpg"
              title="Magicians are Crazy"
              previewText="Some things are meant to suck the life out of you"
            />

            <PostPreview
              id="2"
              :isAdmin="isAdmin"
              thumbnail="https://thumbs.dreamstime.com/b/green-white-red-abstract-painting-116695780.jpg"
              title="Crawling Over Sand"
              previewText="Tricks to crawl correctly!"
            />

            <PostPreview
              id="3"
              :isAdmin="isAdmin"
              thumbnail="https://thumbs.dreamstime.com/b/woman-wearing-yellow-floral-top-116695890.jpg"
              title="Old People Work Hard"
              previewText="At least I believe they do"
            />

            <PostPreview
              id="4"
              :isAdmin="isAdmin"
              thumbnail="https://thumbs.dreamstime.com/b/gray-foods-wicker-baskets-116695871.jpg"
              title="Apples Are Real"
              previewText="Apples are born from apples"
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
    }
  }
}
</script>

<style scoped>

</style>
