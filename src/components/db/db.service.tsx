import { useMemo, useEffect, useState } from 'react'
import * as I from '../../store/storeInterfaces'
import { useLiveQuery } from "dexie-react-hooks";
import { UseDb } from './db.props'
import { db } from './DbNotes'
import dataStore from '../../store/dataStore';

export const useDb:UseDb = () => {  
    const notes = useLiveQuery(
        () => {return db.notes.toArray()}
    )
    
    const [filteredNotes, setFilteredNotes] = useState(notes)

    useEffect(() => {
        setFilteredNotes(notes)
    }, [notes])

    useEffect(() => { 
        let temp = filteredNotes
        if (notes!==undefined) {
            temp = notes.filter(({body, title}) => 
                body.toUpperCase().includes(dataStore.filterText.toUpperCase()) || title.toUpperCase().includes(dataStore.filterText.toUpperCase())               
            )
            dataStore.setSelectedId(0)
            setFilteredNotes(temp)            
        }
    }, [dataStore.filterText])

    const createNote = () => {
        let now = new Date()
        db.notes.add({
            date: now.getTime(),
            title: 'Новая заметка',
            body: ''
        })
    }

    const editNote = (field: string, value: string) => {
        if (field==='body')
            db.notes
                .where({id: dataStore.selectedId})
                .modify({'body': value})
        if (field==='title')
            db.notes
                .where({id: dataStore.selectedId})
                .modify({'title': value})
    }

    const deleteNote = () => {
        db.notes
            .where("id").equals(dataStore.selectedId)
            .delete() 
        dataStore.setSelectedId(0)       
    }

    const state = {
        notes: filteredNotes,
    }

    const api = {
        createNote:createNote,
        editNote:editNote,
        deleteNote:deleteNote,
    }

    return (
        [state, api]
    )
}

function updateBd(): any {
    throw new Error('Function not implemented.');
}
