<template>
  <div>
    <b-form>
      <b-tabs>
        <b-tab title="Plastic/Polystyrene" active>
          <b-form-group label="Bags" label-cols-sm="2" content-cols-sm="2" contentlabel-for="input_42">
            <b-form-input id="input_42"  v-model="itemCounts.item42" type="number" step="1" placeholder="0"></b-form-input>
          </b-form-group>
          <b-form-group label="Caps/Lids" label-cols-sm="2" content-cols-sm="2" label-for="input_43">
            <b-form-input id="input_43" v-model="itemCounts.item43" type="number" step="1" placeholder="0"></b-form-input>
          </b-form-group>
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
  props: [
    'survey'
  ],
  data () {
    return {
      itemCounts: {
        item42: 1,
        item43: 7
      }
    }
  }
}
</script>

<style>

</style>
