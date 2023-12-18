
export default class Schemas{

private loginResponseSchema:object
private storeResponseSchema:object
private storeAddResponseSchema:object
private cargoAddResponseSchema:object

constructor(){
    this.loginResponseSchema={
      
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "fullName": {
              "type": "string"
            },
            "userName": {
              "type": "string"
            },
            "hasOwnCompany": {
              "type": "boolean"
            },
            "newUser": {
              "type": "boolean"
            },
            "guid": {
              "type": "string"
            },
            "userGuid": {
              "type": "string"
            },
            "token": {
              "type": "string"
            },
            "expiration": {
              "type": "string"
            },
            "accessType": {
              "type": "null"
            },
            "location": {
              "type": "null"
            },
            "loginTime": {
              "type": "null"
            },
            "companyGuid": {
              "type": "null"
            }
          },
          "required": [
            "fullName",
            "userName",
            "hasOwnCompany",
            "newUser",
            "guid",
            "userGuid",
            "token",
            "expiration",
            "accessType",
            "location",
            "loginTime",
            "companyGuid"
          ]
        },
        "success": {
          "type": "boolean"
        },
        "message": {
          "type": "null"
        }
      },
      "required": [
        "data",
        "success",
        "message"
      ]
    }
    this.storeResponseSchema={
      
      "type": "object",
      "properties": {
        "data": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "companyGuid": {
                  "type": "string"
                },
                "storeGuid": {
                  "type": "string"
                },
                "storeName": {
                  "type": "string"
                },
                "storeImage": {
                  "type": "string"
                },
                "averageRating": {
                  "type": "number"
                },
                "totalRatingNumber": {
                  "type": "integer"
                },
                "storeHandleUrl": {
                  "type": "string"
                },
                "roles": {
                  "type": "object",
                  "properties": {
                    "isManager": {
                      "type": "boolean"
                    },
                    "pageRoleNames": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "isManager",
                    "pageRoleNames"
                  ]
                },
                "token": {
                  "type": "string"
                }
              },
              "required": [
                "companyGuid",
                "storeGuid",
                "storeName",
                "storeImage",
                "averageRating",
                "totalRatingNumber",
                "storeHandleUrl",
                "roles",
                "token"
              ]
            }
          ]
        },
        "success": {
          "type": "boolean"
        },
        "message": {
          "type": "null"
        }
      },
      "required": [
        "data",
        "success",
        "message"
      ]
    }
    this.storeAddResponseSchema={
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "message": {
          "type": "string"
        }
      },
      "required": [
        "success",
        "message"
      ]
    }
    this.cargoAddResponseSchema={
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "message": {
          "type": "string"
        }
      },
      "required": [
        "success",
        "message"
      ]
    }
    
}

getLoginResponseSchema(){
    return this.loginResponseSchema
}
getStoreResponseSchema(){
  return this.storeResponseSchema
}
getStoreAddResponseSchema(){
  return this.storeAddResponseSchema
}
getCargoAddResponseSchema(){
  return this.cargoAddResponseSchema
}

}