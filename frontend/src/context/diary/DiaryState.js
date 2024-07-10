import React, { useState, useEffect } from "react";
import diaryContext from "./diaryContext";

const DiaryState = (props) => {
  const host = "http://localhost:5000";
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    fetchalldiary();
  }, []);

  // Fetch all diaries
  const fetchalldiary = async () => {
    const response = await fetch(`${host}/api/diary/fetchdiary`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setDiaries(json);
  };

  // Add Diary
  const adddiary = async (title, description, tag) => {
    const response = await fetch(`${host}/api/diary/addiary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log("Diary added:", json);
    setDiaries((prevDiaries) => [...prevDiaries, json]);
  };

  // Delete diary
  const deletediary = async (id) => {
    console.log("Deleting diary with id", id);
    const response = await fetch(`${host}/api/diary/deletediary/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log("Diary deleted:", json);
    setDiaries((prevDiaries) =>
      prevDiaries.filter((tempDiary) => tempDiary._id !== id)
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
