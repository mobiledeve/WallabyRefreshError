System.register(["../../TestHelper.spec"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TestHelper_spec_1;
    return {
        setters: [
            function (TestHelper_spec_1_1) {
                TestHelper_spec_1 = TestHelper_spec_1_1;
            }
        ],
        execute: function () {
            (function () {
                //
                var spy = jasmine.createSpyObj;
                var every = TestHelper_spec_1.Test.every;
                {
                    var TestCase = (function () {
                        function TestCase() {
                        }
                        return TestCase;
                    }());
                    var testcases_1 = [
                        {
                            data1: "",
                            expected: ""
                        },
                    ];
                    describe("", function () {
                        every(testcases_1, function (index, test) {
                            it("should ", function () {
                                expect("").toEqual(test.expected);
                            });
                        });
                    });
                }
            })();
        }
    };
});
