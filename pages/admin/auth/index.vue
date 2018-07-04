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
                <form>
                  <AppControlInput type="email">E-Mail Address</AppControlInput>
                  <AppControlInput type="password">Password</AppControlInput>
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
import AppControlInput from "~/components/UI/AppControlInput";
import AppButton from '~/components/UI/AppButton'
export default {
  name: "index",
  layout: 'admin',
  components: {AppControlInput, AppButton},
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style scoped>

</style>
