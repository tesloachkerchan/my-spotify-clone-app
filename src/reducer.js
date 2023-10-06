
export const initialState ={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQDKzVL5FByh6ox-GRTQs5IJ0LpwEmYML1biLSAB8aNp8LIvqtMv14Z689UT6klNsUQZPmuL1eSLqHxktDH_jGUp47KR9DddegNqE4QHfcoArLf-9H2oDbCc9drBnSwm5VzYImjXyU0buGOCva5Etu-cKUq6nqlEiX09Qx7J6GJT01xMgbAZ3qS0SwJJK90kLHU_oZmoKpJZVlYrDSoL&token_type'
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_USER':
        return{
            ...state,
            user: action.user
        }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}
export default reducer;