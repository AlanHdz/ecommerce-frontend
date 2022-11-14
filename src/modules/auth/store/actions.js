import api from "@/api/api"

export const registerUser = async({ commit }, user) => {
    const { email, name, username, password, password_confirmation } = user

    try {
        
        await api.get('/sacntum/csrf-cookie')

        const { data } = await api.post('/api/signup', {
            email,
            name,
            username,
            password,
            password_confirmation
        })

        const { message, ok } = data

        const user = await api.get('/api/user')

        commit('loginUser', { user })

        return { ok: ok, message: message }

    } catch (error) {
        const { errors } = error.response.data
        return { ok: false, message: errors }
    }
}

export const loginUser = async({ commit }, user) => {
    const { email, password } = user

    try {
        await api.get('/sanctum/csrf-cookie')
        const { data } = await api.post('/api/login', { email, password });
        
        const { message, ok } = data

        const user = await api.get('/api/user')

        commit('loginUser', { user })

        return { ok: ok, message: message }

    } catch (error) {
        const { errors } = error.response.data
        return { ok: false, message: errors }
    }

}

export const logout = async({ commit }) => {

    const { data } = await api.post('/api/logout')

    const { message, ok } = data

    commit('logout')

    return { ok: ok, message: message }
}