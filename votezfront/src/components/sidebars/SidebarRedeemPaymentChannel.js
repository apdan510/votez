import * as React from "react";
import * as Strings from "../../common/strings";
import * as Constants from "../../common/constants";
import * as SVG from "../../components/system/svg";
import * as System from "../../components/system";

import { css } from "@emotion/react";

export default class SidebarRedeemPaymentChannel extends React.Component {
  state = {};

  _handleSubmit = () => {
    this.props.onSubmit({});
  };

  _handleCancel = () => {
    this.props.onCancel();
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <System.P style={{ fontFamily: "inter-semi-bold" }}>
          Redeem Payment Channel
        </System.P>
      </React.Fragment>
    );
  }
}
