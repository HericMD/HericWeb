<script>
import JogadoresApi from "@/api/jogadores.js";
const jogadoresApi = new JogadoresApi();
export default {
  data() {
    return {
      jogadores: [],
      jogador: {},
      times: [],
    };
  },
  async created() {
    this.jogadores = await this.buscarTodosOsJogadores();
  },
  methods: {
    async salvar() {
      if (this.jogador.id) {
        await jogadoresApi.atualizarJogador(this.jogador);
      } else {
        await jogadoresApi.adicionarJogador(this.jogador);
      }
      this.jogadores = await jogadoresApi.buscarTodosOsJogadores();
      this.jogador = {};
    },
    async excluir(jogador) {
      await jogadoresApi.excluirJogador(jogador.id);
      this.jogadores = await jogadoresApi.buscarTodosOsJogadores();
    },
    editar(jogador) {
      Object.assign(this.jogador, jogador);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de jogadores</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Jogador" v-model="jogador.nome" />
      <input
        type="text"
        placeholder="Ano nascimento"
        v-model="jogador.anoNascimento"
      />
      <input
        type="text"
        placeholder="Posicao de Jogo"
        v-model="jogador.posicaoJogo"
      />
      <select v-model="jogador.timeId">
        <option v-for="time in times" :key="time.id" :value="time.id">
          {{ time.nome }}
        </option>
      </select>
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ano Nascimento</th>
            <th>Posição de Jogo</th>
            <th>Time</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogador in jogadores" :key="jogador.id">
            <td>{{ jogador.id }}</td>
            <td>{{ jogador.nome }}</td>
            <td>{{ jogador.anoNascimento }}</td>
            <td>{{ jogador.posicaoJogo }}</td>
            <td>{{ jogador.time.nome }}</td>
            <td>???</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
.title {
  text-align: center;
  margin: 2rem 0;
}

.form-input {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.form-input input {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.form-input button {
  padding: 0.5rem;
  width: 15%;
  border: 1px solid rgb(20, 113, 20);
  border-radius: 10px;
  background-color: rgb(20, 113, 20);
  color: white;
  font-weight: bold;
  margin-left: 1%;
}

.list-times {
  display: flex;
  justify-content: center;
}
table {
  width: 70%;
  border-collapse: collapse;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 1.1rem;
  text-align: center;
}
table thead {
  background-color: rgb(42, 24, 98);
  color: white;
}
table thead th {
  font-weight: bolder;
}
table tbody tr:nth-child(odd) {
  background-color: rgb(213, 228, 250);
}
</style>
