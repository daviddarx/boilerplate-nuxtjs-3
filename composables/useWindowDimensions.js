import { reactive, toRefs, onMounted } from 'vue'

export function useWindowDimensions() {
  const state = reactive({
    width: 0,
    height: 0,
  })

  function setValues() {
    state.width = window.innerWidth
    state.height = window.innerHeight
  }

  onMounted(() => {
    setValues()
  })

  return {
    ...toRefs(state),
  }
}
