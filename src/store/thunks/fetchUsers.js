import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
	const response = await axios.get("http://localhost:3005/users");
	const { data } = response;

	// DEV ONLY
	await pause(3000);
	//

	return data;
});

// DEV ONLY
const pause = (duration) => {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
};
//

export { fetchUsers };
