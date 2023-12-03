import GetSentCodeToEmailApi from "../api/login/GetSenTCodeToEmailApi";
import GetSentCodeToEmailApi2 from "../api/login/GetSenTCodeToEmailApi";
import BrowserUtils from "../utils/BrowserUtils";
import User from "../models/User";

describe('Send Code For Register', () => {

    const user=new User();
    const postSendCode=new GetSentCodeToEmailApi();
    const getCode=new GetSentCodeToEmailApi2();
    const browserUtils=new BrowserUtils();
    
    it('Send Code', () => {
        postSendCode.getCode(user)
        .then((response)=>{
            expect(response.status).to.be.equals(200)
        })
    });
    

    it('get code to email', () => {
        getCode.getCode(user)
        .then((response)=>{
			browserUtils.getCode(response);
		});
    });
    
});