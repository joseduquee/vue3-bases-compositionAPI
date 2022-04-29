<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>


<script>
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, ref } from 'vue';

export default {
  
  setup() {

    const title = ref('About Page')
    
    console.log('Setup se llamo');

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })

    onRenderTracked(() => {
      console.log('onRenderTracked')
    })

    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })

    onActivated(() => {
      console.log('onActivated')
    })

    onDeactivated(() => {
      console.log('onDeactivated')
    })

    return {
      title,
      changeTitle:() => title.value = 'new about'
    }

  },

}
</script>