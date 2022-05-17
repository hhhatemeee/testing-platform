import { useSelector } from "react-redux";
import { IStore } from "../redux";

export interface IUseAuthReturn{
  isAuth:boolean,
  firstName:string | null,
  lastName:string | null,
  username:string | null,
}

export default function useAuth(): IUseAuthReturn{
  const {isAuth} = useSelector((state:IStore) => state.auth);
  const {username, lastName, firstName} = useSelector((state:IStore) => state.user);
  
  if(!isAuth){
    localStorage.removeItem('token');
  }
  
  return {
    isAuth,
    firstName,
    lastName,
    username,
  }
}