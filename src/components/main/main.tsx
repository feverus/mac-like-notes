import defaultStore from '../../store/defaultStore'
import useMain from "./main.service";
import C from './content.module.scss'

export function Main() {
	const [state, api] = useMain() 

	return (
		<>hello {defaultStore.sample}</>
	)
}