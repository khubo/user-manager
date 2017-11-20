import Ajv from 'ajv'

const ajv = new Ajv()

let authorizationSchema = {
  "type": "object",
  "properties" : {
    "username": {
      "type": "string",
    },
    "password": {
      "type": "string",
    }
  },
  "additionalProperties": false
}

let authorizationValidate = ajv.compile(authorizationSchema)


export {
  authorizationValidate
}