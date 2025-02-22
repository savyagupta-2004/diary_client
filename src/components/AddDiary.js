import React, { useContext, useState } from "react";
import diaryContext from "../context/diary/diaryContext";

const AddDiary = (props) => {
  const context = useContext(diaryContext);
  const { adddiary } = context;
  const [diary, setDiary] = useState({
    title: "",
    description: "",
  });

  const handleAddDiary = (e) => {
    e.preventDefault();
    adddiary(diary.title, diary.description);
    props.showAlert("Diary added successfully", "success");
    setDiary({
      title: "",
      description: "",
    });
  };

  const handleOnChange = (e) => {
    setDiary({ ...diary, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Add Diary</h1>

      <form onSubmit={handleAddDiary}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={diary.title}
            onChange={handleOnChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={diary.description}
            onChange={handleOnChange}
            minLength={5}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={diary.title.length < 5 || diary.description.length < 5}
        >
          Add Diary
        </button>
      </form>
    </div>
  );
};

export default AddDiary;
