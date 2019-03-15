export default function({ store, redirect }) {
  if (store.state.auth.loggedIn && (store.state.auth.user.given_name || store.state.auth.user.name)) {
    return redirect("/");
  }
}
