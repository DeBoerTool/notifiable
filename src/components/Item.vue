<template>
  <div
    class="notification"
    :class="item.color"
  >
    <button
      class="delete"
      @click="remove"
    />

    <h1
      class="subtitle"
      v-text="item.title"
    />

    <span
      v-text="item.message"
    />
  </div>
</template>

<script>
import Notification from '../classes/Notification'

export default {
  props: {
    item: {
      required: true,
      type: Notification
    }
  },

  methods: {
    remove () {
      this.$notify.clear({ id: this.item.id })
    },
  },
}
</script>

<style lang="sass" scoped>
  .notification
    margin-bottom: 1.5rem
</style>
