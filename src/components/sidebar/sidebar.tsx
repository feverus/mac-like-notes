import dataStore from '../../store/dataStore'
import useSidebar from "./sidebar.service";
import C from './sidebar.module.scss'
import ListItem from '../listItem';


export function Sidebar() {
	const [api] = useSidebar() 

	return (
		<>
		{dataStore.notes?.map((item, num) => 
			<button 
				onClick={()=>api.chooseNote(item.id as number)}
				key={num}
				className={C.itemBtn}
			>
				<ListItem note={item} selected={item.id===dataStore.selectedId} />
			</button>
		)}
		</>
	)
}