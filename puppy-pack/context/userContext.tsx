import React, { useState, createContext, useContext, BaseSyntheticEvent } from 'react';
import { User, UserContextType } from '../interface/user';

export const UserContext = React.createContext<UserContextType | null>({
  user: null,
  setUser: () => {},
  handleLogin: () => new Promise<void>(()=>{}),
  handleSignup: () => new Promise<void>(()=>{}),
});

export const useUser = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return user;
};

export const UserContextProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async(userInput: User ): Promise<void> => {
  
    try {
      if (!userInput.username || !userInput.password){
        alert('Please enter a username or password')
      }
      if (userInput.username && userInput.password){
        const response = await fetch(`http://localhost:8000/PuppyApi/login/${userInput.username}/`, {
          method: 'GET', // Change to POST
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: userInput.username.toLowerCase(),
            password: userInput.password,
          }),
        });

        const data = await response.json();
  
        if (data.status === 200) {
          setUser(data.user);
          console.log('Woof! You are logged in!');
        }
      }
    } catch(error) {
      console.error(`ERROR: ${error}`);
    }
  };

  const handleSignup = async(userInput: User ): Promise<void> => {
    try {
      if (!userInput.username || !userInput.password){
        alert('Please enter a username or password')
      }
      if (userInput.username && userInput.password){
        const response = await fetch(`/PuppyApi/woof/CreateDogTag`, {
          method: 'POST', // Change to POST
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname: userInput.firstname.toLowerCase(),
            lastname: userInput.lastname.toLowerCase(),
            username: userInput.username,
            password: userInput.password,
            email: userInput.email.toLowerCase(),
            phone: userInput.phone,
          }),
        });

        const data = await response.json();
  
        if (data.status === 200) {
          setUser(data.user);
          console.log('Woof! Successfully signed up!');
        }
        else if (data.status === 400) {
          alert('Doggo already exists')
        }
        else if (data.this.state.status === 500) {
          alert('BARK BARK BARK! Server error')
        }
      }
    }catch(error){
      console.error(`ERROR:${error}`)
    }
  };

  return (
    //@ts-ignore
    <UserContext.Provider value={{ user, setUser, handleLogin, handleSignup}}>
      {children}
    </UserContext.Provider>
  );
};