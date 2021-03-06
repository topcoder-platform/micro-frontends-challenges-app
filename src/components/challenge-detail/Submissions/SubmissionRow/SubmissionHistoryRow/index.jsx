/* eslint jsx-a11y/no-static-element-interactions:0 */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 * SubmissionHistoryRow component.
 */

import React from "react";
import PT from "prop-types";
import moment from "moment";
// import Completed from '../../../icons/completed.svg';
import Failed from "../../../icons/failed.svg";
import InReview from "../../../icons/in-review.svg";
import Queued from "../../../icons/queued.svg";

import "./style.module.scss";

export default function SubmissionHistoryRow({
  isMM,
  submission,
  finalScore,
  provisionalScore,
  submissionTime,
  isReviewPhaseComplete,
  onShowPopup,
  submissionId,
  status,
  member,
}) {
  const getInitialReviewResult = () => {
    if (provisionalScore && provisionalScore < 0) return <Failed />;
    switch (status) {
      case "completed":
        return provisionalScore;
      case "in-review":
        return <InReview />;
      case "queued":
        return <Queued />;
      case "failed":
        return <Failed />;
      default:
        return provisionalScore;
    }
  };
  const getFinalScore = () => {
    if (isMM && finalScore && finalScore > -1 && isReviewPhaseComplete) {
      return finalScore;
    }
    return "-";
  };

  return (
    <div styleName="container">
      <div styleName="row no-border">
        {isMM ? <div styleName="col-1 col child" /> : null}
        <div styleName="col-2 col child">{submission}</div>
        <div styleName="col-3 col">
          <div styleName="col child">{getFinalScore()}</div>
          <div styleName="col child">{getInitialReviewResult()}</div>
        </div>
        <div styleName={`col-4 col history-time ${isMM ? "mm" : ""}`}>
          <div styleName="col child">
            {moment(submissionTime).format("DD MMM YYYY")}{" "}
            {moment(submissionTime).format("HH:mm:ss")}
          </div>
        </div>
        {isMM && (
          <div styleName="col-5 col">
            <div
              role="button"
              tabIndex={0}
              styleName="col child"
              onClick={() => onShowPopup(true, submissionId, member)}
            >
              View Details
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

SubmissionHistoryRow.defaultProps = {
  finalScore: null,
  provisionalScore: null,
  isReviewPhaseComplete: false,
};

SubmissionHistoryRow.propTypes = {
  member: PT.string.isRequired,
  isMM: PT.bool.isRequired,
  submission: PT.number.isRequired,
  finalScore: PT.oneOfType([PT.number, PT.string]),
  status: PT.string.isRequired,
  provisionalScore: PT.oneOfType([PT.number, PT.string]),
  submissionTime: PT.string.isRequired,
  isReviewPhaseComplete: PT.bool,
  submissionId: PT.string.isRequired,
  onShowPopup: PT.func.isRequired,
};
