export const setConstraint = function (store, type, value) {
  store.dispatch('CONSTRAINT', type, value)
}

export const setConstraintApplication = function (store, type, value) {
  store.dispatch('APPLY_CONSTRAINT', type, value)
}
