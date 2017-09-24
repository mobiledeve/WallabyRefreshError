/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
import {Test} from "../../TestHelper.spec";
(() => {
    //
    let spy = jasmine.createSpyObj;
    let every = Test.every;

    {
        class TestCase {
            data1: string;
            expected: string;
        }
        const testcases: TestCase[]= [
            {
                data1:"",
                expected:""
            },
        ];


        describe("", () => {
            every(testcases, (index: number, test: TestCase) => {
        

                it("should ", () => {
                    expect("").toEqual(test.expected);
                });
            });
        });
    }
})();