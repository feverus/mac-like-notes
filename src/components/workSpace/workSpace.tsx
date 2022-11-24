import dataStore from '../../store/dataStore'
import useWorkSpace from './workSpace.service'
import SimpleMDE from "react-simplemde-editor"
import { marked } from 'marked';
import { Input, Space, Typography } from 'antd';
import "easymde/dist/easymde.min.css"
import C from './workSpace.module.scss'

const { Title, Text } = Typography

export function WorkSpace() {
	const [state, api] = useWorkSpace()

	let message = (dataStore.filterText==='')?
		'База заметок пуста':
		'Ничего не найдено'

	if (state.note===undefined) 
		return (
			<Space>
				<Title level={2} className={C.delay}>{message}</Title>
			</Space>
		)
		
	return (
		<Space direction='vertical' className={C.body}>
			<Title level={3} className={C.center}>
				{state.dateToShow}
			</Title>
			{(dataStore.editedMode) ?
			<>		
				<Input addonBefore="Заголовок"
					value={state.note.title}
					onChange={(el) => api.editNote('title', el.target.value)}
				/>
				<SimpleMDE
					value={state.note.body}
					onChange={(value: string) => api.editNote('body', value)}
				/>
			</>	
			:
			<>
				<Text strong className={C.title}>
					{state.note.title}
				</Text>
				<div dangerouslySetInnerHTML={{__html: marked.parse(state.note.body)}} />
			</>
			}
		</Space>
	)
}