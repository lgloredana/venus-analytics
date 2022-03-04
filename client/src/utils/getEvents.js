import axiosInstance from "../middleware/axios";
import { userName } from "../constants";

const getEvent = async () => {
	try {
		const params = {};
		const response = await axiosInstance.get('events', params)
        const { data } = response.data;
		console.log(data)
		return data;
	} catch(err) {
		console.log(err)
	}
};

export default getEvent;