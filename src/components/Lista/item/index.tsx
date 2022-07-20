import { ITarefa } from "../../../types/tarefas";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  Tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  console.log("Item atual: ", { tarefa, Tempo, selecionado, completado, id });

  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completado &&
        selecionaTarefa({
          tarefa,
          Tempo,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h2>{tarefa}</h2>
      <span>{Tempo}</span>
      {completado && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}
