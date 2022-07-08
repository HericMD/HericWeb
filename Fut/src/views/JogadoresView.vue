<script>
import axios from "axios";
export default {
  data() {
    return {
      jogadores: [],
      novo_time: "",
      novo_jogador: "",
    };
  },
  async created() {
    const jogadores = await axios.get("http://localhost:4000/jogadores");
    this.jogadores = jogadores.data;
  },
  methods: {
    async salvar() {
      const jogador = {
        nome: this.novo_jogador,
        time: this.novo_time,
      };
      const jogador_criado = await axios.post(
        "http://localhost:4000/jogadores",
        jogador
      );
      this.jogadores.push(jogador_criado.data);
    },
    async excluir(jogador) {
      await axios.delete(`http://localhost:4000/times`);
      const indice = this.times.indexOf(jogador);
      this.times.splice(indice, 1);
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
      <input type="text" placeholder="Jogador" v-model="novo_jogador" />
      <input type="text" placeholder="Time" v-model="novo_time" />
      <button @click="salvar">Salvar</button>
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
            <td>{{ jogador.time }}</td>
            <td>
              <button>Editar</button>
              <button @click="excluir(jogador)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
