<template>
  <div class="auth-admin-page">
    <div class="auth-container">
      <form>
        <AppControlInput type="email">E-Mail Address</AppControlInput>
        <AppControlInput type="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton type="button" @click="isLogin =! isLogin">Switch to {{ isLogin ? 'Sign Up' : 'Login' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from "~/components/UI/AppControlInput";
import AppButton from '~/components/UI/AppButton'
export default {
  name: "index",
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
