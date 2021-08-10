export function autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFc = originalMethod.bind(this);
      return boundFc;
    },
  };
  return adjDescriptor;
}
