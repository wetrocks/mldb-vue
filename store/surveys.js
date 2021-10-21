export const state = () => ({
  litterTypes: {
    42: {
      osparId: 11,
      desc: 'Bags',
    },
    43: {
      osparId: 12,
      desc: 'Caps/Lids',
    },
  },
  currentSurvey: {
    litterItems: {},
  },
})

export const getters = {
  getLitterTypes(state) {
    return state.litterTypes
  },
  getLitterItems(state) {
    return state.currentSurvey.litterItems
  },
}

export const mutations = {
  setCurrentSurvey(state, survey) {
    state.currentSurvey = survey
  },
  updateLitterItem(state, { itemType, count }) {
    const newItem = {}
    newItem[itemType] = count
    // to be reactive need to create new object
    state.currentSurvey.litterItems = Object.assign(
      {},
      state.currentSurvey.litterItems,
      newItem
    )
  },
}

export const actions = {
  async loadCurrentSurvey({ commit }, { siteId, surveyId }) {
    const accessToken = await this.$auth.strategy.token.get()

    const surveyUrl = `http://localhost:5000/site/${siteId}/survey/${surveyId}`

    this.$axios
      .get(surveyUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        commit('setCurrentSurvey', response.data)
      })
  },
}
