export class StudyRegex{
    private STUDY_REGEX:RegExp=/^[CAP]+[0-9]{4}[GHIKLM]$/;
    public validate(regex:string):boolean{
        return this.STUDY_REGEX.test(regex)
    }
}