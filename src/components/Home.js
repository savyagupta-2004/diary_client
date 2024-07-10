import React from "react";
// import { useContext } from "react";
// import diaryContext from "../context/diary/diaryContext";

// import AddDiary from "./AddDiary";
import Diaries from "./Diaries";

const Home = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <Diaries showAlert={showAlert}></Diaries>
    </div>
  );
};

export default Home;
