import Notification from './classes/Notification'
import Notifiable from './components/Container.vue'

const defaultNotification = new Notification(
  'Default title',
  'If you\'re seeing this you tried to push something onto the notification stack that shouldn\'t be there...',
  'error',
  2000
)

export default {
  install (Vue) {
    Vue.component('notifiable', Notifiable)

    Vue.prototype.$notify = new Vue({
      data () {
        return {
          notes: [],
        }
      },

      methods: {
        /**
         * Push a Notification onto the stack. If it's not a Notification push the default.
         * @param notification
         */
        push (notification) {
          if (notification instanceof Notification) {
            this.pushToStack(notification)
          } else {
            this.pushToStack(defaultNotification)
          }
        },

        /**
         * Push a notification to the stack, optionally adding a timer.
         * @param {Notification} notification
         */
        pushToStack (notification) {
          if (notification.showFor > 0) {
            this.timerFor(notification)
          }

          this.notes.push(notification)
        },

        /**
         * Add a timer for a notification.
         * @param {Notification} notification
         */
        timerFor ({ id, showFor }) {
          setTimeout(() => this.clear({ id }), showFor)
        },

        indexFor ({ id }) {
          return this.notes.findIndex(note => note.id === id)
        },

        /**
         * Clear an item from the stack by ID.
         * @param {Object} param0
         */
        clear ({ id }) {
          const index = this.indexFor({ id })

          if (index > -1) {
            this.notes.splice(index, 1)
          }
        },

        /**
         * Create a success message without much fuss.
         * @param {String} message
         * @param {Number} showFor
         */
        success (message, title = 'Success!', showFor = 3000) {
          this.pushToStack(new Notification(
            title,
            message,
            'success',
            showFor
          ))
        },
      },

      computed: {
        errors () {
          return this.notes.filter(note => note.type === 'error')
        },
      },
    })
  },
}
