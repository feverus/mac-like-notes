import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import dataStore from '../../store/dataStore'
import { UseWorkSpace } from './workSpace.props'
import { useDb } from '../db'

const useWorkSpace:UseWorkSpace = () => {    
    const [dbState, dbApi] = useDb()

    const dateToShowOptions:Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    }

    useEffect(() => {
        console.log('workSpace> ' + dataStore.filterText)
    }, [dataStore.filterText])

    let note, dateToShow
    if (dbState.notes!==undefined) {        
        note = dbState.notes.find(item => (item.id===dataStore.selectedId))
        if (note!==undefined) {
            const noteDate = new Date(note .date) 
            dateToShow = noteDate.toLocaleDateString("ru", dateToShowOptions)
        } else dateToShow = ''
    } else {
        note = undefined
        dateToShow = ''
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