import { AuthAction, State } from "../types/types"



const initialState = {
  isLoggedIn: false,
  user: undefined,
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
