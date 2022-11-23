import {observer, inject} from "mobx-react";
import {WorkSpace} from './workSpace'

export default
	inject('dataStore')
	(observer(WorkSpace));

export type { ApiType, StateType, UseWorkSpace } from './workSpace.props'