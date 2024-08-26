
export type State = {
  isLoggedIn: boolean,
  user: User | undefined
}

export type propsNode = {
  children: React.ReactNode
}

export type User = {
  id: string;
  username: string;
};

export type AuthAction =
| { type: 'LOGIN'; user: User }
| { type: 'LOGOUT' };