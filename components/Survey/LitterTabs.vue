<template>
  <div>
    <b-form v-if="litterItems">
      <b-tabs>
        <b-tab title="Plastic/Polystyrene" active>
          <SurveyItemEntry :litter-type="42" />
          <SurveyItemEntry :litter-type="43" />
        </b-tab>
        <b-tab title="Glass">
          <p>glass items</p>
        </b-tab>
        <b-tab title="Metal">
          <p>metal items</p>
        </b-tab>
      </b-tabs>
    </b-form>
  </div>
</template>

<script>
export default {
  props: {
    litterItems: Object
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
