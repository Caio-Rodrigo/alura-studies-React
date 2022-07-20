import Botao from "../Botao";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}
export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.Tempo) {
      setTempo(tempoParaSegundos(selecionado.Tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      </>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
    </div>
  );
}
