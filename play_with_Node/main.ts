function Log(
  target: any,
  propertyKey: PropertyKey,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `[LOG]: Calling function "${String(propertyKey)}" with inputs:`,
      args,
    );

    const result = originalMethod.apply(this, args);

    console.log(`[LOG]: Result was:`, result);
    return result;
  };
}

class SuperCalculator {
  @Log
  add(a: number, b: number) {
    return a + b;
  }
  @Log
  multiply(a: number, b: number) {
    return a * b;
  }
}

const calculator = new SuperCalculator();
calculator.add(2, 3);
calculator.multiply(4, 5);

function LogClass(target: string) {}
