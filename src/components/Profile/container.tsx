import React from "react";
import { useSelector } from "react-redux";
import Profile from ".";
import { IStore } from "../../redux";

const ProfileContainer:React.FC = () => {
  const tests = useSelector((state: IStore) => state.tests.tests);
  const {firstName, lastName, id, username} = useSelector((state:IStore) => state.user);
  
  return <Profile tests={tests} firstName={firstName} lastName={lastName} id={id} username={username}/>;
};

export default ProfileContainer;
