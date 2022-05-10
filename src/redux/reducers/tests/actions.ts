import { IAddAnswerPayload, IAddAnswerSuccess, IAddQuestionPayload, IAddQuestionSuccess, IAddTestPayload, IAddTestSuccess } from "../../types";
import { ADD_ANSWER, ADD_QUESTION, ADD_TEST } from "../../types/actionsTypes";


export const addTestActionCreator = (payload: IAddTestPayload): IAddTestSuccess => ({ type: ADD_TEST, payload });

export const addQuestionActionCreator = (payload: IAddQuestionPayload): IAddQuestionSuccess => ({ type: ADD_QUESTION, payload });

export const addAnswerActionCreator = (payload: IAddAnswerPayload): IAddAnswerSuccess => ({ type: ADD_ANSWER, payload });