<template>
  <div>
    <p>Temp. page for dev and testing, final state tbd</p>

    <v-simple-table>
      <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">
                Description
            </th>
            <th class="text-left">
                Id
            </th>
            <th class="text-left">
                ospar id
            </th>
            </tr>
        </thead>
        <tbody>
          <tr
            v-for="litterType in litterTypes"
            :key="litterType.id"
            >
            <td>{{ litterType.description }}</td>
            <td>{{ litterType.id }}</td>
            <td>{{ litterType.osparId }}</td>
          </tr>
      </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      litterTypes: [],
      err: null
    }
  },
  async fetch () {
    const accessToken = await this.$auth.strategy.token.get()

    this.litterTypes = await this.$axios.get('http://localhost:5000/litterType', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => response.data)
  },
}
</script>

<style>

</style>