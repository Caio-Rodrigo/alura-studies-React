import React, { useState } from "react";
import { ITarefa } from "../../types/tarefas";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,

      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          id="tarefa"
          placeholder="Oque Você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;
