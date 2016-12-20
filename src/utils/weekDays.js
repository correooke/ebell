
export const weekDays = (day, isLongFormat = false) => {
	let l = isLongFormat;
	switch (day) {
		case 0: 
			return (l ? 'Domingo' : 'D');
		case 1: 
			return (l ? 'Lunes' : 'L');
		case 2: 
			return (l ? 'Martes' : 'Ma');
		case 3: 
			return (l ? 'Miércoles' : 'Mi');
		case 4: 
			return (l ? 'Jueves' : 'J');
		case 5: 
			return (l ? 'Viernes' : 'V');
		case 6: 
			return (l ? 'Sábado' : 'S');
		default:
			return '';
	}
}