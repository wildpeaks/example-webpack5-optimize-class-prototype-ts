class Foo {}

// @ts-expect-error Because isFoo wasn't declared in the class
Foo.prototype.isFoo = true;

export { Foo }
