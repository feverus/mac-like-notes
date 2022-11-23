import dataStore from '../../store/dataStore'
import useSidebar from "./workSpace.service";
import C from './sidebar.module.scss'
import ListItem from '../listItem';
import useWorkSpace from './workSpace.service';


export function WorkSpace() {
	const [state, api] = useWorkSpace() 

	console.log(state)

	if (state.note===undefined) 
		return (<></>)
		
	return (dataStore.editedMode) ?
		<>режим редактирования</>
		:
		<>{state.note.title}<br/>
		{state.note.body}</>

}