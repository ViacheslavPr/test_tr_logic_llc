import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextSelectGroup = ({
  name,
  error,
  info,
  onChange,
  required,
  disabled,
  standartValue,
  values
}) => {
  let key = 0;
  let opt = "";
  if (values) {
    opt = values.map(a => (
      <option key={key++} values={`${a}`}>
        {a}
      </option>
    ));
  }
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        required={required}
        onChange={onChange}
        disabled={disabled}
        defaultValue={standartValue}
      >
        <option disabled>{standartValue}</option>
        {opt}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextSelectGroup.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  standartValues: PropTypes.string,
  values: PropTypes.array.isRequired
};

TextSelectGroup.defaultProps = {
  type: "text"
};

export default TextSelectGroup;
