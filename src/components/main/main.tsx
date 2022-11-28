import C from './main.module.scss'
import { Layout } from 'antd'
import TopMenu from '../topMenu';
import Sidebar from '../sidebar'
import Workspace from '../workSpace'
import dataStore from '../../store/dataStore';
 
const { Header, Sider, Content } = Layout;

export function Main() {
	const siderStyle = (dataStore.showSider)?
		C.sider + ' ' + C.show 
		:
		C.sider

	return (
		<Layout>
			<Header className={C.header} >
				<TopMenu />
			</Header>
			<Layout className={C.workSection}>
				<Sider className={siderStyle}
					width='240px'>
					<Sidebar />
				</Sider>
				<Content className={C.content} >
					<Workspace />
				</Content>
			</Layout>
		</Layout>
	)
}