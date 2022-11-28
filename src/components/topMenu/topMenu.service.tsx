import { useState } from 'react'
import dataStore from '../../store/dataStore'
import { UseTopMenu } from './topMenu.props'
import { useDb } from '../db'

const useTopMenu:UseTopMenu = () => {    
    const [dbApi] = useDb()
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const setEditedMode = () => {
        dataStore.setEditedMode(!dataStore.editedMode)
    }

    const toggleSider = () => {
        dataStore.setShowSider(!dataStore.showSider)
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
        toggleSider:toggleSider,
        deleteNote:deleteNote,
        showDeleteDialog:showDeleteDialog,
        filter:filter,
    }

    return (
        [state, api]
    )
}
export default useTopMenu