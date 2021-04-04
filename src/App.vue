<template>
  <div id="app">
    <Menu/>
    <Sobre/>
    <Skills/>
    <Contato/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Sobre from '@/components/Sobre'
import Skills from '@/components/Skills'
import Contato from '@/components/Contato'

export default {
  name: 'App',
  components: { Contato, Skills, Sobre, Menu },
  created () {
    document.title = 'Dymas Sousa'
  }
}
</script>

<style lang="scss">
@import '~@/assets/custom';
</style>
