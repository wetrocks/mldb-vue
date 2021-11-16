<template>
  <b-card @click="goToSitePage">
    <b-card-title>{{ site.name }}</b-card-title>
    <b-card-text>
    Bonaire
    </b-card-text>
    <b-list-group flush>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
        Completed surveys
        <b-badge variant="primary" pill>4</b-badge>
    </b-list-group-item>

    <b-list-group-item class="d-flex justify-content-between align-items-center">
        Incomplete surveys
        <b-badge variant="primary" pill>1</b-badge>
    </b-list-group-item>
    </b-list-group>
  </b-card>
</template>
<script>
export default {
  props: {
    site: Object
  },
  data () {
    return {
    }
  },
  methods: {
    goToSitePage () {
      this.$router.push({ name: 'site-id', params: { id: this.site.id} })
    }
  }
}
</script>