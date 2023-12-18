import Store from "../../models/Store";
import { Faker, faker } from "@faker-js/faker";

export default class CargoAdd{

    getCargoAdd(store:Store){
        return cy.request({
            method:'POST',
            url:'/api/cargosettings/add-or-update',
            headers:{
                Authorization:`Bearer ${store.getStoryToken()}`,
                "Content-Type" : "application/json"
            },
            body:{
                "useEndoluAgreement": true,
                "defaultCargoCompanyApi": "c5a04beb-1f8f-44d2-ac39-d26bf7c361ba",
                "ApplyCargoPriceToProductsThatHaveLowerPriceFromDefaultPrice": false,
                "ApplyCargoPriceAllProducts": false,
                "useFreeShipping": false,
                "defaultPrice": null,
                "productBasedDefinition": 1,
                "additionalCharge": null,
                "thresholdValue": null,
                "belowThresholdValue": null,
                "aboveThresholdValue": null,
                "freeShippingAmount": null,
                "defaultPaymentType": false,
                "returnPricePolicy": false,
                "deliveryTime": "3 İş Günü",
                "wareHouseAddress": {
                    "title": "İade Depo Adresi",
                    "address": `Gebze OSB NO : ${Math.floor(Math.random()*900)+100}`,
                    "city": "KOCAELİ",
                    "district": "GEBZE"
                },
                "returnAddress": {
                    "title": "Depo Adresi",
                    "address": "İstanbul Merkez Depo Arnavutköy",
                    "city": "İSTANBUL",
                    "district": "ARNAVUTKÖY"
                },
                "selectableCargoesWithPriceByCustomer": []
            }
        })
    }
      }
        