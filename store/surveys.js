export const state = () => ({
  litterTypes: {
    42: {
      osparId: 11,
      desc: 'Bags'
    },
    43: {
      osparId: 12,
      desc: 'Caps/Lids'
    }
  },
  currentSurvey: null
})

export const getters = {
  getLitterTypes (state) {
    return state.litterTypes
  },
  getLitterItems (state) {
    return state.currentSurvey.litterItems
  }
}

export const mutations = {
  setCurrentSurvey (state, survey) {
    state.currentSurvey = survey
  }
}

export const actions = {
}
