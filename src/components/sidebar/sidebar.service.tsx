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
        console.log('first')
        if (dbState.notes!==undefined) chooseNote(dbState.notes[0].id as number)
    }, [dbState.notes])

    const chooseNote = (id:number) => {
        dataStore.setSelectedId(id)
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