import { GetterTree, ActionTree, MutationTree } from 'vuex'
import product from "~/store/mocks/product";

export const state = () => ({
  things: [] as string[],
  product: product,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  product: state => state.product,
}

export const mutations: MutationTree<RootState> = {
  // CHANGE_NAME: (state, newName: string) => (state.name = newName),
}

export const actions: ActionTree<RootState, RootState> = {
  // async fetchThings({ commit }, name) {
  //   // const things = await this.$axios.$get('/things')
  //   console.log(name)
  //   commit('CHANGE_NAME', name)
  // },
}
