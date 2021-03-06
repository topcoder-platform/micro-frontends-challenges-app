import challenges from "./challenges";
import filter from "./filter";
import lookup from "./lookup";
import init from "./initApp";
import challenge from "./challenge.js";
import challengeListing from "./challenge-listing";
import auth from "./auth";
import page from "./page/challenge-details";
import errors from "./errors";
import submission from "./submission";
import submissionManagement from "./submissionManagement";

export default {
  challenges,
  filter,
  lookup,
  init,
  submission,
  submissionManagement,
  ...challenge,
  ...challengeListing,
  ...auth,
  ...lookup,
  ...page,
  ...errors,
};
