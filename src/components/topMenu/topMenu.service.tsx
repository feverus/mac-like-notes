import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import dataStore from '../../store/dataStore'
import { UseTopMenu } from './topMenu.props'
import { useDb } from '../db'

const useTopMenu:UseTopMenu = () => {    
    const [dbState, dbApi] = useDb()
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const setEditedMode = () => {
        dataStore.setEditedMode(!dataStore.editedMode)
    }

    const filter = (text:string) => {
        dataStore.setFilterText(text)
    }

    const showDeleteDialog = (value: boolean) => {
        setDeleteDialogOpen(value)
    }

    const deleteNote = () => {
        dbApi.deleteNote()
        setDeleteDialogOpen(false)
    }

    const state = {
        deleteDialogOpen: deleteDialogOpen,
    }
    const api = {
        createNote:dbApi.createNote,
        setEditedMode:setEditedMode,
        deleteNote:deleteNote,
        showDeleteDialog:showDeleteDialog,
        filter:filter,
    }

    return (
        [state, api]
    )
}
export default useTopMenu