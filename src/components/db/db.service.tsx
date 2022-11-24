import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import { useLiveQuery } from "dexie-react-hooks";
import { UseDb } from './db.props'
import { db } from './DbNotes'
import dataStore from '../../store/dataStore';

export const useDb:UseDb = () => {    
    const notes = useLiveQuery(
        () => db.notes.toArray()
    )

    const createNote = () => {
        let now = new Date()
        db.notes.add({
            date: now.getTime(),
            title: 'Новая заметка',
            body: 'Старая заметка. Съешь еще этих сладких французских будок.'
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
        notes: notes,
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