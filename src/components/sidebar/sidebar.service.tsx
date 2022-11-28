import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../db/DbNotes'
import { useEffect } from 'react'
import dataStore from '../../store/dataStore'
import { UseSidebar } from './sidebar.props'

const useSidebar:UseSidebar = () => {     
    const notes = useLiveQuery(
        () => {return db.notes.toArray()}
    )
    
    useEffect(() => {
        let temp = notes
        if ((dataStore.filterText!=='') && (notes!==undefined)) {
            temp = notes.filter(({body, title}) => 
                body.toUpperCase().includes(dataStore.filterText.toUpperCase()) || title.toUpperCase().includes(dataStore.filterText.toUpperCase())               
            )
            chooseNote(0)
        }  

        if (temp) dataStore.setNotes(temp)
    }, [notes, dataStore.filterText])
    
    useEffect(() => {
        if (dataStore.notes!==undefined && dataStore.notes.length>0 && dataStore.selectedId===0)
            chooseNote(dataStore.notes[0].id as number)
    }, [dataStore.notes])
    

    const chooseNote = (id:number) => {        
        dataStore.setEditedMode(false)
        dataStore.setSelectedId(id)
    }

    const api = {
        chooseNote:chooseNote,
    }

    return (
        [api]
    )
}
export default useSidebar