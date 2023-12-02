import GetSentCodeToEmailApi from "../api/login/GetSenTCodeToEmailApi";
import GetSentCodeToEmailApi2 from "../api/login/GetSenTCodeToEmailApi";
import User from "../models/User";

describe('Send Code For Register', () => {

    const user=new User()
    const postSendCode=new GetSentCodeToEmailApi()
    const getCode=new GetSentCodeToEmailApi()
    let extractedNumber;
    it('Send Code', () => {
        postSendCode.getCode(user)
        .then((response)=>{
            expect(response.status).to.be.equals(200)
        })
    });
    

    it('get code to email', () => {
        getCode.getCode(user)
        .then((response)=>{
			const inputString =response.body.data[0].mail_source.headers.subject;
			const regex = /Endolu Giriş Kodu: (\d+)/;
			const match = inputString.match(regex);
			user.setSecurityCode(extractedNumber = match ? match[1] : null);
			cy.log(extractedNumber)
            
		});
    });
    
});