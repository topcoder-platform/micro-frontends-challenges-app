import challenges from "./challenges";
import filter from "./filter";
import lookup from "./lookup";
import init from "./initApp";
import challenge from "./challenge.js";
import challengeListing from "./challenge-listing";
import auth from "./auth";
import page from "./page/challenge-details";
import errors from "./errors";

export default {
  challenges,
  filter,
  lookup,
  init,
  ...challenge,
  ...challengeListing,
  ...auth,
  ...lookup,
  ...page,
  ...errors,
};
