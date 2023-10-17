const FIRST_NAME_VALIDATIONS = {
  required: {
    value: true,
    message: 'This field is required',
  },
  maxLength: {
    value: 25,
    message: 'Maximum 25 characters',
  },
}

const LAST_NAME_VALIDATIONS = {
  required: {
    value: true,
    message: 'This field is required',
  },
  maxLength: {
    value: 25,
    message: 'Maximum 25 characters',
  },
}

const EMAIL_VALIDATIONS = {
  required: {
    value: true,
    message: 'This field is required'
  },
  maxLength: {
    value: 150,
    message: 'Maximum 150 characters',
  },
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Please enter a valid email'
  },
}

const PASSWORD_VALIDATIONS = {
  required: {
    value: true,
    message: 'This field is required',
  },
  maxLength: {
    value: 25,
    message: 'Maximum 25 characters',
  },
}

export {
  FIRST_NAME_VALIDATIONS,
  LAST_NAME_VALIDATIONS,
  EMAIL_VALIDATIONS,
  PASSWORD_VALIDATIONS,
}