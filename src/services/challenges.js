import api from "./api";
import * as util from "../utils/url";

/**
 * Search challenges
 *
 * @return {Array<Object>} challenges
 */
async function getChallenges(filter, cancellationSignal) {
  const challengeQuery = util.buildQueryString(filter);
  return api.get(
    `/challenges/${challengeQuery}`,
    undefined,
    cancellationSignal
  );
}

export default {
  getChallenges,
};
