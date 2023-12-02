import SendCode from "../api/login/SendCode";
import User1 from "../models/User1";
import GetSentCodeToEmailApi2 from "../api/login/GetSenTCodeToEmailApi2";
import CheckCode from "../api/login/CheckCode";

describe('Login By Check Code', () => {

const getSecurityCode=new SendCode();
const user=new User1();
const getSentCode=new GetSentCodeToEmailApi2();
const registerByCheckCode=new CheckCode()
let extractedNumber;

    it('Create Security Code (Send-Code)', () => {
        getSecurityCode.createSecurityCode(user)
    });

    it('Get Sent Code To Email', () => {
		getSentCode.getCode(user)
		.then((response)=>{
			const inputString =response.body.data[0].mail_source.headers.subject;
			const regex = /Endolu Giriş Kodu: (\d+)/;
			const match = inputString.match(regex);
			user.setSecurityCode(extractedNumber = match ? match[1] : null);
			cy.log(extractedNumber)
		});
	});

    it('Register By Check Code', () => {
       registerByCheckCode.confirmUser(user)
       .then((response)=>{
        expect(response.status).to.be.eqls(200)
       }) 
    });
    
});