import Notification from './Notification'

export default class HttpError extends Notification {
  get title () {
    return `Error Code #${this._title}`
  }

  /**
   * Constructor.
   * @param {object} error
   */
  constructor (error) {
    /*
     * Network errors are their own special thing.
     */
    const code = error.message === 'Network Error'
      ? 'NETWORK'
      : error.response.status

    const messageMap = {
      500: 'Something went wrong on the server. Tell your administrator about this.',
      404: 'That endpoint could not be located. Tell your administrator about this.',
      NETWORK: 'Something is wrong with the network. Try again in a few moments.',
    }

    const defaultMessage = 'There is no default message for this error. Tell your administrator about this.'

    super(
      code,
      messageMap[code] || defaultMessage,
      'error'
    )

    this._error = error
  }
}
