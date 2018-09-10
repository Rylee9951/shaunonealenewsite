import axios from 'axios'
import store from '../store'

export function getEvents() {
	axios.get('/api/events').then(resp => {
		store.dispatch({
			type: 'GET_EVENTS',
			payload: resp.data
		})
	})
}