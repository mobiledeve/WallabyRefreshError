  export interface Dictionary<T> {
    [email: string]: T;
  }

  export class Test {

    public static every = (testCases: any[], testFunction: Function) => {
      for (var index = 0; index < testCases.length; index++) {
        var testCase = testCases[index];
        testFunction(index, testCase);
      }
    };

    public static fake = <T>(func: Function, params: Dictionary<T>) => {
      (<any>func).and.callFake
        (
        (key: string) =>
          params[key]
        );
    };

    public static returnValue = <T>(func: (...params: any[]) => T, value: T) => {
      (<any>(func)).and.returnValue(value);
    }

    public static expectAll(...asserts: Function[]) {
      let result = "";
      for (let assert of asserts) {
        try {
          assert();
        } catch (e) {
          result += e.toString();
        }
      }

      if (result) {
        throw new Error(result);
      }
    }

  }
