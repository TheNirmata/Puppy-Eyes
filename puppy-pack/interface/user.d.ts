export type User = { 
  username: string | null, 
  password: string | null, 
  email?: string | null, 
  phone: string | null,
  firstname: string | null,
  lastname: string | null,
};


export type UserContextType = {
  user: User | null,
  setUser: (user: User) => void,
  handleLogin: (userInput: User, event?: BaseSyntheticEvent) => Promise<void>,
  handleSignup: (userInput: User, event?: BaseSyntheticEvent) => Promise<void>,
};
