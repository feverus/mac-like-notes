import ky from 'ky';

import * as I from '../store/storeInterfaces';
import urlApi  from './urlApi';

export const deleteApi = async (): Promise<any|string> => {
	try {
		const json:any = await ky.delete(urlApi+"").json()
		return json
	} catch (error) {
        return (error as Error).message
    }
}