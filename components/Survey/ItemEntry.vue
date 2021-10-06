<template>
  <b-form-group :label="getLitterType.desc" label-cols-sm="2" content-cols-sm="2" :contentlabel-for="itemInput">
    <b-form-input
      v-on:change="updateCount"
      :id="itemInput"
      :value="litterCount"
      type="number"
      step="1"
      placeholder="0" />
  </b-form-group>
</template>

<script>
export default {
  props: {
    litterType: Number
  },
  computed: {
    itemInput () {
      return `inputItem_${this.litterType}`
    },
    getLitterType () {
      const litterTypes = this.$store.getters['surveys/getLitterTypes']

      return litterTypes[this.litterType]
    },
    litterCount () {
      const litterItems = this.$store.getters['surveys/getLitterItems']

      return litterItems[this.litterType]
    }
  },
  methods: {
    updateCount (itemCount) {
      this.$store.commit('surveys/updateLitterItem', { itemType: this.litterType, count: itemCount })
    }
  }
}
</script>

<style>

</style>
