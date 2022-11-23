import {observer, inject} from "mobx-react";
import {Sidebar} from './sidebar'

export default
	inject('dataStore')
	(observer(Sidebar));

export type { ApiType, UseSidebar } from './sidebar.props'