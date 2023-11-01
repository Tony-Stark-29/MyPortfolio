import React from 'react'
import { GoBackBtn } from '../components/GoBackBtn'
import mywork from "../css/MyWork.module.css";

export const MyWorks = () => {
  return (
    <div className={mywork.container}>
       <GoBackBtn></GoBackBtn>
    </div>
  )
}
