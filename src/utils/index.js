export const addTypeNameArr = (arr, typename) => {
	const result = arr.map(elem => ({
		...elem,
		__typename: typename,
	}));

	return result;
};

export const addTypeNameSingle = (obj, typename) => {
	return {
		...obj,
		__typename: typename,
	};
};

export const handleError = (message, code, typename) => {
	return {
		__typename: typename,
		message,
		code,
	};
};
