import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import dataStore from '../../store/dataStore'
import { UseWorkSpace } from './workSpace.props'
import { useDb } from '../db'

const useWorkSpace:UseWorkSpace = () => {    
    const [dbApi] = useDb()

    const dateToShowOptions:Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    }

    let note, dateToShow
    if (dataStore.notes!==undefined) {        
        note = dataStore.notes.find(item => (item.id===dataStore.selectedId))
        if (note!==undefined) {
            const noteDate = new Date(note.date) 
            dateToShow = noteDate.toLocaleDateString("ru", dateToShowOptions)
        } else {
            note = dataStore.notes[0]
            dateToShow = '.'
        }
    } else {
        note = undefined
        dateToShow = '.'
    }

    const state = {
        note: note,
        dateToShow: dateToShow,
    }

    const api = {
        editNote:dbApi.editNote,
    }

    return (
        [state, api]
    )
}
export default useWorkSpace