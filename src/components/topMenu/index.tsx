import {observer, inject} from "mobx-react";
import {TopMenu} from './topMenu'

export default
	inject('dataStore')
	(observer(TopMenu));

export type { ApiType, UseTopMenu } from './topMenu.props'