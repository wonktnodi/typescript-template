import * as React from "react";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";

import { GithubUser } from "../../types";
import { ping, fetchUser, cancelFetch } from "../../actions";

import "./App.css";
import ball from "../../assets/pingPongBall.png";

interface Props {
  isPinging: any;
  ping: any;
  fetchUserInfo: () => Action;
  fetchUserInfoError: () => Action;
  joy: GithubUser;
  fetchCancel: any;
  fetchUserError: any;
  isFetchingUser: boolean;
}

class App extends React.Component<Props> {
  render() {
    const {
      isPinging,
      ping,
      fetchUserInfo,
      joy,
      fetchCancel,
      fetchUserError,
      fetchUserInfoError,
      isFetchingUser
    } = this.props;
    const err = fetchUserError ? fetchUserError.message : "";
    return (
      <div className="App">
        <div className="App__pingPong">
          <div className="App__pingPong--ball">
            <img src={ball} style={{ width: isPinging ? "50px" : "100px" }} />
          </div>
          <button onClick={ping}>{isPinging ? "pong" : "ping"} 🏓</button>
        </div>
        <div className="App__fetch">
          <div>
            <img src={joy.avatar_url || ""} />
            {isFetchingUser ? "获取中" : ""}
            {err}
          </div>
          <button onClick={fetchUserInfoError}>User info error</button>
          <button onClick={fetchUserInfo}>Fetch user info</button>
          <button onClick={fetchCancel}>Cancel user fetching !</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    isPinging: state.ping.isPinging,
    joy: state.user.joy,
    fetchUserError: state.user.error,
    isFetchingUser: state.user.isFetchingUser
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchUserInfo: () => dispatch(fetchUser("feel5ny")),
    fetchUserInfoError: () => dispatch(fetchUser("feel5y")),
    fetchCancel: () => dispatch(cancelFetch()),
    ping: () => dispatch(ping())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
