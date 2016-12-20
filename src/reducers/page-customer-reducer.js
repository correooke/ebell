
export default function(state = [], action) {
	switch (action.type) {
		case 'MSG': 
			return [...state, action.payload];
	}

	return state;
}