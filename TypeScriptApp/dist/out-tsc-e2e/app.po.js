"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Page = (function () {
    function Page() {
    }
    Page.prototype.navigateTo = function (destination) {
        return protractor_1.browser.get(destination);
    };
    Page.prototype.getTitle = function () {
        return protractor_1.browser.getTitle();
    };
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=app.po.js.map