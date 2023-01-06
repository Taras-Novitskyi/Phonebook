export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUserName = state => state.auth.user.name;
const AuthSelectors = {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserName,
};

export default AuthSelectors;
