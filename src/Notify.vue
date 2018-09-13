<template>
  <div class="notify">
    <transition-group name="fade">
      <Notification
        v-for="notification in notifications"
        :item="notification"
        :key="notification.id"
      />
    </transition-group>
  </div>
</template>

<script>
import Notification from './Item'

export default {
  components: { Notification },

  computed: {
    notifications () {
      return this.$notify.notes
    },
  },
}
</script>

<style lang="sass" scoped>
  .notify
    bottom: 0
    position: fixed
    right: 0
    max-width: 100%
    padding: 1rem
    width: 40rem
    z-index: 99

  .fade-enter-active, .fade-leave-active
    transition: opacity .35s

  .fade-enter, .fade-leave-to
    opacity: 0
</style>
