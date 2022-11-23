import dataStore from '../../store/dataStore'
import useSidebar from "./workSpace.service";
import C from './sidebar.module.scss'
import ListItem from '../listItem';
import useWorkSpace from './workSpace.service';

export function WorkSpace() {
	const [state, api] = useWorkSpace() 

	console.log(state)

	return (state.note===undefined)?
		<></>
	:
		<>{state.note.title}<br/>
		{state.note.body}</>

}