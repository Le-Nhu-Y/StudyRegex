"use strict";
exports.__esModule = true;
exports.StudyRegex = void 0;
var StudyRegex = /** @class */ (function () {
    function StudyRegex() {
        this.STUDY_REGEX = /^[CAP]+[0-9]{4}[GHIKLM]$/;
    }
    StudyRegex.prototype.validate = function (regex) {
        return this.STUDY_REGEX.test(regex);
    };
    return StudyRegex;
}());
exports.StudyRegex = StudyRegex;
