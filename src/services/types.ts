export interface ILoginPayload{
  username:string,
  password: string,
}

export interface IFetchUser {
  id: number,
  username: string,
  firstName: string,
  lastName: string,
}