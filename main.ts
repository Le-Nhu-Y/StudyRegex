import {StudyRegex} from "./StudyRegex";

let studyRegex=new StudyRegex();
let validStudy:string[]=['C0318G','A0318H'];
let invalidStudy:string[]=['G0318C','H0318A'];

for(let study of validStudy){
    let isvalid:boolean=studyRegex.validate(study);
    console.log('Account is '+ study +' is valid '+isvalid);
}
for(let study of invalidStudy){
    let isvalid:boolean=studyRegex.validate(study);
    console.log('Account is '+ study +' is valid '+isvalid);
}