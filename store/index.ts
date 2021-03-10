interface globalStore {
  counter: number
}

export const state = (): globalStore => ({
  counter: 0
})

export const mutations = {
  increment(state: globalStore) {
    state.counter++
  }
}