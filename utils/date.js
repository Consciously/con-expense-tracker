export const getFormattedDate = date => {
	// return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	return date.toISOString().slice(0, 10);
};
