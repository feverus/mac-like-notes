import ky from 'ky';

import * as I from '../store/storeInterfaces';
import urlApi  from './urlApi';

export const uploadApi = async (data:any, id: string): Promise<any|string> => {
	try {
		const json:any = await ky.post(urlApi+"", {
			json: data
		}).json()
		return json
	} catch (error) {
        return (error as Error).message
    }
}