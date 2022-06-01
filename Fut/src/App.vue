<script></script>

<template>
  <header>
    <div class="menu-esquerdo">
      <span>Home</span>
      <span>|</span>
      <span>Jogadores</span>
      <span>|</span>
      <span>Times</span>
    </div>
    <div class="menu-dirieto">
      <span>Sair</span>
    </div>
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

body {
  background-color: gray;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}

header,
footer {
  height: 10%;
  background-color: rgb(57, 57, 128);
  color: white;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
}

header span {
  padding: 0 20px;
}

main {
  height: 80%;
}
</style>
