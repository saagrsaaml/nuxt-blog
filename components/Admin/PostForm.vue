<template>
  <form @submit.prevent="onSave">
    <div class="field is-vertical">
      <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
      <AppControlInput v-model="editedPost.title">Title</AppControlInput>
      <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
      <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
      <AppButton type="submit">Save</AppButton>
      <AppButton type="button" @click="onCancel">Cancel</AppButton>
    </div>
  </form>
</template>

<script>
  import AppControlInput from "~/components/UI/AppControlInput";
  import AppButton from '~/components/UI/AppButton'
  export default {
    name: "PostForm",
    props: {
      post: {
        type: Object,
        required: false
      }
    },
    components: {AppControlInput, AppButton},
    data() {
      return {
        editedPost: this.post  // check if post exists
          ? { ...this.post }
          : {
              author: '',
              title: '',
              thumbnailLink: '',
              content: ''
            }
      }
    },
    methods: {
      onSave () {
        // Save the post
        console.log(this.editedPost)
      },
      onCancel () {
        // Navigate Back

        this.$router.push('/admin')
      }
    }
  }
</script>

<style scoped>
</style>
