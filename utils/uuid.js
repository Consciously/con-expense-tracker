export const uuid = () => {
	return new Date().toISOString() + Math.random().toString();
};
