export const loginUser = (state, { user }) => {
    state.user = user
    state,status = 'authenticated'
}

export const logout = (state) => {
    state.user = null
    state.status = 'not-authenticated'
}