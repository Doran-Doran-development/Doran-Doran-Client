import React from "react";
import { Footer, Header, Teacher } from "../Components/index";

const TeacherPage = () => {
  return (
    <>
      <Header role={2}/> {/* 1:admin 2:teacher 3:student*/}
      <Teacher />
      <Footer />
    </>
  );
};

export default TeacherPage;
