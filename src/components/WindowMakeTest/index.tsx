import { Upload } from "@mui/icons-material";
import {IconButton} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addNameTest } from "../../redux/reducers/localTest";
import { uploadTestInBase } from "../../redux/reducers/tests";
import { AddingElementProps, Test } from "../../shared/types";
import AddValue from "../../subComponents/AddValue";
import TestContainer from "./Test/container";

import styles from './style.module.scss';

type IWindowMakeTest = {
  onClose: (boolean: boolean) => void;
  test: Test;
}

const WindowMakeTest: React.FC<IWindowMakeTest> = ({ onClose, test }) => {
  const [localTest, setLocalTest] = useState<Test>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (test) {
      setLocalTest(test);
    }
  }, [test]);

  const handleAddTest = (value: AddingElementProps):void => {
    dispatch(addNameTest({ ...value }));
  };
  
  const uploadTestHandler = ():void => {
    if(localTest){
      dispatch(uploadTestInBase({isUploading: true, test:localTest}));
    }
  }

  return <div className={styles.container}>
    <main className={styles.window}>
      <section className={styles.header}>
        <h2 className={styles.title}>Создание теста</h2>
        <h3 className={styles.close} onClick={() => onClose(false)}>+</h3>
      </section>
      <AddValue placeholder={"Введите название для теста"} handleAdd={handleAddTest} heightInput={""} >
        <IconButton sx={{marginLeft:'5px'}} onClick={uploadTestHandler}>
          <Upload className={styles.upload} />
        </IconButton>
        </AddValue>
      {localTest && <TestContainer id={localTest.id} name={localTest.name} questionsTest={localTest.questions} />}
    </main>
  </div>;
};

export default WindowMakeTest;
