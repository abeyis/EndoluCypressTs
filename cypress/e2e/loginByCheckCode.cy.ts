import SendCode from "../api/login/SendCode";
import User1 from "../models/User1";
import GetSentCodeToEmailApi2 from "../api/login/GetSenTCodeToEmailApi2";
import CheckCode from "../api/login/CheckCode";
import BrowserUtils from "../utils/BrowserUtils";

describe('Login By Check Code', () => {

const getSecurityCode=new SendCode();
const user=new User1();
const getSentCode=new GetSentCodeToEmailApi2();
const registerByCheckCode=new CheckCode()
const browserUtils=new BrowserUtils();


    it('Create Security Code (Send-Code)', () => {
        getSecurityCode.createSecurityCode(user)
    });

    it('Get Sent Code To Email', () => {
		getSentCode.getCode(user)
		.then((response)=>{
			user.setSecurityCode(browserUtils.getCode(response));
		});
	});

    it('Register By Check Code', () => {
       registerByCheckCode.confirmUser(user)
       .then((response)=>{
        expect(response.status).to.be.eqls(200)
       }) 
    });
    
});