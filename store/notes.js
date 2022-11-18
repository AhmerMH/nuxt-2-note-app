export const state = () => ({
  list: [],
});

export const getters = {
  getNotes(state) {
    return state.list;
  },
};

export const mutations = {
  add(state, note) {
    state.list.push(note);
  },
  remove(state, note) {
    const index = state.list.findIndex((x) => x.timestamp === note.timestamp);
    state.list.splice(index, 1);
  },
};
