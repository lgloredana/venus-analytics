import axiosInstance from "../middleware/axios";
import { userName } from "../constants";

const getEvent = async (params={}) => {
	try {
	
		const response = await axiosInstance.get('events/analytics', {params})
        const { data } = response.data;
		console.log(data)
		return data;
	} catch(err) {
		console.log(err)
	}
};

export default getEvent;