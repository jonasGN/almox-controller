const home = "/app";

export const Paths = Object.freeze({
  // auth
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
  FORGOT_PASSWORD: "/forgot",

  // app
  HOME: home,
  ITEMS: `${home}/items`,
  ITEMS_REQUESTS: `${home}/requests`,
  ITEMS_ADD: `${home}/items/add`,
  PROFILE: "/profile",
});
