export interface Ianswer {
  id: string;
  name: string;
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