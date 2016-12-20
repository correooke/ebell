export default function(state = null, action) {
	switch (action.type) {
		case 'TENANT_DATA': {
			let getSite = (ID) => {
				if (action.payload && action.payload.Sites) {
					return action.payload.Sites.find( (s) => {
						return s.ID === ID;
					});
				} else {
					return null;
				}
			}	

			let getProvider = (ID) => {
				if (action.payload && action.payload.Providers) {
					return action.payload.Providers.find( (p) => {
						return p.ID === ID;
					});	
				} else {
					return null;
				}
			}				

			let getProviderSiteDefinitions = (ProviderID) => {
				if (action.payload && action.payload.Providers) {
					return action.payload.ProviderSiteDefinitions.filter( (psd) => {
						return psd.ProviderID === ProviderID;
					});
				} else {
					return null;
				}
			}

			let getShiftHour = (ID) => {
				if (action.payload && action.payload.ShiftHours) {
					return action.payload.ShiftHours.find( (s) => {
						return s.ID === ID;
					});
				} else {
					return null;
				}
			}

			return {
				...state, 
				...action.payload, 
				getSite, 
				getProvider, 
				getProviderSiteDefinitions,
				getShiftHour
			};
		}
	}

	return state;
}