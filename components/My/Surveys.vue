<template>
  <div>
    <b-card title="My Surveys">
      <b-card-text>
        Surveys from last 12 months
      </b-card-text>
      <b-list-group flush>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
            Completed
            <b-badge variant="primary" pill>4</b-badge>
        </b-list-group-item>

        <b-list-group-item class="d-flex justify-content-between align-items-center">
            Incomplete
            <b-badge variant="primary" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-card>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>