<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      times: [
        { id: "61230be1-5988-4506-b5cc-034d275ea2af", nome: "Time 1" },
        { id: "75f3e938-fd69-4214-b479-6ed45144f404", nome: "Time 2" },
        { id: "dadba913-a14c-4dc4-a01a-432460fb90f5", nome: "Time 3" },
        { id: "3204d628-3a4c-43ac-961e-138b4ec37d96", nome: "Time 4" },
      ],
      novo_time: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_time !== "") {
        const novo_id = uuidv4();
        this.times.push({
          id: novo_id,
          nome: this.novo_time,
        });
        this.novo_time = "";
      }
    },
    excluir(time) {
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
      <span v-else>Sem elementos cadastrados</span>
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

.form-input input {
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
