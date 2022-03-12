<template>
  <div>
    <div class="header-container">
      <h2 class="header-title">{{ title }}</h2>
      <div class="nav">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </div>
    </div>
    <hr class="header-divider" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Default Header Title',
    },
  },
}
</script>

<style scoped lang="scss">
.header-title {
  margin: 0px;
}

.header-container {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ghostwhite;
}

.nav {
  width: 200px;
  display: flex;
  justify-content: space-evenly;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nuxt-link-exact-active {
  color: $bjss-house-colour;
  text-decoration: underline;
}

.header-divider {
  border: none;
  width: 100%;
  height: 50px;
  margin-top: 0px;
  border-bottom: 1px solid #1b2e61;
  box-shadow: 0 5px 5px -5px $bjss-house-colour;
  margin: -50px auto 10px;
}
</style>
