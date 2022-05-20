export type SharedEntity = {
  id: number;
  name: string;
};

export type Answer = {
  isTrue: boolean;
} & SharedEntity;

export type Question = {
  answers: Answer[];
} & SharedEntity;

export type Test = {
  questions: Question[];
} & SharedEntity;

export type AddingElementProps = {
  name: string;
}
