import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import dataStore from '../../store/dataStore'
import { UseSidebar } from './sidebar.props'
import { useDb } from '../db'

const useSidebar:UseSidebar = () => {    
    const [dbState, dbApi] = useDb()

    useEffect(() => {
        console.log('filterText changed> ' + dataStore.filterText)
    }, [dataStore.filterText])

    useEffect(() => {
        if (dbState.notes!==undefined && dbState.notes.length>0)  chooseNote(dbState.notes[0].id as number)
    }, [dbState.notes])

    const chooseNote = (id:number) => {
        dataStore.setSelectedId(id)
        dataStore.setEditedMode(false)
    }

    const state = {
        filteredNotes:dbState.notes
    }

    const api = {
        chooseNote:chooseNote,
    }

    return (
        [state, api]
    )
}
export default useSidebar