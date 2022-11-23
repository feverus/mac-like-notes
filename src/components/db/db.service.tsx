import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import { useLiveQuery } from "dexie-react-hooks";
import { UseDb } from './db.props'
import { db } from './DbNotes'

export const useDb:UseDb = () => {    
    const notes = useLiveQuery(
        () => db.notes.toArray()
    )

    useEffect(() => {
        console.log('welcome to main')
    }, [])

    const createNote = () => {
        let now = new Date()
        db.notes.add({
            date: now.getTime(),
            title: 'Старая заметка',
            body: 'Старая заметка. Съешь еще этих сладких французских будок.'
        })
    }
    const editNote = (note:I.Note) => {
        return
    }
    const deleteNote = () => {
        return
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