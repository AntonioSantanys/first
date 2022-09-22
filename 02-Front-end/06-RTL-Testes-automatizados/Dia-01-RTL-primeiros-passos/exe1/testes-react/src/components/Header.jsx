import React from "react";
import { getUser } from "../services/UserApi";
// Pages
import Loading from "./pages/Loading";

class Header extends React.Component {

  state = {
    USER_NAME: '',
    LOADING: true,
  }

  componentDidMoun() {
    this.getUserApi();
  }

  getUserApi = () => {
    this.setState({ LOADING: true }, async () => {
      const { name } = await getUser();
      this.setState({
        USER_NAME: name,
        LOADING: true,
      })
    })
  }

  render() {
    const { USER_NAME, LOADING } = this.state;
    return (
      <div>
        {
          LOADING ? <Loading /> : (
            <div data-testid="header-component">
              <span>{USER_NAME}</span>
            </div>
          )
        }
      </div>
    )
  }
}

export default Header;