import Store from "../../models/Store";


export default class UpdateStoreInformation{
    
    getUpdate(store:Store){
        return cy.request({
            method:'PUT',
            url:'/api/stores/store-options/design-settings/update-store-page-by-selected-store',
            headers:{
                Authorization:`Bearer ${store.getStoryToken()}`,
                "Content-Type" : "application/json"
            },
            body:{
                "promotionText": "",
                "storeGuid": store.getStoreGuid(),
                "companyGuid": store.getCompanyGuid(),
                "storeName": "Klasik Araba Tutkunları",
                "typeOfProduct": store.getTypeOfProduct(),
                "slogan": store.getSlogan(),
                "city": store.getCity(),
                "district": "",
                "ourBrandStory": store.getOurBrandStore(),
                "aboutUsVideo": ""
            }
        })
    }
}