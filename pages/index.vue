<template>
  <div>
      <p v-if="$auth.loggedIn">
        Now that you're authenticated, you can <a @click="$auth.logout ()" class="link">log out</a>
      </p>
      <p v-else>
        You're not authenticated yet. Maybe you want to <a @click="$auth.loginWith('auth0')" class="link">sign in</a> and see what happens?
      </p>

      <div v-if="$auth.loggedIn">
        Show dashboard or something
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
