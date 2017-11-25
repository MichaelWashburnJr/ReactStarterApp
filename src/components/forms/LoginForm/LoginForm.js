import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import objectAssign from 'object-assign';
import {
  Alert,
  Well,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';
import yup from '../../../utils/yupHelper';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      submitTried: false,
      touched: {
        email: false,
        password: false
      },
      errors: {
        email: '',
        password: ''
      },
      values: {
        email: '',
        password: ''
      },
      validationStates: {
        email: null,
        password: null,
      }
    };
    this.schema = yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required()
    });

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
    this.validate = this.validate.bind(this);
    this.getValidationStates = this.getValidationStates.bind(this);
  }

  handleChange(event) {
    let newValues = objectAssign({}, this.state.values);
    let newTouched = objectAssign({}, this.state.touched);
    newValues[event.target.id] = event.target.value;
    newTouched[event.target.id] = true;
    this.setState({values: newValues, touched: newTouched});
    return true;
  }

  validate() {
    let newErrors = {
      email: '',
      password: ''
    };

    this.schema.validate(this.state.values, {abortEarly: false})
      .then(() => {
        this.setState({
          errors: newErrors,
          validationStates: this.getValidationStates(newErrors)
        });
      })
      .catch((err) => {
        err.inner.forEach((fieldErr) => {
          newErrors[fieldErr.path] = fieldErr.message;
        });
        this.setState({
          errors: newErrors,
          validationStates: this.getValidationStates(newErrors)
        });
      });
  }

  isValid() {
    this.validate();
    return this.schema.isValid(this.state.values);
  }

  getValidationStates(errors=this.state.errors) {
    let validationStates = {
      email: null,
      password: null
    };
    if(this.state.submitTried === true) {
      if(errors.email) {
        validationStates.email = 'error';
      }
      else {
        validationStates.email = 'success';
      }

      if(errors.password) {
        validationStates.password = 'error';
      }
      else {
        validationStates.password = 'success';
      }
    }
    return validationStates;
  }

  submit() {
    this.setState({
      submitTried: true,
      touched: {
        email: true,
        password: true
      }
    });
    this.isValid().then((isValid) => {
      if(isValid) {
        this.props.onSubmit(this.state.values);
      }
    });
  }

  render() {
    let emailHelp = <span>&nbsp;</span>;
    let passwordHelp = <span>&nbsp;</span>;

    if(this.state.submitTried === true) {
      if(this.state.touched.email && this.state.errors.email) {
        emailHelp = this.state.errors.email;
      }
      if(this.state.touched.password && this.state.errors.password) {
        passwordHelp = this.state.errors.password;
      }
    }

    let alert;
    if(this.props.alert) {
      alert = <Alert bsStyle="danger">{this.props.alert}</Alert>;
    }

    return (
      <div className="login-form">
        <Well>
          <form>

            <FormGroup
              controlId="email"
              validationState={this.state.validationStates.email}
            >
              <ControlLabel>Email</ControlLabel>
              <FormControl
                type="email"
                onChange={this.handleChange}
                onBlur={this.validate}
              />
              <FormControl.Feedback />
              <HelpBlock>{emailHelp}</HelpBlock>
            </FormGroup>

            <FormGroup
              controlId="password"
              validationState={this.state.validationStates.password}
            >
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                onChange={this.handleChange}
                onBlur={this.validate}
              />
              <FormControl.Feedback />
              <HelpBlock>{passwordHelp}</HelpBlock>
            </FormGroup>

            <Button
              type="button"
              bsStyle="success"
              block
              onClick={this.submit}
            >
              Login
            </Button>

          </form>

          <p className="text-muted">
            Don't have an account? <Link to="/">Register here</Link>.
          </p>
        </Well>
        {alert}
      </div>
    );
  }

}

LoginForm.propTypes = {
  alert: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
