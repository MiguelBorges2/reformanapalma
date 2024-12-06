import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    globalVariable: 0,
  }),
  actions: {
    updateGlobalVariable(newValue) {
      this.globalVariable = newValue;   
    },
  },
});