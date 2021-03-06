import LoadingIndicator from "components/LoadingIndicator";
import PT from "prop-types";
import React from "react";
import { Modal, PrimaryButton } from "topcoder-react-ui-kit";

import style from "./styles.module.scss";

export default function SaveConfirmationModal({ onDone, saving }) {
  return (
    <Modal theme={{ container: style.container }}>
      <h1 styleName="title">Saving The Challenge</h1>
      {saving ? (
        <LoadingIndicator />
      ) : (
        <PrimaryButton onClick={onDone}>Done</PrimaryButton>
      )}
    </Modal>
  );
}

SaveConfirmationModal.propTypes = {
  onDone: PT.func.isRequired,
  saving: PT.bool.isRequired,
};
