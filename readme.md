A notification plugin for Vue. Styled with Bulma.

## Installation

`npm install --save notifiable`

```
import Notifiable from 'notifiable'

Vue.use(Notifiable)
```

## Usage

Mount the globally available `notifiable` component close to the root of your app. Notifications will appear in the lower right hand corner. Then push notifications onto the stack by newing up a `Notification` and calling `this.$notify.push(notification)`. Or use one of the convenience methods such as `this.$notify.success('your message here').

## Styling

This plugin pulls in the modular Notification styling from Bulma. By default this just include basic styling excluding colours and fonts. If you want full styling you'll have to import Bulma.

## License

MIT. Have at it.
