import Store from "../../models/Store";

export default class GetAllStore{


    getStore(store:Store){

        return cy.request({
            method:'GET',
            url:'/api/Stores/store-options/general-settings/get-all-store',
            headers:{
                Authorization:`Bearer ${store.getToken()} `,
                "Content-Type" : "application/json"
            }
        })

    }

}