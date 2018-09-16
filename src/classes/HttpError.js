import Notification from './Notification'

const messages = {
  500: 'Something went wrong on the server. Tell your administrator about this.',
  404: 'That endpoint could not be located. Tell your administrator about this.',
  NETWORK: 'Something is wrong with the network. Try again in a few moments.',
  default: 'There is no default message for this error. Tell your administrator about this.',
}

const getCode = error => (error.message === 'Network Error' ? 'NETWORK' : error.response.status)

const getMessage = (provided, code) => (provided || messages[code] || messages.default)

export default class HttpError extends Notification {
  constructor (error, message = null) {
    const code = getCode(error)

    super(code, getMessage(message, code), 'error')
  }

  get title () {
    return `Error Code #${this._title}`
  }
}
