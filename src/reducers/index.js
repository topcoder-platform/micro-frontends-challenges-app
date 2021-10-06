import { combineReducers } from "redux";
import challenges from "./challenges";
import filter from "./filter";
import lookup from "./lookup";
import challenge from "./challenge";
import challengeListing from "./challenge-listing";
import tcCommunities from "./tc-communities";
import page from "./page";
import terms from "./terms";
import auth from "./auth";
import errors from "./errors";
import submission from "./submission";
import submissionManagement from "./submissionManagement";

export default combineReducers({
  challenges,
  filter,
  lookup,
  challenge,
  challengeListing,
  tcCommunities,
  page,
  terms,
  auth,
  submission,
  submissionManagement,
  errors,
});
