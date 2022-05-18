export interface Ianswer {
  id: number;
  name: string;
  isTrue: boolean;
};

export interface IQuestion {
  id: number;
  name: string;
  answers: Ianswer[];
};

export interface ITestingPlate {
  questions: IQuestion[];
};

export interface ItemTestProps {
  id: number;
  name: string;
  questions: IQuestion[];
}

export interface ITestListProps {
  tests: ITest[];
  className?: string;
}

export interface ITest {
  id: number;
  name: string;
  questions: IQuestion[]
}
export interface IUser {
  id: number,
  username: string,
  firstName: string,
  lastName: string,
}

export interface ITestState{
  lastTestIdUpload: number | null,
  tests: ITest[],
}