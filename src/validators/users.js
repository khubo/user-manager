import Ajv from 'ajv'

const ajv = new Ajv()

let postUserSchema = {
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "pattern": "[a-zA-Z0-10]",
      "minLength": 5
    },
    "password": {
      "type": "string",
      "minLength": 6,
      "maxLength": 100
    },
    "profilePic": {
      "type": "string",
      "minLength": 30
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "additionalProperties": false,
  "required": ["username", "email", "password"]
}

let putUserSchema = {
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "pattern": "[a-zA-Z0-10]6+"
    },
    "password": {
      "type": "string",
      "minLength": 6,
      "maxLength": 100
    },
    "profilePic": {
      "type": "string",
      "minLength": 30
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "additionalProperties": false
}


export const postValidate = ajv.compile(postUserSchema)
export const putValidate = ajv.compile(putUserSchema)