import * as I from '../../store/storeInterfaces'
import C from './listItem.module.scss'

type Props = {note: I.Note, selected: boolean}

export default function ListItem ({note, selected}: Props) {
    const now = new Date()
    const noteDate = new Date(note.date)

    let showDate = (((now.getTime() - note.date) < 24*60*60*1000) && (now.getDay()===noteDate.getDay()))?
        noteDate.getHours()+':'+noteDate.getMinutes()
        :
        noteDate.getDate()+'.'+noteDate.getMonth()+'.'+noteDate.getFullYear()

    return (
        <div className={C.block+((selected) ? ' '+C.selected:'')}>
            <div className={C.title}>
                {note.title}
            </div>
            <div className={C.snippet}>
                <div className={C.date}>
                    {showDate}
                </div>
                <div className={C.body}>
                    {note.body}
                </div>
            </div>
        </div>
    )
}