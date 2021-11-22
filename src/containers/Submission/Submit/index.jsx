import React from "react";
import PT from "prop-types";
import * as util from "../../../utils/submission";
import Header from "./Header";
import SubmitForm from "./SubmitForm";

import "./styles.scss";

const Submit = ({
  challengeId,
  challengeName,
  phases,
  status,
  winners,
  groups,
  handle,
  communityList,
  isCommunityListLoaded,

  track,
  agreed,
  filePickers,
  submissionFilestackData,
  userId,

  errorMsg,
  isSubmitting,
  submitDone,
  uploadProgress,

  resetForm,
  setAgreed,
  setFilePickerError,
  setFilePickerFileName,
  setFilePickerUploadProgress,
  setFilePickerDragged,
  setSubmissionFilestackData,
  submit,
}) => {
  const submissionEnded = util.isSubmissionEnded({ status, phases });
  const canSubmitFinalFixes = util.canSubmitFinalFixes(
    { winners, phases },
    handle
  );

  const submissionPermitted = !submissionEnded || canSubmitFinalFixes;

  //this code below here is used to check if the user is no longer active in the page
  //by constantly checking for mousemove event
  //if the user is inactive, the page will reload then backend will know that users has logged out else where then redirect to the login page
  // @
  //authTokens won't work because except the page refreshes the fontend won't know that the cookies, session or localstorage has been cleared by this domain from else where, i just submitted to a challenge whereby i have already logged out in another tab since 5 munites ago, but if the page refreshes before the user can the user can return to compelete the submission, this user will be forced to loggin again
 
 const [timeLeft, setTimeLeft] = useState(120);
	let counter;
	const mouseMotion = (t) => {
		counter = setInterval(p, 1000);
		function p() {
			t--;
			setTimeLeft(t--);
		}
	};
	useEffect(() => {
		mouseMotion(120);
		document.addEventListener("mousemove", () => {
			clearInterval(counter);
			setTimeLeft(120);
		});

		document.addEventListener("mouseleave", () => {
			mouseMotion(120);
		});

		//this code below is for touch devices
		document.addEventListener("touchmove", () => {
			clearInterval(counter);
			setTimeLeft(120);
		});

		document.addEventListener("touchend", () => {
			mouseMotion(120);
		});
	}, []);
	if (timeLeft < 1) {
		window.location.reload();
	}
  return (
    <div styleName="container">
      <div styleName="content" role="main">
        <Header title={challengeName} challengeId={challengeId} />
        {submissionPermitted ? (
          <SubmitForm
            challengeId={challengeId}
            challengeName={challengeName}
            phases={phases}
            track={track}
            agreed={agreed}
            filePickers={filePickers}
            submissionFilestackData={submissionFilestackData}
            userId={userId}
            groups={groups}
            communityList={communityList}
            isCommunityListLoaded={isCommunityListLoaded}
            errorMsg={errorMsg}
            isSubmitting={isSubmitting}
            submitDone={submitDone}
            uploadProgress={uploadProgress}
            resetForm={resetForm}
            setAgreed={setAgreed}
            setFilePickerError={setFilePickerError}
            setFilePickerFileName={setFilePickerFileName}
            setFilePickerUploadProgress={setFilePickerUploadProgress}
            setFilePickerDragged={setFilePickerDragged}
            setSubmissionFilestackData={setSubmissionFilestackData}
            submit={submit}
          />
        ) : (
          <div styleName="not-permitted">
            <h2>Submissions are not permitted at this time.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

Submit.defaultProps = {};

Submit.propTypes = {
  challengeId: PT.string,
  challengeName: PT.string,
  phases: PT.arrayOf(PT.shape()),
  status: PT.string,
  winners: PT.arrayOf(PT.shape()),
  groups: PT.arrayOf(PT.shape()),
  handle: PT.string,
  communityList: PT.arrayOf(PT.shape()),
  isCommunityListLoaded: PT.bool,

  track: PT.string,
  agreed: PT.bool,
  filePickers: PT.arrayOf(PT.shape()),
  submissionFilestackData: PT.shape(),
  userId: PT.number,

  errorMsg: PT.string,
  isSubmitting: PT.bool,
  submitDone: PT.bool,
  uploadProgress: PT.number,

  resetForm: PT.func,
  setAgreed: PT.func,
  setFilePickerError: PT.func,
  setFilePickerFileName: PT.func,
  setFilePickerUploadProgress: PT.func,
  setFilePickerDragged: PT.func,
  setSubmissionFilestackData: PT.func,
  submit: PT.func,
};

export default Submit;
