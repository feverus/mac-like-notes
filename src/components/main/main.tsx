import dataStore from '../../store/dataStore'
import useMain from "./main.service";
import C from './main.module.scss'
import { Layout } from 'antd'
import { TopMenu } from '../topMenu/topMenu';

const { Header, Sider, Content } = Layout;

export function Main() {
	const [state, api] = useMain() 

	return (
		<Layout>
			<Header className={C.header} >
				<TopMenu />
			</Header>
			<Layout>
				<Sider className={C.sider} >
					Sider
				</Sider>
				<Content className={C.content} >
					Content
				</Content>
			</Layout>
		</Layout>
	)
}