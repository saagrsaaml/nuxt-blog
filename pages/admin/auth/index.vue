<template>
  <div class="auth-admin-page">
    <div class="auth-container">
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-grey">Login</h3>
              <p class="subtitle has-text-grey">Please login to proceed.</p>
              <div class="box">
                <figure class="avatar">
                  <img src="https://placehold.it/128x128">
                </figure>
                <form @submit.prevent="onSubmit">
                  <AppControlInput type="email" v-model="email">E-Mail Address</AppControlInput>
                  <AppControlInput type="password" v-model="password">Password</AppControlInput>
                  <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
                  <AppButton type="button" @click="isLogin =! isLogin">Switch to {{ isLogin ? 'Sign Up' : 'Login' }}</AppButton>
                </form>
              </div>
              <p class="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='+ process.env.fbAPIKey
      if(!this.isLogin){
        authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.fbAPIKey
      }
      this.$axios.$post(authUrl,{
        email: this.email,
        password: this.password,
        returnSecureToken: true
      }).then(result => {
        console.warn(result)
      }).catch(e => console.error(e))
    }
  }
}
</script>

<style scoped>

</style>
