import React from "react";

const ReviewModal = ({
  onReViewClose,
  handleWriteReview,
}: {
  onReViewClose: () => void;
  handleWriteReview: () => void;
}) => {
  return (
    <div>
      <button
        className="btn-basic"
        onClick={() => {
          handleWriteReview();
          onReViewClose();
        }}
      >
        제출
      </button>
    </div>
  );
};

export default ReviewModal;
