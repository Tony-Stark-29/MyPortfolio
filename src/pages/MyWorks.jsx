import React from "react";
import { GoBackBtn } from "../components/GoBackBtn";
import mywork from "../css/MyWork.module.css";
import my_portfolio_img from "../resources/project-screenshots/my_portfolio.png";


export const MyWorks = () => {
  return (
    <>
      <GoBackBtn></GoBackBtn>
      <section className={mywork.container}>
        <div className={mywork.myprojects}>
          <div className={mywork.project}>
          <div className={mywork.project_title}>My Portfolio</div>
              <div className={mywork.project_img}>
                <img src={my_portfolio_img} alt="My Portfolio" />
              </div>
              <div className={mywork.project_link}>
                <button> Source <i class="fa-duotone fa-forward"></i>  </button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
