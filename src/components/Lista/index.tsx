
import { ITarefa } from "../../types/tarefas";
import Item from "./item";
import style from "./Lista.module.scss";

interface Props {
  tarefa: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefa, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefa.map((item) => (
          <Item
          selecionaTarefa={selecionaTarefa}
          key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
