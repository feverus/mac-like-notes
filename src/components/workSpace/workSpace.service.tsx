import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import dataStore from '../../store/dataStore'
import { UseWorkSpace } from './workSpace.props'
import { useDb } from '../db'

const useWorkSpace:UseWorkSpace = () => {    
    const [dbState, dbApi] = useDb()

    useEffect(() => {
        console.log('workSpace> ' + dataStore.filterText)
    }, [dataStore.filterText])

    const state = {
        note: (dbState.notes!==undefined) ? 
            dbState.notes.find(item => (item.id===dataStore.selectedId)) 
            :
            undefined,
    }

    const api = {
        editNote:dbApi.editNote,
    }

    return (
        [state, api]
    )
}
export default useWorkSpace