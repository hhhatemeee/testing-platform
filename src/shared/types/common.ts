export type SharedEntity = {
  id: number;
  name: string;
};

export type Answer = {
  isTrue: boolean;
} & SharedEntity;

export type Question = {
  topic: string;
  answers: Answer[];
} & SharedEntity;

export type Test = {
  questions: Question[];
} & SharedEntity;

export type AddingElementProps = {
  name: string;
}

export type WindowSwitchName = 'test' | 'question';
