import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import HeadShake from "react-reveal/HeadShake";
import api from "./services/api";

function App() {
    const [input, setInput] = useState('');
    const [github, setGithub] = useState({});
    async function handleSearch() {
        if (input === "") {
          alert("Preencha o Input com seu Usuario")
        }

        try {
            const response = await api.get(`${input}`);
            setGithub(response.data)
            setInput('')
        } catch { 
          alert("Ops, algo ocorreu. Tente novamente")
          setInput('')

        }
    }
  return (
    <div className="container">
      <h1 className="title">
        <HeadShake>Github Usuarios</HeadShake>
      </h1>
      <div className="inputgroup">
        <input type="text" placeholder="Digite seu usuario.." value={input} onChange={(event) => setInput(event.target.value)} ></input>

        <button className="buttonSearch">
          <FiSearch size={20} color="#FFF" onClick={handleSearch} />
        </button>
      </div>

      <div className="containerprofile">
        <img src={github.avatar_url}></img>
      </div>

      <div className="containergithub">
        <span>Nome: {github.name}</span>
        <span>Cidade: {github.location}</span>
        <span>Username: {github.login}</span>
        <span>Id: {github.id}</span>
        <span>Repositorios: {github.public_repos}</span>
      </div>
    </div>
  );
}

export default App;
