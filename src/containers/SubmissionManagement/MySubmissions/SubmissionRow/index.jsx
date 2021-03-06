import React from "react";
import PT from "prop-types";
import moment from "moment";
import ScreeningStatus from "../ScreeningStatus";
import DeleteIcon from "assets/icons/IconTrashSimple.svg";
import DownloadIcon from "assets/icons/IconSquareDownload.svg";
import ExpandIcon from "assets/icons/IconMinimalDown.svg";
import { COMPETITION_TRACKS, CHALLENGE_STATUS } from "../../../../constants";

import "./styles.scss";

const SubmissionRow = ({
  submission,
  showScreeningDetails,
  track,
  onDownload,
  onDelete,
  onShowDetails,
  status,
  allowDelete,
}) => {
  const formatDate = (date) =>
    moment(+new Date(date)).format("MMM DD, YYYY hh:mm A");

  return (
    <tr styleName="submission-row">
      <td styleName="id-col">
        {submission.id}
        <div styleName="legacy-id">{submission.legacySubmissionId}</div>
      </td>
      <td>{submission.type}</td>
      <td styleName="date-col">{formatDate(submission.created)}</td>
      {track === COMPETITION_TRACKS.DES && (
        <td styleName="status-col">
          {submission.screening && (
            <ScreeningStatus
              screeningObject={submission.screening}
              onShowDetails={onShowDetails}
              submissionId={submission.id}
            />
          )}
        </td>
      )}
      <td styleName="action-col">
        <div>
          <button onClick={() => onDownload(submission.id)} type="button">
            <DownloadIcon />
          </button>
          {status !== CHALLENGE_STATUS.COMPLETED &&
            track !== COMPETITION_TRACKS.DES && (
              <button
                styleName="delete-icon"
                onClick={() => onDelete(submission.id)}
                disabled={!allowDelete}
                type="button"
              >
                <DeleteIcon />
              </button>
            )}
          <button
            styleName={`expand-icon ${showScreeningDetails ? "expanded" : ""}`}
            onClick={() => onShowDetails(submission.id)}
            type="button"
          >
            <ExpandIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

SubmissionRow.defaultProps = {};

SubmissionRow.propTypes = {
  submission: PT.shape({}),
  showScreeningDetails: PT.bool,
  track: PT.string,
  onDownload: PT.func,
  onDelete: PT.func,
  onShowDetails: PT.func,
  status: PT.string,
  allowDelete: PT.bool,
};

export default SubmissionRow;
