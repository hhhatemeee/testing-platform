export interface Ianswer {
  id: string;
  name: string;
  isTrue: boolean;
};

export interface IQuestion {
  id: string;
  name: string;
  answers: Ianswer[];
};

export interface ITestingPlate {
  questions: IQuestion[];
};

export interface Istudent {
  id: string;
  name: string;
  lastMark: number;
}

export interface IStudentList {
  students: Istudent[];
  className?: string;
}

export interface ITest {
  id: string;
  name: string;
  questions: IQuestion[]
}
export interface IUser {
  id: number,
  username: string,
  firstName: string,
  lastName: string,
}