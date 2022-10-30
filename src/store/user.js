import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return {
      msg: '项目初始化'
    }
  },
  actions: {},
  getters: {},
  persist: {
    enabled: true,
    strategies: [ {
      key: 'user',
      storage: sessionStorage
    }]
  }
})