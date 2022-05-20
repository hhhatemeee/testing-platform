import React from "react";
import {  Route, Routes } from "react-router-dom";

import Header from "../Header";
import LoginPage from "../../pages/LoginPage";
import ProfileContainer from "../../pages/Profile/container";
import StartPageTest from "../../pages/StartPageTest";
import TestingPlate from "../../pages/TestingPlate";
import { QuestionNoAccess } from "../../shared/types";

const MOCK_QUESTIONS: QuestionNoAccess[] = [
  {
    id: 1,
    name: 'Что такое программирование?',
    answers: [
      { id: 1, name: 'Наука' },
      { id: 2, name: 'Кино' },
      { id: 3, name: 'Книга' },
      { id: 4, name: 'Жизнь' },
    ]
  },
  {
    id: 2,
    name: 'Что такое программирование?',
    answers: [
      { id: 1, name: 'Наука' },
      { id: 2, name: 'Кино' },
      { id: 3, name: 'Книга' },
      { id: 4, name: 'Жизнь' },
    ]
  },
  {
    id: 3,
    name: 'Что такое программирование?',
    answers: [
      { id: 1, name: 'Наука' },
      { id: 2, name: 'Кино' },
      { id: 3, name: 'Книга' },
      { id: 4, name: 'Жизнь' },
    ]
  },
  {
    id: 4,
    name: 'Что такое программирование?',
    answers: [
      { id: 1, name: 'Наука' },
      { id: 2, name: 'Кино' },
      { id: 3, name: 'Книга' },
      { id: 4, name: 'Жизнь' },
    ]
  },
];


const App: React.FC = () => {
  return <>
    <Header />
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<StartPageTest />} />
        <Route path="/test" element={<TestingPlate questions={MOCK_QUESTIONS} />} />
        <Route path="/profile" element={<ProfileContainer />} />
    </Routes>
  </>;
};

export default App;
