<template>
  <div class="home-page">

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
    <!-- end of header titles -->

    <!-- main body content -->
    <div class="main-content">
      <div class="container">
        <div class="columns is-centered is-multiline has-text-centered">
          <div class="column is-6">
            <div class="post">
              <!-- post content -->
              <div class="content">
                <div class="content-header">
                  <h3 class="title is-3"><b><nuxt-link :to="'/posts/' + 1"><a>Magicians are Crazy</a></nuxt-link></b></h3>
                  <h4 class="title is-4 is-spaced">Some things are meant to suck the life out of you</h4>
                  <h6 class="subtitle is-6">Posted by Author on April 7th 2017 at 9:33pm</h6>
                  <hr/>
                </div>
              </div>
              <!-- end of post content -->
            </div>


            <div class="post">
              <!-- post content -->
              <div class="content">
                <div class="content-header">
                  <h3 class="title is-3"><b><nuxt-link :to="'/posts/' + 2"><a>Crawling Over Sand</a></nuxt-link></b></h3>
                  <h4 class="title is-4 is-spaced">Tricks to crawl correctly!</h4>
                  <h6 class="subtitle is-6">Posted by Author on April 2nd 2017 at 10:41am</h6>
                  <hr/>
                </div>
              </div>
              <!-- end of post content -->
            </div>

            <div class="post">
              <!-- post content -->
              <div class="content">
                <div class="content-header">
                  <h3 class="title is-3"><b><nuxt-link :to="'/posts/' + 3"><a>Old People Work Hard</a></nuxt-link></b></h3>
                  <h4 class="title is-4 is-spaced">At least I believe they do</h4>
                  <h6 class="subtitle is-6">Posted by Author on April 1st 2017 at 11:00pm</h6>
                  <hr/>
                </div>
              </div>
              <!-- end of post content -->
            </div>

            <div class="post">
              <!-- post content -->
              <div class="content">
                <div class="content-header">
                  <h3 class="title is-3"><b><nuxt-link :to="'/posts/' + 4"><a>Apples Are Real</a></nuxt-link></b></h3>
                  <h4 class="title is-4 is-spaced">Apples are born from apples</h4>
                  <h6 class="subtitle is-6">Posted by Author on March 20th 2017 at 9:00am</h6>
                  <hr/>
                </div>
              </div>
              <!-- end of post content -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>
