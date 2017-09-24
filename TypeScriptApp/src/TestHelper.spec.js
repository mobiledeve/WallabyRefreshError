System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Test;
    return {
        setters: [],
        execute: function () {
            Test = (function () {
                function Test() {
                }
                Test.expectAll = function () {
                    var asserts = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        asserts[_i] = arguments[_i];
                    }
                    var result = "";
                    for (var _a = 0, asserts_1 = asserts; _a < asserts_1.length; _a++) {
                        var assert = asserts_1[_a];
                        try {
                            assert();
                        }
                        catch (e) {
                            result += e.toString();
                        }
                    }
                    if (result) {
                        throw new Error(result);
                    }
                };
                return Test;
            }());
            Test.every = function (testCases, testFunction) {
                for (var index = 0; index < testCases.length; index++) {
                    var testCase = testCases[index];
                    testFunction(index, testCase);
                }
            };
            Test.fake = function (func, params) {
                func.and.callFake(function (key) {
                    return params[key];
                });
            };
            Test.returnValue = function (func, value) {
                (func).and.returnValue(value);
            };
            exports_1("Test", Test);
        }
    };
});
