export function RethrowWithMessage(message: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const fn = descriptor.value;

    descriptor.value = async function (this: any, ...args: any[]) {
      try {
        return await fn.apply(this, args);
      } catch (err) {
        throw new Error(message);
      }
    };

    return descriptor;
  };
}
