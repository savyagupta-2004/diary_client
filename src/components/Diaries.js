import React, { useContext, useEffect } from "react";
import diaryContext from "../context/diary/diaryContext";
import DiaryItem from "./DiaryItem";
import AddDiary from "./AddDiary";
import { useNavigate } from "react-router-dom";

const Diaries = (props) => {
  let navigate = useNavigate();
  const context = useContext(diaryContext);
  const { diaries, fetchalldiary } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchalldiary();
    } else {
      navigate("/login");
    }

    // eslint-disable-next-line
  }, []);

  const { showAlert } = props;

  return (
    <div className="container my-5">
      <AddDiary showAlert={showAlert} />
      <h1 className="text-center my-3">Your Diaries</h1>
      <div className="row">
        {diaries.length === 0 && (
          <p className="text-center">
            Go on! Write about your day, I won't read it (maybe not)
          </p>
        )}
        {diaries.map((diaryforuse) => (
          <DiaryItem
            diary={diaryforuse}
            key={diaryforuse._id}
            showAlert={showAlert}
          />
        ))}
      </div>
    </div>
  );
};

export default Diaries;
