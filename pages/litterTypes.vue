<template>
  <div>
    <p>Temp. page for dev and testing, final state tbd</p>
     <div v-if="$fetchState.pending">
      <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
     </div>
     <div v-else>
        <v-simple-table>
          <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Id
                </th>
                <th class="text-left">
                    Description
                </th>
                <th class="text-left">
                    ospar id
                </th>
                <th class="text-left">
                    Source Category
                </th>
                <th class="text-left">
                    JList Type Code
                </th>     
                <th class="text-left">
                    J Code
                </th>
                </tr>
            </thead>
            <tbody>
              <tr
                v-for="litterType in litterTypes"
                :key="litterType.id"
                >
                <td>{{ litterType.id }}</td>
                <td>{{ litterType.description }}</td>
                <td>{{ litterType.osparId }}</td>
                <td>{{ litterType.sourceCategory }}</td>
                <td>{{ litterType.jointListTypeCode }}</td>
                <td>{{ litterType.jointListJCode }}</td>
              </tr>
          </tbody>
          </template>
        </v-simple-table>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      err: null
    }
  },
  computed: {
    litterTypes () {
      return this.$store.state.litterTypes.litterTypes
    }
  },  
  async fetch () {
    await this.$store.dispatch('litterTypes/loadLitterTypesOnce')
  },
  fetchDelay: 2000
}
</script>

<style>

</style>