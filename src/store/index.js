import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        id: '1',
        title: 'Laravel Meetup',
        date: '2018-01-16',
        imageUrl: 'https://cdn-images-1.medium.com/max/1201/1*OGCE-B4onkKZyAzf1Ge0Ew.png'
      },
      {
        id: '2',
        title: 'Vue Meetup',
        date: '2018-02-16',
        imageUrl: 'https://cdn-images-1.medium.com/max/1280/1*IPTRjl2GyBeNrBnbvB714A.jpeg'
      }
    ],
    user: {
      id: '1',
      registeredMeetups: ['2']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
