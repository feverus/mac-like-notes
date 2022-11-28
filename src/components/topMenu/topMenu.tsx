import useTopMenu from "./topMenu.service";
import C from './topMenu.module.scss'
import { Button, Input, Segmented , Space, Modal } from 'antd'
import { AppstoreOutlined, BarsOutlined, LayoutOutlined, CopyOutlined, DeleteOutlined, EditOutlined, LockOutlined, DownOutlined, TableOutlined, ClockCircleOutlined, FontSizeOutlined, PictureOutlined, TeamOutlined, UploadOutlined, SearchOutlined} from '@ant-design/icons'

export function TopMenu() {
	const [state, api] = useTopMenu() 

	const segmentedOptions = [
		{ value:'List', icon: <BarsOutlined />, label:'' },
		{ value:'Kanban',  icon: <AppstoreOutlined />, label:'' }
		]

	const downIcon = (
		<DownOutlined className={C.downIcon} />
	)

	return (
		<div className={C.body}>
				<Space size='small' wrap>
					<button className={C.leftRoundBtn+' '+C.red} />
					<button className={C.leftRoundBtn+' '+C.yellow} />
					<button className={C.leftRoundBtn+' '+C.green} />

					<Button shape="default" className={C.btns} icon={<LayoutOutlined />} 
						onClick={api.toggleSider}
						title="Показать/скрыть список заметок" />

					<Button shape="default" className={C.btns} icon={<CopyOutlined />}
						onClick={api.createNote} 
						title="Создать новую записку" />
					
					<Button shape="default" className={C.btns} icon={<DeleteOutlined />} 
						onClick={()=>api.showDeleteDialog(true)} 
						title="Удалить выбранную записку" />

					<Button shape="default" className={C.btns} icon={<EditOutlined />} 
						onClick={api.setEditedMode} 
						title="Редактировать записку" />

				</Space>

				<div className={C.finderInputDiv}>
					<Space size='small' wrap>
						<Space size='small'>
							<Input
								prefix={<><SearchOutlined />{downIcon}</>} 
								onChange={el => api.filter(el.target.value)}
								placeholder="Search"								
							/>
						</Space>
					</Space>
				</div>

<div className={C.hidden}>
	<Segmented options={segmentedOptions} key={"Segmented1"} onResize={()=>{return}} onResizeCapture={()=>{return}} />

	<Button shape="default" className={C.btns} icon={<><LockOutlined />{downIcon}</>} />
	<Button shape="default" className={C.btns} icon={<TableOutlined />} />
	<Button shape="default" className={C.btns} icon={<ClockCircleOutlined />} />
	<Button shape="default" className={C.btns} icon={<FontSizeOutlined />} />	

	<Space size='small'>
		<Button shape="default" className={C.btns} icon={<><PictureOutlined />{downIcon}</>} />
		<Button shape="default" className={C.btns} icon={<TeamOutlined />} />
		<Button shape="default" className={C.btns} icon={<UploadOutlined />} />
	</Space>
</div>
				

				<Modal
					title='Удалить заметку?'
					open={state.deleteDialogOpen}
					onOk={()=>api.deleteNote()}
					onCancel={()=>api.showDeleteDialog(false)}
					okText='Да'
					cancelText='Нет'
				>
				</Modal>
		</div>

		
	)
}