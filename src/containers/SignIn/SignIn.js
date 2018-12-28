import React from 'react';
import { connect } from 'react-redux';
import {
	postPassword,
	postEmail,
	signInRequest,
	changeRoute,
	changeRouteToHome,
	changeRouteToSignUp
} from '../../actions';

const mapStateToProps = (state) => {
	return {
		signInEmail: state.postSignInfo.email,
		signInPassword: state.postSignInfo.password
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onEmailChange: (event) => dispatch(postEmail(event.target.value)),
		onPasswordChange: (event) => dispatch(postPassword(event.target.value)),
		onSubmitSignIn: (email, password) => dispatch(signInRequest(email, password)),
		onRouteChange: (routeTo) => dispatch(changeRoute(routeTo)),
		onRouteToHome: () => dispatch(changeRouteToHome()),
		onRouteToSignUp: () => dispatch(changeRouteToSignUp())
	};
};

class SignIn extends React.Component {
	onSubmit = () => {
		const { onSubmitSignIn, signInEmail, signInPassword } = this.props;
		onSubmitSignIn(signInEmail, signInPassword);
	};

	alertTooBadForNow = () => {
		alert('TOO BAD FOR NOW :(');
	};

	render() {
		const { onRouteToSignUp, onPasswordChange, onEmailChange } = this.props;

		return (
			<main className="pa4 black-80">
				<form className="measure center">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f4 fw6 ph0 mh0">Sign In</legend>
						<div className="mt3">
							<label className="db fw6 lh-copy f6" htmlFor="email-address">
								Email
							</label>
							<input
								className="pa2 input-reset ba bg-transparent w-100"
								type="email"
								onChange={onEmailChange}
							/>
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="password">
								Password
							</label>
							<input
								className="b pa2 input-reset ba bg-transparent w-100"
								type="password"
								onChange={onPasswordChange}
							/>
						</div>
					</fieldset>
					<div className="">
						<input
							onClick={this.onSubmit}
							className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib w-100"
							type="submit"
							value="Sign in"
						/>
					</div>
					<div className="lh-copy mt3">
						<a onClick={onRouteToSignUp} href="#0" className="f6 link dim black db">
							Sign up
						</a>
						<a
							onClick={this.alertTooBadForNow}
							href="#0"
							className="f6 link dim black db"
						>
							Forgot your password?
						</a>
					</div>
				</form>
			</main>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
