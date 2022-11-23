import { useState, useEffect } from 'react'
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
        let date = new Date()
        db.notes.add({
            date: date.getTime(),
            title: 'Новая заметка',
            body: ''
        })
    }
    const editNote = () => {
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