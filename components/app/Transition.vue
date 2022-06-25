<template>
  <div class="transition">
    <transition name="transition" @after-enter="aferEnterIn">
      <div v-if="isDisplayed" class="transition__bg"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppTransition',
  data() {
    return {
      isDisplayed: false,
      nextFunction: undefined,
    }
  },
  mounted() {
    const router = useRouter()
    router.beforeEach(this.beforeEach)
    console.log('mounted', router)
    /* this.$router.beforeEach(this.beforeEach) */
  },
  methods: {
    beforeEach(to, from, next) {
      console.log('before each')
      this.isDisplayed = true
      this.nextFunction = next
    },
    aferEnterIn() {
      this.isDisplayed = false
      this.nextFunction()
    },
  },
}
</script>

<style lang="pcss" scoped>
.transition__bg {
  @apply fixed z-40;
  @apply top-0 left-0 w-full h-full;
  @apply bg-white;

  will-change: transform;
}

.transition-enter-active {
  @apply transition-transform duration-500 ease-in-out-cubic;
  @apply origin-top-left;
}

.transition-leave-active {
  @apply transition-transform duration-500 ease-in-out-cubic;
  @apply origin-bottom-left;
}

.transition-enter-from {
  transform: scaleY(0);
}

.transition-enter-to {
  transform: scaleY(1);
}

.transition-leave-from {
  transform: scaleY(1);
}

.transition-leave-to {
  transform: scaleY(0);
}
</style>
