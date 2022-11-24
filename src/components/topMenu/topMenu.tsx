import dataStore from '../../store/dataStore'
import useTopMenu from "./topMenu.service";
import C from './topMenu.module.scss'
import { Button, Input, Segmented , Space, Divider  } from 'antd'
import { AppstoreOutlined, BarsOutlined, LayoutOutlined, CopyOutlined, DeleteOutlined, EditOutlined, LockOutlined, DownOutlined, TableOutlined, ClockCircleOutlined, FontSizeOutlined, PictureOutlined, TeamOutlined, UploadOutlined, SearchOutlined} from '@ant-design/icons'

export function TopMenu() {
	const [api] = useTopMenu() 

	const segmentedOptions = [
		{ value:'List', icon: <BarsOutlined />, label:'' },
		{ value:'Kanban',  icon: <AppstoreOutlined />, label:'' }
		]

	return (
		<div className={C.body}>
				<Space size='small'>
					<Button shape="circle" className={C.leftRoundBtn+' '+C.red} />
					<Button shape="circle" className={C.leftRoundBtn+' '+C.yellow} />
					<Button shape="circle" className={C.leftRoundBtn+' '+C.green} />
					<Segmented options={segmentedOptions} key={"Segmented1"} onResize={()=>{return}} onResizeCapture={()=>{return}} />
					<Button shape="default" className={C.btns} icon={<LayoutOutlined />} />
					<Button shape="default" className={C.btns} icon={<CopyOutlined />}
						onClick={()=>api.createNote()} />
					<Button shape="default" className={C.btns} icon={<DeleteOutlined />} 
						onClick={()=>api.deleteNote()} />
					<Button shape="default" className={C.btns} icon={<EditOutlined />} 
						onClick={()=>api.setEditedMode()} />
					<Button shape="default" className={C.btns} icon={<><LockOutlined /><DownOutlined /></>} />
					<Button shape="default" className={C.btns} icon={<TableOutlined />} />
					<Button shape="default" className={C.btns} icon={<ClockCircleOutlined />} />
					<Button shape="default" className={C.btns} icon={<FontSizeOutlined />} />	
				</Space>

				<div className={C.finderINputDiv}>
					<Space size='small'>
						<Space size='small'>
							<Button shape="default" className={C.btns} icon={<><PictureOutlined /><DownOutlined /></>} />
							<Button shape="default" className={C.btns} icon={<TeamOutlined />} />
							<Button shape="default" className={C.btns} icon={<UploadOutlined />} />
						</Space>
						<Space size='small'>
							<Input
								prefix={<><SearchOutlined /><DownOutlined /></>} 
								onChange={el => api.filter(el.target.value)}
								placeholder="Search"
							/>
						</Space>
					</Space>
				</div>
		</div>
	)
}