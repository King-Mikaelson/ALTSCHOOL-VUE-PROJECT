import { createStore } from 'vuex'

const store = createStore({
  state:{
  count: 0,
  input: 0,
  },
  getters:{
  counter(state){
    return state.count
  }
  },

  actions:{
    increment(context){
      context.commit("increment")
    },

    decrement(context){
      context.commit("decrement")
    },

    reset(context){
      context.commit("reset")
    },

    input(context, value){
      context.commit("input", value)
    }
  }, 

  mutations:{
    increment(state){
      state.count++
    },

    decrement(state){
      state.count--
    },

    reset(state){
      state.count = 0
    },

    input(state, payload){
      state.count = payload
    }
  }

})

export default store
