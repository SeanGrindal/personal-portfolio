<template lang="html">
  <p class="Text-Block">
    <slot />
  </p>
</template>

<script>
import ioMixin from '~/assets/js/ioMixin.js'
if (process.client) {
  var anime = require('animejs').default
}

export default {
  mixins: [ioMixin],
  methods: {
    reveal() {
      anime({
        targets: this.$el,
        duration: 1280,
        easing: 'easeOutQuint',
        translateY: ['3em', '0em'],
        opacity: ['0', '1']
      })

      this.unobserveIO()
    }
  }
}
</script>

<style lang="scss" scoped>
.Text-Block {
  opacity: 0;
  transform: translateY(3em);
}
</style>
