<script setup lang="ts">
import {useData} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {nextTick, provide} from 'vue'
import AsideBottom from "./AsideBottom.vue";
import Banner from "./Banner.vue";

const {isDark} = useData()

const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({clientX: x, clientY: y}: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready
  document.documentElement.animate(
      [
        // {transform: 'rotateY(-180deg) scale(1)'},
        // {transform: 'rotateY(-270deg) scale(60%)'},
        // {transform: 'rotateY(-360deg) scale(1)'},
        {transform: 'rotateY(-90deg)'},
        {transform: 'rotateY(0deg)'},
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        pseudoElement: `::view-transition-new(root)`
      }
  )


  document.documentElement.animate(
      [
        // {transform: 'rotateY(0deg) scale(1)'},
        // {transform: 'rotateY(-90deg) scale(60%)'},
        // {transform: 'rotateY(-180deg) scale(1)'},
        {transform: 'rotateY(0deg)'},
        {transform: 'rotateY(90deg)'},
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        pseudoElement: `::view-transition-old(root)`
      }
  )
})

</script>

<template>
  <DefaultTheme.Layout>
    <template #aside-bottom>
      <AsideBottom/>
    </template>
    <template #layout-top>
      <Banner />
    </template>
  </DefaultTheme.Layout>
</template>

<style>

body{
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
}
::view-transition-image-pair(root) {
  perspective: 2000px;
}

::view-transition-group(root) {
  background-color: #202127;
}

.dark::view-transition-group(root) {
  background-color: #f6f6f7;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform-origin: 50% 50% 50vw;
}
/**
//::view-transition-old(root){
//  transform-origin: left;
//}
//::view-transition-new(root){
//  transform-origin: right;
//}
*/

::view-transition-new(root) {
  z-index: 9999;
}
</style>
