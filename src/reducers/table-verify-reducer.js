export default function(state = null, action) {

	switch (action.type) {
		case 'TABLE_VERIFY': {
			return action.payload;
		}
	}

	return state;

}