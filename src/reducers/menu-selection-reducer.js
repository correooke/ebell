
export default function(state = {selection: 'home'}, action) {

	switch (action.type) {
		case 'WORKSPACE-SELECTED':
			return action.payload;
	}

	return state;

}