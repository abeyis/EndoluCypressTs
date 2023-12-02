import SendCode from '../api/login/SendCode';

export default class User1{

    private identifier : string;
    private isMail : boolean;
    private countryId : number;
    private securityCode : string;

    

    constructor(){
        this.identifier="smtendolu@mail7.io";
        this.isMail=true;
        this.countryId=212;
        
    }

    getIdentifier(){
        return this.identifier;
    }
    getIsmail(){
        return this.isMail;
    }
    getCountryId(){
        return this.countryId;
    }
    getSecurityCode() {
        return this.securityCode;
    }

    setSecurityCode(securityCode: string) {
        this.securityCode = securityCode;
    }




}