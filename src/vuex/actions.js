export const setConstraint = function (store, type, value) {
  if (value === 'null') value = null
  store.dispatch('CONSTRAINT', type, value)
}

export const setConstraintApplication = function (store, type, value) {
  store.dispatch('APPLY_CONSTRAINT', type, value)
}
