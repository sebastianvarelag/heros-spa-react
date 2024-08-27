
export type State = {
  isLoggedIn: boolean,
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

export type superhero ={
  id: string,
  superhero: string,
  publisher: string,
  alter_ego: string,
  first_appearance: string,
  characters: string,
}