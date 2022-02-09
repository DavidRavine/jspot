class Test
{
    constructor() {
        this.lang = new Language();
    }

    _blablub() {
        day = 5;
        twoDigitDay = "02";
        let ordin = this.lang._p("%o", day, twoDigitDay);
        greeting = this.lang.__("24-Hour mode");
        return this.lang._x("%D, %o of %M, %y", "Date Format");
    }
}