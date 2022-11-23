import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import dataStore from '../../store/dataStore'
import { UseTopMenu } from './topMenu.props'

const useTopMenu:UseTopMenu = () => {    

    useEffect(() => {
        console.log('welcome to TopMenu')
    }, [])

    const createNote = () => {
        return
    }
    const editNote = () => {
        return
    }
    const deleteNote = () => {
        return
    }
    const filter = () => {
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