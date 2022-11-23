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

    const createNote = () => {
        dbApi.createNote()
    }
    const editNote = () => {
        return
    }
    const deleteNote = () => {
        return
    }
    const filter = (text:string) => {
        return
    }

    const api = {
        createNote:createNote,
        editNote:editNote,
        deleteNote:deleteNote,
        filter:filter,
    }

    return (
        [api]
    )
}
export default useTopMenu