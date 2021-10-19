export const state = () => ({
  siteList: []
})

export const mutations = {
  setSites (state, sites) {
    state.siteList = sites
  },
  add (state, site) {
    state.siteList.push(site)
  }
}

export const actions = {
  async loadSites ({ commit }) {
    const accessToken = await this.$auth.strategy.token.get()

    this.$axios.get('http://localhost:5000/site', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        commit('setSites', response.data)
      })
  },
  async createSite ({ commit }, newSite) {
    const accessToken = await this.$auth.strategy.token.get()

    this.$axios.post('http://localhost:5000/site', newSite, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then((response) => {
        commit('add', response.data)
      })
  }
}
