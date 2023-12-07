import Store from "../../models/Store";
import User from "../../models/User";



export default class StoreApplicationAdd{
    
    storeAdd(store:Store){
        return cy.request({
            method:'POST',
            url:'/api/StoreApplications/add',
            body:{
                storeName:store.getStoreName(),
                typeOfProduct:store.getTypeOfProduct(),
                appInstagram:store.getAppInstagram(),
                appFacebook:store.getAppFacebook(),
                appTiktok:store.getAppTikTok(),
                appYoutube:store.getAppYoutube(),
                adress:store.getAdress(),
                city:store.getCity(),
                companyName:store.getCompanyName(),
                companyType:store.getCompanyType(),
                domesticMarketPlaces:store.getDomesticMarketPlaces(),
                eMail:store.getEmail(),
                foreignMarketPlaces:store.getForeignMarketPlaces(),
                iban:store.getIban(),
                identityNumber:store.getIdentityNumber(),
                other:store.getOther(),
                ourBranStory:store.getOurBrandStore(),
                retailStore:store.getRetailStore(),
                slogan:store.getSlogan(),
                socialMedia:store.getSocialMedia(),
                storeLogo:store.getStoreLogo(),
                taxNumber:store.getTaxNumber(),
                taxOffice:store.getTaxOffice(),
                telephone:store.getTelephone(),
                town:store.getTown()

            },
            headers:{
                "Authorization":`Bearer ${store.getToken()}`,
                "Content-Type" : "application/json"
            }
            
        })
    }
}