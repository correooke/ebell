export default function(state = null, action) {

	switch (action.type) {
		case 'TABLE_DATA': {
			return action.payload;
		}
	}

	return state;

}