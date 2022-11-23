import { useState, useEffect } from 'react'
import * as I from '../../store/storeInterfaces'
import defaultStore from '../../store/defaultStore'
import {getApi} from '../../api/getApi'
import {uploadApi} from '../../api/uploadApi'
import {deleteApi} from '../../api/deleteApi'
import { UseMain } from './main.props'

const useMain:UseMain = () => {    

    const [data, setData] = useState<number>(1)

    useEffect(() => {
        console.log('welcome to main')
    }, [])

    const sampleApi = () => {
        return
    }

    const state = {
        sample: data,
    }

    const api = {
        sampleApi:sampleApi,
    }

    return (
        [state, api]
    )
}
export default useMain