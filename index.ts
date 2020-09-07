interface params {
	excludeNull?: Boolean;
	excludeFalse?: Boolean;
	excludeUndefined?: Boolean;
}

const filterObject = (source: Object, options?: params, depth?: number) => {
	const { excludeNull, excludeUndefined, excludeFalse } = options || {};

	const parent = source; // Copies object to a new variable;

	Object.keys(parent).forEach((child) => {
		const depthDefined = depth !== undefined;

		if (depthDefined && !depth) return; // Keeps depth in check while looping

		const node = parent[child];
		const isObject: Boolean = typeof node === `object` && node !== null;

		if (isObject)
			if (!depthDefined) filterObject(node, options);
			else filterObject(node, options, depth - 1);

		if (excludeNull && node === null) delete parent[child];

		if (excludeFalse && node === false) delete parent[child];

		if (node === undefined)
			if (excludeUndefined === undefined) delete parent[child];
			else excludeUndefined && delete parent[child];

		if (isObject && !Object.keys(node).length) delete parent[child]; // Deletes empty child
	});

	return parent;
};

export default filterObject;
