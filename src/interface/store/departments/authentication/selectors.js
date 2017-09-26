export const initialState = {}


export const getUserId = (state) => state.user && state.user.uid || null
export const getUserPointer = (state) => state.user && state.user.pointer || null
export const getAccessToken = (state) => state.user.stsTokenManager.access.token || null