<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light" id="menu">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="../assets/foto.png" alt="Dymas"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <a class="nav-link" href="#sobre">Sobre</a>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <a class="nav-link" href="#contato">Contato</a>
          </li>
        </ul>
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="darkSwitch" />
          <label class="custom-control-label" for="darkSwitch">Modo Noturno</label>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  mounted () {
    const darkSwitch = document.getElementById('darkSwitch')
    window.addEventListener('load', () => {
      if (darkSwitch) {
        initTheme()
        darkSwitch.addEventListener('change', () => {
          resetTheme()
        })
      }
    })

    function initTheme () {
      const darkThemeSelected =
        localStorage.getItem('darkSwitch') !== null &&
        localStorage.getItem('darkSwitch') === 'dark'
      darkSwitch.checked = darkThemeSelected
      darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme')
    }

    function resetTheme () {
      if (darkSwitch.checked) {
        document.body.setAttribute('data-theme', 'dark')
        localStorage.setItem('darkSwitch', 'dark')
      } else {
        document.body.removeAttribute('data-theme')
        localStorage.removeItem('darkSwitch')
      }
    }
  }
}
</script>

<style scoped>

</style>
