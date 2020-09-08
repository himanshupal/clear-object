interface params {
	excludeNull?: Boolean;
	excludeFalse?: Boolean;
	excludeUndefined?: Boolean;
}

export const clearObject = (source: Object, options?: params, depth?: number) => {
	const { excludeNull, excludeUndefined, excludeFalse } = options || {};

	Object.keys(source).forEach((child) => {
		const depthDefined = depth !== undefined;

		if (depthDefined && !depth) return; // Keeps depth in check while looping

		const node = source[child];
		const isObject: Boolean = typeof node === `object` && node !== null; // Because typeof null is also object in JS

		if (isObject)
			if (!depthDefined) clearObject(node, options);
			else clearObject(node, options, depth - 1);

		if (excludeNull && node === null) delete source[child];

		if (excludeFalse && node === false) delete source[child];

		if (node === undefined)
			if (excludeUndefined === undefined) delete source[child];
			else excludeUndefined && delete source[child];

		if (isObject && !Object.keys(node).length) delete source[child]; // Deletes empty child
	});
};
