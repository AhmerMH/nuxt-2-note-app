export const state = () => ({
  list: [],
});

export const getters = {
  getNotes(state) {
    return state.list;
  },
};

export const mutations = {
  add(state, { note }) {
    state.list.push(note);
  },
  remove(state, { note }) {
    state.list.splice(state.list.indexOf(note), 1);
  },
};
