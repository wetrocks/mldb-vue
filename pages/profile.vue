<template>
  <div>
      <div>
        <h2>{{ $auth.user.name }}</h2>
        <p>{{ $auth.user.email }}</p>

        <div>
          <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style>

</style>
