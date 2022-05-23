import { Upload } from "@mui/icons-material";
import {IconButton} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addNameTestInLocal } from "../../redux/reducers/localTest";
import { uploadTestInBase } from "../../redux/reducers/tests";
import { AddingElementProps, Test } from "../../shared/types";
import AddValue from "../../subComponents/AddValue";
import TestContainer from "./Test/container";

import styles from './style.module.scss';
import WindowHeader from "../../subComponents/WindowHeader";
import WindowWrapper from "../../subComponents/WindowWrapper";

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
    dispatch(addNameTestInLocal({ ...value }));
  };
  
  const uploadTestHandler = ():void => {
    if(localTest){
      dispatch(uploadTestInBase({isUploading: true, test:localTest}));
    }
  }

  return <WindowWrapper onClose={onClose} title="Создание теста">
      <>
      <AddValue placeholder={"Введите название для теста"} handleAdd={handleAddTest} heightInput={""} >
        <IconButton sx={{marginLeft:'5px'}} onClick={uploadTestHandler}>
          <Upload className={styles.upload} />
        </IconButton>
        </AddValue>
      {localTest && <TestContainer id={localTest.id} name={localTest.name} questionsTest={localTest.questions} />}
      </>
  </WindowWrapper>;
};

export default WindowMakeTest;
