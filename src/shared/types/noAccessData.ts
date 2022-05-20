import { SharedEntity } from "./common";

export type AnswerNoAccess = { } & SharedEntity;

export type QuestionNoAccess = {
  answers: AnswerNoAccess[];
} & SharedEntity;