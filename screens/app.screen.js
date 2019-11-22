import { DEFAULT_TIMEOUT } from '../test/data/constant';
import Excel from '../test/data/excel';
export default class AppScreen {
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     * @return {boolean}
     */
    waitForIsShown(isShown = true) {
        return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
    }


    getCurrentDateYMD() {
        //Format of today: MM/DD/YYYY
        let today = ((new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo"}).split(','))[0]).split('/');
        let day = today[1];
        let month = today[0];
        let year = today[2];

        return year + '/' + month+ '/' + day;
    }

    getNextDateYMD() {
        //Format: YYYY/MM/DD
        let today = new Date();
        let day = "";
        if (today.getDate().toString().length === 1) {
            if (today.getDate() != 9)
                day = `0${today.getDate()}`;
            else
                day = `0${today.getDate() + 1}`;
        }
        else
            day = `${today.getDate() + 1}`;
        return today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + day;
    }

    getCurrentDateMD() {
        //Format: MM/DD
        let today = new Date();
        let day = "";;
        if (today.getDate().toString().length === 1) {
            day = `0${today.getDate()}`;
        }
        else
            day = `${today.getDate()}`;
        return (today.getMonth() + 1) + '/' + day;
    }

    getNextDateMD() {
        //Format: MM/DD
        let today = new Date();
        let day = "";
        if (today.getDate().toString().length === 1) {
            if (today.getDate() != 9)
                day = `0${today.getDate()}`;
            else
                day = `0${today.getDate() + 1}`;
        }
        else
            day = `${today.getDate() + 1}`;
        return (today.getMonth() + 1) + '/' + day;
    }

    random() {
        return Math.round(+new Date() / 1000);
    }

    isWeekday(date) {
        let res = date.split('/');
        let myDate = new Date();
        myDate.setFullYear(res[0]);
        myDate.setMonth(res[1] - 1);
        myDate.setDate(res[2]);

        if (myDate.getDay() == 6 || myDate.getDay() == 0)
            return false;
        return true;
    }

    isEvening(time) {
        let evening = ["18:00 - 19:00", "19:00 - 20:00", "20:00 - 20:30"];
        return evening.includes(time);
    }

    isHolidays(date) {
        let res = date.split('/');
        let d = res[2];
        let m = res[1];

        if ((m == 1 && d == 1) || (m == 1 && d == 14) || (m == 2 && d == 11) || (m == 3 && d == 21) || (m == 4 && d == 29) || (m == 5 && d == 1) || (m == 5 && d == 3) || (m == 5 && d == 4) || (m == 5 && d == 6) || (m == 7 && d == 15) ||
            (m == 8 && d == 12) || (m == 9 && d == 16) || (m == 9 && d == 23) || (m == 10 && d == 14) || (m == 10 && d == 22) || (m == 11 && d == 4) || (m == 11 && d == 23))
            return true;
        return false;
    }

    convertYMDToMD(date) {
        //format of date: yyyy/mm/dd
        let res = date.split('/');
        let day = res[2];
        let month = res[1];
        if (day.length === 1)
            day = `0${day}`;
        if (month.length === 1)
            month = `0${month}`;
        return month + '/' + day;
    }

    getTendays() {
        //This function returns the next ten days
        let tendays = [];
        let today = new Date();
        var tomorrow = new Date();
        for (let i = 1; i < 11; i++) {
            tendays[i] = new Date(tomorrow.setDate(today.getDate() + i)).getFullYear() + '/' + (new Date(tomorrow.setDate(today.getDate() + i)).getMonth() + 1) + '/' + new Date(tomorrow.setDate(today.getDate() + i)).getDate();
        }
        return tendays;
    }

    getPrice(date, time, sellingType) {
        let today = this.getCurrentDateYMD();

        let isWday = this.isWeekday(date);
        let isHoliday = this.isHolidays(date);

        if (isWday == true && isHoliday == false) {
            if (this.isEvening(time) == false) {
                switch (sellingType) {
                    case 'Adult':
                        return date == today ? Excel.Sellings[3]['Pricing_Weekdays_Daylight'] : Excel.Sellings[0]['Pricing_Weekdays_Daylight'];
                        break;
                    case 'Student':
                        return date == today ? Excel.Sellings[4]['Pricing_Weekdays_Daylight'] : Excel.Sellings[1]['Pricing_Weekdays_Daylight'];
                        break;
                    default:
                        return date == today ? Excel.Sellings[5]['Pricing_Weekdays_Daylight'] : Excel.Sellings[2]['Pricing_Weekdays_Daylight'];
                }
            }
            else {
                switch (sellingType) {
                    case 'Adult':
                        return date == today ? Excel.Sellings[3]['Pricing_Weekdays_Evening'] : Excel.Sellings[0]['Pricing_Weekdays_Evening'];
                        break;
                    case 'Student':
                        return date == today ? Excel.Sellings[4]['Pricing_Weekdays_Evening'] : Excel.Sellings[1]['Pricing_Weekdays_Evening'];
                        break;
                    default:
                        return date == today ? Excel.Sellings[5]['Pricing_Weekdays_Evening'] : Excel.Sellings[2]['Pricing_Weekdays_Evening'];
                }
            }
        }
        //This is Weekend or Holiday, price would be the same
        else {
            switch (sellingType) {
                case 'Adult':
                    return date == today ? Excel.Sellings[3]['Pricing_WeekendAndHolidays'] : Excel.Sellings[0]['Pricing_WeekendAndHolidays'];
                    break;
                case 'Student':
                    return date == today ? Excel.Sellings[4]['Pricing_WeekendAndHolidays'] : Excel.Sellings[1]['Pricing_WeekendAndHolidays'];
                    break;
                default:
                    return date == today ? Excel.Sellings[5]['Pricing_WeekendAndHolidays'] : Excel.Sellings[2]['Pricing_WeekendAndHolidays'];
            }
        }
    }
}
