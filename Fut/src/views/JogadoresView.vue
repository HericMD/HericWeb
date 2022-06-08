<script>
export default {
  data() {
    return {
      jogadores: [
        { id: 1, nome: "Jogador 1", timeid: 1 },
        { id: 2, nome: "Jogador 2", timeid: 2 },
        { id: 3, nome: "Jogador 3", timeid: 3 },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de jogadores</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Jogador" />
      <button>Salvar</button>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Ações" />
      <button>Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Time_ID</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogador in jogadores" :key="jogador.id">
            <td>{{ jogador.id }}</td>
            <td>{{ jogador.nome }}</td>
            <td>{{ jogador.timeid }}</td>
            <td>???</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
