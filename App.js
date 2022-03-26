/* eslint-disable prettier/prettier */
// import {View, Text} from 'react-native';
import React, {useState} from 'react';
import OnBoard from './components/OnBoard';
import Home from './components/Home';

const App = () => {
  const [showOnBoard, setShowOnBoard] = useState(true);
  const onBoardHandleDone = () => {
    setShowOnBoard(false);
  };
  return (
    <>
      {showOnBoard && <OnBoard handleDone={onBoardHandleDone} />}
      {!showOnBoard && <Home />}
    </>
  );
};

export default App;
