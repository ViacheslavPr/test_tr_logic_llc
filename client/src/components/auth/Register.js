import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import TextSelectGroup from "../common/TextSelectGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      age: "",
      country: "",
      gender: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      age: this.state.age,
      country: this.state.country,
      gender: this.state.gender
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">Create your test account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <TextFieldGroup
                  placeholder="A your age"
                  name="age"
                  type="text"
                  value={this.state.age}
                  onChange={this.onChange}
                  error={errors.age}
                />
                <TextSelectGroup
                  placeholder="You country"
                  name="country"
                  type="text"
                  value={this.state.country}
                  onChange={this.onChange}
                  error={errors.country}
                  standartValue="Choose the country"
                  values={[
                    "Afghanistan",
                    "Albania",
                    "Algeria",
                    "American Samoa",
                    "Andorra",
                    "Angola",
                    "Anguilla",
                    "Antigua and Barbuda",
                    "Argentina",
                    "Armenia",
                    "Aruba",
                    "Australia",
                    "Austria",
                    "Azerbaijan",
                    "Bangladesh",
                    "Barbados",
                    "Bahamas",
                    "Bahrain",
                    "Belarus",
                    "Belgium",
                    "Belize",
                    "Benin",
                    "Bermuda",
                    "Bhutan",
                    "Bolivia",
                    "Bosnia and Herzegovina",
                    "Botswana",
                    "Brazil",
                    "British Indian Ocean Territory",
                    "British Virgin Islands",
                    "Brunei Darussalam",
                    "Bulgaria",
                    "Burkina Faso",
                    "Burma",
                    "Burundi",
                    "Cambodia",
                    "Cameroon",
                    "Canada",
                    "Cape Verde",
                    "Cayman Islands",
                    "Central African Republic",
                    "Chad",
                    "Chile",
                    "China",
                    "Christmas Island",
                    "Cocos (Keeling) Islands",
                    "Colombia",
                    "Comoros",
                    "Congo-Brazzaville",
                    "Congo-Kinshasa",
                    "Cook Islands",
                    "Costa Rica",
                    "Croatia",
                    "Cura?ao",
                    "Cyprus",
                    "Czech Republic",
                    "Denmark",
                    "Djibouti",
                    "Dominica",
                    "Dominican Republic",
                    "East Timor",
                    "Ecuador",
                    "El Salvador",
                    "Egypt",
                    "Equatorial Guinea",
                    "Eritrea",
                    "Estonia",
                    "Ethiopia",
                    "Falkland Islands",
                    "Faroe Islands",
                    "Federated States of Micronesia",
                    "Fiji",
                    "Finland",
                    "France",
                    "French Guiana",
                    "French Polynesia",
                    "French Southern Lands",
                    "Gabon",
                    "Gambia",
                    "Georgia",
                    "Germany",
                    "Ghana",
                    "Gibraltar",
                    "Greece",
                    "Greenland",
                    "Grenada",
                    "Guadeloupe",
                    "Guam",
                    "Guatemala",
                    "Guernsey",
                    "Guinea",
                    "Guinea-Bissau",
                    "Guyana",
                    "Haiti",
                    "Heard and McDonald Islands",
                    "Honduras",
                    "Hong Kong",
                    "Hungary",
                    "Iceland",
                    "India",
                    "Indonesia",
                    "Iraq",
                    "Ireland",
                    "Isle of Man",
                    "Israel",
                    "Italy",
                    "Jamaica",
                    "Japan",
                    "Jersey",
                    "Jordan",
                    "Kazakhstan",
                    "Kenya",
                    "Kiribati",
                    "Kuwait",
                    "Kyrgyzstan",
                    "Laos",
                    "Latvia",
                    "Lebanon",
                    "Lesotho",
                    "Liberia",
                    "Libya",
                    "Liechtenstein",
                    "Lithuania",
                    "Luxembourg",
                    "Macau",
                    "Macedonia",
                    "Madagascar",
                    "Malawi",
                    "Malaysia",
                    "Maldives",
                    "Mali",
                    "Malta",
                    "Marshall Islands",
                    "Martinique",
                    "Mauritania",
                    "Mauritius",
                    "Mayotte",
                    "Mexico",
                    "Moldova",
                    "Monaco",
                    "Mongolia",
                    "Montenegro",
                    "Montserrat",
                    "Morocco",
                    "Mozambique",
                    "Namibia",
                    "Nauru",
                    "Nepal",
                    "Netherlands",
                    "New Caledonia",
                    "New Zealand",
                    "Nicaragua",
                    "Niger",
                    "Nigeria",
                    "Niue",
                    "Norfolk Island",
                    "Northern Mariana Islands",
                    "Norway",
                    "Oman",
                    "Pakistan",
                    "Palau",
                    "Panama",
                    "Papua New Guinea",
                    "Paraguay",
                    "Peru",
                    "Philippines",
                    "Pitcairn Islands",
                    "Poland",
                    "Portugal",
                    "Puerto Rico",
                    "Qatar",
                    "R?union",
                    "Romania",
                    "Russia",
                    "Rwanda",
                    "Saint Barth?lemy",
                    "Saint Helena",
                    "Saint Kitts and Nevis",
                    "Saint Lucia",
                    "Saint Martin",
                    "Saint Pierre and Miquelon",
                    "Saint Vincent",
                    "Samoa",
                    "San Marino",
                    "S?o Tom? and Pr?ncipe",
                    "Saudi Arabia",
                    "Senegal",
                    "Serbia",
                    "Seychelles",
                    "Sierra Leone",
                    "Singapore",
                    "Sint Maarten",
                    "Slovakia",
                    "Slovenia",
                    "Solomon Islands",
                    "Somalia",
                    "South Africa",
                    "South Georgia",
                    "South Korea",
                    "Spain",
                    "Sri Lanka",
                    "Sudan",
                    "Suriname",
                    "Svalbard and Jan Mayen",
                    "Sweden",
                    "Swaziland",
                    "Switzerland",
                    "Syria",
                    "Taiwan",
                    "Tajikistan",
                    "Tanzania",
                    "Thailand",
                    "Togo",
                    "Tokelau",
                    "Tonga",
                    "Trinidad and Tobago",
                    "Tunisia",
                    "Turkey",
                    "Turkmenistan",
                    "Turks and Caicos Islands",
                    "Tuvalu",
                    "Uganda",
                    "Ukraine",
                    "United Arab Emirates",
                    "United Kingdom",
                    "United States",
                    "Uruguay",
                    "Uzbekistan",
                    "Vanuatu",
                    "Vatican City",
                    "Vietnam",
                    "Venezuela",
                    "Wallis and Futuna",
                    "Western Sahara",
                    "Yemen",
                    "Zambia",
                    "Zimbabwe"
                  ]}
                />
                <TextSelectGroup
                  placeholder="You gender"
                  name="gender"
                  type="text"
                  value={this.state.gender}
                  onChange={this.onChange}
                  error={errors.gender}
                  standartValue="Choose your gender"
                  values={["male", "female"]}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
