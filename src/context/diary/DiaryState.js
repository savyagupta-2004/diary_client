import React, { useState } from "react";
import diaryContext from "./diaryContext";

const DiaryState = (props) => {
  const host = "http://localhost:5000";
  const diariesInitial = [];
  const [diaries, setdiary] = useState(diariesInitial);

  //fetching all diaries
  const fetchalldiary = async () => {
    const response = await fetch(`${host}/api/diary/fetchdiary`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();

    setdiary(json);
  };

  //add Diary
  const adddiary = async (title, description) => {
    const response = await fetch(`${host}/api/diary/addiary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    console.log(json);
    setdiary(diaries.concat(json));
  };

  //Delete diary
  const deletediary = async (id) => {
    console.log("deleting diary with id" + id);
    const response = await fetch(`${host}/api/diary/deletediary/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setdiary(
      diaries.filter((tempdiary) => {
        return tempdiary._id !== id;
      })
    );
  };
  return (
    <diaryContext.Provider
      value={{ diaries, adddiary, deletediary, fetchalldiary }}
    >
      {props.children}
    </diaryContext.Provider>
  );
};

export default DiaryState;
