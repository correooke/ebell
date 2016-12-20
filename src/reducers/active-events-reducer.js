import {ACTIVE_EVENTS, ACTIVE_EVENTS_BY_PROVIDER} from './../actions';


export default function(state = [], action) {
	switch (action.type) {
		case ACTIVE_EVENTS: 
			return { new: action.payload, previous: state };
		case ACTIVE_EVENTS_BY_PROVIDER:
			return { ...state, byProvider: action.payload};
	}

	return state;
}