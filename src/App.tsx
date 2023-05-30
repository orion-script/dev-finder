import React from 'react'
import './App.css'
import Devinfo from './components/Devinfo'
import Navbar from './components/Navbar'
import Search from './components/Search'
import TypingAnimation from './components/Typing'
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { User } from './types/UserTypes'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e:| React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    // if username is empty, do nothing
    if (inputValue === '') return;
    // ignore any keydown events without enter
    if (e.target instanceof HTMLInputElement) {
      const keyboardEvent = e as React.KeyboardEvent;
      if (
        keyboardEvent.nativeEvent.isComposing ||
        keyboardEvent.key !== 'Enter'
        ) {
          return;
      }
    }


    void axios
      .get<User>(`https://api.github.com/users/${inputValue}`)
      .then((res) => {
        setUser(res.data);
        setIsError(false);
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 404) {
          setIsError(true);
        } else {
          console.error(error);
          throw error;
        }
      });
  };

  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    // fetch octocat's information as initial rendering so that user will find an example.
    void axios
      .get<User>('https://api.github.com/users/octocat')
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className='w-full h-auto md:h-screen bg-bigLight dark:bg-bigDark'>
      <Navbar />
      <Search
        handleSubmit={handleSubmit}
        handleType={handleType}
        isError={isError}
      />

        {user && (
          <div className="mb-20 drop-shadow-xl">
            <Devinfo user={user} />
            <div className="text-center mt-8 text-black dark:text-white font-bold">
              <TypingAnimation />
            </div>
          </div>
        )}
    </div>
  );
};

export default App;
