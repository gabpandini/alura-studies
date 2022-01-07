import Item from './item/index'
import style from './list.module.scss'
import { ITarefa } from '../../types/tarefa'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas} >
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map(item => (
                    <Item 
                        key={item.id} 
                        selecionaTarefa={selecionaTarefa}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;

