import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {}

  render() {
    const { user } = this.props.auth;

    let dashboardContent;

    // User is logged in but has no profile
    dashboardContent = (
      <div>
        <p className="lead text-muted">Welcome {user.name}</p>
        <p className="lead text-muted">You age: {user.age}</p>
        <p className="lead text-muted">You country: {user.country}</p>
        <p className="lead text-muted">You gender: {user.gender}</p>
      </div>
    );

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
