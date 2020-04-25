function identity<T>(arg: T): T {
	return arg;
}

let output = identity<string>("myString");

// veya

let output = identity("myString");
