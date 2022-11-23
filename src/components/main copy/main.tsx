import dataStore from '../../store/dataStore'
import useMain from "./main.service";
import C from './content.module.scss'

export function Main() {
	const [state, api] = useMain() 

	return (
		<>hello</>
	)
}