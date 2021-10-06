module.exports = {
  GUIKIT: {
    DEBOUNCE_ON_CHANGE_TIME: 150,
  },
  /**
   * URL of Topcoder Community Website
   */
  TOPCODER_COMMUNITY_WEBSITE_URL: "https://topcoder.com",

  /* Max number of recommended challenges */
  CHALLENGE_DETAILS_MAX_NUMBER_RECOMMENDED_CHALLENGES: 3,
  /**
   * URL of Topcoder Connect Website
   */
  SERVER_API_KEY: "aa9ccf36-3936-450c-9983-097ddba51bef",
  CONNECT_WEBSITE_URL: "https://connect.topcoder.com",

  AV_SCAN_SCORER_REVIEW_TYPE_ID: "55bbb17d-aac2-45a6-89c3-a8d102863d05",
  URL: {
    ARENA: "https://arena.topcoder.com",
    APP: "https://community-app.topcoder.com",

    /* This is the same value as above, but it is used by topcoder-react-lib,
     * as a more verbose name for the param. */
    COMMUNITY_APP: "https://community-app.topcoder.com",

    AUTH: "https://accounts-auth0.topcoder.com",
    BASE: "https://www.topcoder.com",
    HOME: "/my-dashboard",
    COMMUNITY: "https://community.topcoder.com",
    FORUMS: "https://apps.topcoder.com/forums",
    FORUMS_VANILLA: "https://discussions.topcoder.com",
    HELP:
      "https://www.topcoder.com/thrive/tracks?track=Topcoder&tax=Help%20Articles",
    SUBMISSION_REVIEW: "https://submission-review.topcoder.com",
    MEMBER: "https://member.topcoder.com",
    ONLINE_REVIEW: "https://software.topcoder.com",
    PAYMENT_TOOL: "https://payment.topcoder.com",
    STUDIO: "https://studio.topcoder.com",
    IOS: "https://ios.topcoder.com",

    /* Connector URL of the TC accounts App. */
    ACCOUNTS_APP_CONNECTOR: "https://accounts-auth0.topcoder.com/",
    TCO17: "https://tco17.topcoder.com/",
    TCO19: "https://tco19.topcoder.com/",

    TOPGEAR: "https://topgear-app.wipro.com",

    COMMUNITY_API: "http://localhost:8000",

    COMMUNITIES: {
      BLOCKCHAIN: "https://blockchain.topcoder.com",
      COGNITIVE: "https://cognitive.topcoder.com",
      ZURICH: "https://zurich.topcoder.com",
      COMCAST: "https://comcast.topcoder.com",
      CS: "https://cs.topcoder.com",
    },
    EMAIL_VERIFY_URL: "http://www.topcoder.com/settings/account/changeEmail",
    CAL_MODE: false,
    DEFAULT_SPACE_NAME: "default",
    DEFAULT_ENVIRONMENT: "master",
  },

  // Config for TC EDU - THRIVE
  TC_EDU_BASE_PATH: "/thrive",
  TC_EDU_ARTICLES_PATH: "/articles",
  ENABLE_RECOMMENDER: true,

  API: {
    V5: "https://api.topcoder.com/v5",
    V4: "https://api.topcoder-dev.com/v4",
    V3: "https://api.topcoder-dev.com/v3",
    V2: "https://api.topcoder-dev.com/v2",
  },

  MOCK_TERMS_SERVICE: false,
  AV_SCAN_SCORER_REVIEW_TYPE_ID: "55bbb17d-aac2-45a6-89c3-a8d102863d05",
  PROVISIONAL_SCORING_COMPLETED_REVIEW_TYPE_ID:
    "df51ca7d-fb0a-4147-9569-992fcf5aae48",

  PAGE_SIZE: 50,
  REVIEW_OPPORTUNITY_PAGE_SIZE: 1000,
  CONTENTFUL: {
    LOCAL_MODE: false,
    DEFAULT_SPACE_NAME: "default",
    DEFAULT_ENVIRONMENT: "master",
  },
  FILESTACK: {
    API_KEY: process.env.FILESTACK_API_KEY || "AzFINuQoqTmqw0QEoaw9az",
    REGION: "us-east-1",
    SUBMISSION_CONTAINER:
      process.env.FILESTACK_SUBMISSION_CONTAINER ||
      "topcoder-dev-submissions-dmz",
  },
};
