import axiosInstance from "../middleware/axios";
import { userName } from "../constants";

const postEvent = async ({ eventType, eventName }) => {
	try {
		const payload = {
			eventType,
			eventName,
			eventResponse: 'response',
			userId: '123' //replace with userName when be is ready
		};
		const response = await axiosInstance.post('events', payload)
		const { data } = response.data;
		console.log(data);
		return data;
	} catch(err) {
		console.log(err)
	}
};

export default postEvent;