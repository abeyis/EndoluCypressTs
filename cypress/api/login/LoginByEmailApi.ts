import User from '../../models/User'

export default class LoginByEmailApi {
	createToken(user: User, email : string) {
		return cy.request({
			method: 'POST',
			url: '/api/Auth/loginbymail',
			body: {
				email: email,
				securityCode: user.getSecurityCode(),
				test:user.getTest()
			}
		});
	}
}
