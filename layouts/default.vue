<template>
  <div>
    <b-navbar>
      <b-nav-item to="/">
        Home
      </b-nav-item>
      <b-nav-item to="/sites">
        Sites
      </b-nav-item>
      <b-nav-item v-if="$auth.loggedIn" to="/profile">
        Profile
      </b-nav-item>
      <b-nav-item v-if="!$auth.loggedIn" @click="$auth.loginWith('auth0')">
        login
      </b-nav-item>
      <b-nav-item v-if="$auth.loggedIn" @click="$auth.logout()">
        logout
      </b-nav-item>
    </b-navbar>
    <Nuxt />
  </div>
</template>
