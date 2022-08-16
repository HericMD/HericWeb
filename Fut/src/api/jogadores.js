import axios from "axios";
export default class JogadoresApi {
  async buscarTodosOsJogadores() {
    const response = await axios.get("http://localhost:4000/jogadores");
    return response.data;
  }

  async buscarJogadores(id) {
    const response = await axios.get(`http://localhost:4000/jogadores/${id}`);
    return response.data;
  }

  async adicionarJogadores(jogador) {
    const response = await axios.post(
      "http://localhost:4000/jogadores",
      jogador
    );
    return response.data;
  }

  async excluirJogadores(id) {
    const response = await axios.delete(
      `http://localhost:4000/jogadores/${id}`
    );
    return response.data;
  }

  async atualizarJogadores(jogador) {
    const response = await axios.put(
      `http://localhost:4000/jogadores/${jogador.id}`,
      jogador
    );
    return response.data;
  }
}
