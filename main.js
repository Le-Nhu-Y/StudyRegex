"use strict";
exports.__esModule = true;
var StudyRegex_1 = require("./StudyRegex");
var studyRegex = new StudyRegex_1.StudyRegex();
var validStudy = ['C0318G', 'A0318H'];
var invalidStudy = ['G0318C', 'H0318A'];
for (var _i = 0, validStudy_1 = validStudy; _i < validStudy_1.length; _i++) {
    var study = validStudy_1[_i];
    var isvalid = studyRegex.validate(study);
    console.log('Account is ' + study + ' is valid ' + isvalid);
}
for (var _a = 0, invalidStudy_1 = invalidStudy; _a < invalidStudy_1.length; _a++) {
    var study = invalidStudy_1[_a];
    var isvalid = studyRegex.validate(study);
    console.log('Account is ' + study + ' is valid ' + isvalid);
}
