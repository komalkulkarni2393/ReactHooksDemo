export const loginReducer = (state = {user: "Komal"}, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOGOUT":
            return {
                ...state,
                user: "",
                loggedIn: false
            }
        default: 
            return state
    }
}