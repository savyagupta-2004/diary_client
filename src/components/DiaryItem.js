import React, { useContext } from "react";
import diaryContext from "../context/diary/diaryContext";

const DiaryItem = (props) => {
  const context = useContext(diaryContext);
  const { deletediary } = context;
  const { diary } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{diary.title}</h5>
          <p className="card-text">{diary.description}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-danger float-end btn-sm"
            onClick={() => {
              deletediary(diary._id);
              props.showAlert("Diary Deleted successfully", "success");
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiaryItem;
