import { AuthAction, State, User } from "../types/types"



const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state:State = initialState, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
        return { isLoggedIn: true, user: action.user};
    case 'LOGOUT':
      return { isLoggedIn: false, user: undefined };
    default:
      return state;
  }
}
