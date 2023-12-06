
import LoginByEmailApi from '../api/login/LoginByEmailApi';
import GetSentCodeToEmailApi from '../api/login/GetSenTCodeToEmailApi';
import GetSecurityCodeByEmailApi from '../api/login/GetSecurityCodeByEmailApi';
import RegisterByEmail from '../api/login/RegisterByEmail';
import BrowserUtils from '../utils/BrowserUtils';
import User from '../models/User'

describe('Login By Email Test Cases', () => {
		const user = new User();
		const loginByEmailApi = new LoginByEmailApi();
		const getSecurityCode = new GetSecurityCodeByEmailApi();
		const getSentCode = new GetSentCodeToEmailApi();
		const registerByEmail = new RegisterByEmail();
		const browserUtils=new BrowserUtils();
	
	it('Create Security Code', () => {
		getSecurityCode.createSecurityCode(user)

	});

	it('Get Sent Code To Email', () => {
		getSentCode.getCode(user.getEmail())
			.then((response) => {
				user.setSecurityCode(browserUtils.getCode(response));
				cy.log(browserUtils.getCode(response))
			});
	});

	it('Create access Token', () => {

		loginByEmailApi.createToken(user, user.getEmail())
			.then((response) => {
				expect(response.status).to.be.equal(200);
				user.setToken(response.body.data.token);
				cy.log(response.body.data.token)
			})

	});

	it('Register By Email', () => {
		registerByEmail.confirmUser(user)
			.then((response) => {
				expect(response.status).to.be.equal(200);
			});
	});

});
