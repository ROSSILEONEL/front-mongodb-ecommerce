
import {  useSelector } from "react-redux";
import { selectAuth } from "../app/selectors.ts";
import { useNavigate } from "react-router-dom";
import { AdminDashBoard } from "./AdminDashBoard.tsx";

export const Admin = () => {

const navigate = useNavigate();
  const authData = useSelector(selectAuth);


    
    if (authData.user === null) {
        return (
          navigate("/login")
        )
      }else 
  return (
    <>
      <AdminDashBoard />
    
    </>

  )
}
