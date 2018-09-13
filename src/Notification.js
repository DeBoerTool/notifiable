import uuid from 'uuid/v4'

export default class Notification {
  static colorMap () {
    return {
      error: 'is-warning',
      ok: 'is-success',
      success: 'is-success',
      default: 'is-info',
    }
  }

  /**
   * The css class to style the notification.
   * @returns {string}
   */
  get color () {
    return Notification.colorMap()[this._type] || Notification.colorMap().default
  }

  /**
   * The unique 10 digit id.
   * @returns {string}
   */
  get id () {
    return this._id
  }

  /**
   * The notification message.
   * @returns {string}
   */
  get message () {
    return this._message
  }

  /**
   * The notification title.
   * @returns {string}
   */
  get title () {
    return this._title
  }

  get showFor () {
    return this._showFor
  }

  /**
   * Constructor.
   * @param {string} title
   * @param {string} message
   * @param {string} type
   */
  constructor (title, message, type = '', showFor = 0) {
    this._title = title
    this._message = message
    this._type = type
    this._showFor = showFor
    this._id = uuid()
  }
}
