import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import dataStore from '../../store/dataStore'
import { UseTopMenu } from './topMenu.props'
import { useDb } from '../db'

const useTopMenu:UseTopMenu = () => {    
    const [dbState, dbApi] = useDb()

    useEffect(() => {
        console.log('welcome to TopMenu')
    }, [])


    const setEditedMode = () => {
        dataStore.setEditedMode(!dataStore.editedMode)
    }

    const filter = (text:string) => {
        return
    }

    const api = {
        createNote:dbApi.createNote,
        setEditedMode:setEditedMode,
        deleteNote:dbApi.deleteNote,
        filter:filter,
    }

    return (
        [api]
    )
}
export default useTopMenu