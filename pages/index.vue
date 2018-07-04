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
import PostList from "~/components/Posts/PostList";

export default {
  name: 'index',
  // data() {
  //   return {
  //      loadedPosts: []
  //   }
  // },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: 1,
            thumbnail: "https://thumbs.dreamstime.com/b/woman-wearing-yellow-floral-top-116695890.jpg",
            title: "Old People Work Hard",
            previewText: "At least I believe they do"
          },
          {
            id: 2,
            thumbnail: "https://thumbs.dreamstime.com/b/green-white-red-abstract-painting-116695780.jpg",
            title: "Crawling Over Sand",
            previewText: "ricks to crawl correctly!"
          },
          {
            id: 3,
            thumbnail: "https://thumbs.dreamstime.com/b/woman-wearing-yellow-floral-top-116695890.jpg",
            title: "Apples Are Real",
            previewText: "Apples are born from apples"
          }
        ]
      })
    }, 1500)
  },
  components: {
    PostList,
    Logo,
    PostPreview
  },
  created () {

  }
}
</script>

<style>
</style>
