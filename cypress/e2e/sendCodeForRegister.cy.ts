import GetSentCodeToEmailApi from "../api/login/GetSenTCodeToEmailApi";
import GetSentCodeToEmailApi2 from "../api/login/GetSenTCodeToEmailApi";
import BrowserUtils from "../utils/BrowserUtils";
import User from "../models/User";

describe('Send Code For Register', () => {

    const user=new User();
    const postSendCode=new GetSentCodeToEmailApi();
    const browserUtils=new BrowserUtils();

    it('Send Code', () => {
        postSendCode.getCode(user.getEmail())
        .then((response)=>{
            expect(response.status).to.be.equals(200)
        })
    });
    

    it('get code to email', () => {
        postSendCode.getCode(user.getEmail())
        .then((response)=>{

			browserUtils.getCode(response);

		});
    });
    
});