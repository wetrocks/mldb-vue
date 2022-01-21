export const state = () => ({
  litterTypes: [],
})

export const getters = {
}

export const mutations = {
  setLitterTypes(state, litterTypes) {
    state.litterTypes = litterTypes
  },
}

export const actions = {
  async loadLitterTypesOnce({ state, commit, dispatch }) {
    if( state.litterTypes.length === 0 ) {
      await dispatch('loadLitterTypes')
    }
  },
  async loadLitterTypes({ commit }) {
    const accessToken = await this.$auth.strategy.token.get()

    const litterTypesUrl = this.$config.mldbApiBase + '/LitterType'

    this.$axios
      .get(litterTypesUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
          commit('setLitterTypes', response.data)
      })
  },
}
