import C from './main.module.scss'
import { Layout } from 'antd'
import TopMenu from '../topMenu';
import Sidebar from '../sidebar'
import Workspace from '../workSpace'
 
const { Header, Sider, Content } = Layout;

export function Main() {
	return (
		<Layout>
			<Header className={C.header} >
				<TopMenu />
			</Header>
			<Layout className={C.workSection}>
				<Sider className={C.sider} 
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