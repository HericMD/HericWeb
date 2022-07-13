<script>
import axios from "axios";
export default {
  data() {
    return {
      times: [],
      novo_time: "",
    };
  },
  async created() {
    const times = await axios.get("http://localhost:4000/times");
    this.times = times.data;
  },

  methods: {
    async salvar() {
      const time = {
        nome: this.novo_time,
      };
      const time_criado = await axios.post("http://localhost:4000/times", time);
      this.times.push(time_criado.data);
    },
    async excluir(time) {
      await axios.delete(`http://localhost:4000/times/${time.id}`);
      const indice = this.times.indexOf(time);
      this.times.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de times</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        placeholder="Time"
        v-model="novo_time"
        @keydown.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-times">
      <table v-if="times.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
            <td>{{ time.id }}</td>
            <td>{{ time.nome }}</td>
            <td>
              <button>Editar</button>
              <button @click="excluir(time)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
      <span v-else>Sem times cadastrados</span>
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
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
}

.form-input input,
select {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 3px;
}

.form-input button {
  padding: 0.5rem;
  width: 15%;
  border: 2px solid rgb(20, 230, 20);
  border-radius: 10px;
  background-color: #fff;
  color: rgb(20, 230, 20);
  font-weight: bold;
  margin-top: 10px;
}

.form-input button:hover {
  background-color: rgb(20, 230, 20);
  color: white;
  transform: translateY(-5px);
  box-shadow: 0px 15px 20px rgba(8, 233, 143, 0.2);
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  border-spacing: 0;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 1.1rem;
  text-align: center;
}

table thead {
  background-color: rgb(40, 40, 40);
  color: white;
}

table tbody tr:nth-child(odd) {
  background-color: rgb(70, 120, 250, 0.5);
  color: white;
}

table tbody tr:nth-child(even) {
  background-color: rgb(230, 230, 230);
  color: black;
}
</style>
