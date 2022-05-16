import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IStore } from "../../redux";
import { IQuestion } from "../../types";

import Header from "../Header";
import LoginPage from "../LoginPage";
import Profile from "../Profile";
import StartPageTest from "../StartPageTest";
import TestingPlate from "../TestingPlate";

const MOCK_QUESTIONS: IQuestion[] = [
  {
    id: '1',
    name: 'Что такое программирование?',
    answers: [
      { id: '1', name: 'Наука' },
      { id: '2', name: 'Кино' },
      { id: '3', name: 'Книга' },
      { id: '4', name: 'Жизнь' },
    ]
  },
  {
    id: '2',
    name: 'Что такое программирование?',
    answers: [
      { id: '1', name: 'Наука' },
      { id: '2', name: 'Кино' },
      { id: '3', name: 'Книга' },
      { id: '4', name: 'Жизнь' },
    ]
  },
  {
    id: '3',
    name: 'Что такое программирование?',
    answers: [
      { id: '1', name: 'Наука' },
      { id: '2', name: 'Кино' },
      { id: '3', name: 'Книга' },
      { id: '4', name: 'Жизнь' },
    ]
  },
  {
    id: '4',
    name: 'Что такое программирование?',
    answers: [
      { id: '1', name: 'Наука' },
      { id: '2', name: 'Кино' },
      { id: '3', name: 'Книга' },
      { id: '4', name: 'Жизнь' },
    ]
  },
];


const App: React.FC = () => {
  const isAuth:boolean = useSelector((store:IStore) => store.auth.isAuth);
  
  return <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {
        !isAuth 
        ? <Route path="/" element={<LoginPage />} />
        :<> 
        <Route path="/" element={<StartPageTest />} />
        <Route path="/test" element={<TestingPlate questions={MOCK_QUESTIONS} />} />
        <Route path="/profile" element={<Profile />} />
        </>
      }
      
    </Routes>

  </BrowserRouter>;
};

export default App;
