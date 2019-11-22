const excelToJson = require('convert-excel-to-json');

export default excelToJson({
    sourceFile: './test/data/Excel.xlsx',
    sheets:[{
        name: 'Product',
        header:{
            rows: 1
        },
        columnToKey: {
        	A: 'Product name',
            B: 'Start scanning on',
            C: 'End scanning on',
            D: 'Release date',
            E: 'Tour pediod from',
            F: 'Tour pediod to',
            G: 'Start selling on',
            H: 'End selling on',
            I: 'Period from'
        }
    },{
        name: 'Events',
        header:{
            rows: 1
        },
        columnToKey: {
            A: 'Venue Name',
            B: 'Seat Type',
            C: 'Price',
            D: 'Stock',
            E: 'Pediod From',
            F: 'Pediod To'
        }
    },{
        name: 'Sellings',
        header:{
            rows: 1
        },
        columnToKey: {
            A: 'Position',
            B: 'Selling Name',
            C: 'Pricing_Weekdays_Daylight',
            D: 'Pricing_Weekdays_Evening',
            E: 'Pricing_WeekendAndHolidays',
            F: 'Start Selling Date',
            G: 'SSD_Hour',
            H: 'SSD_Minute',
            I: 'End Selling Date',
            J: 'ESD_Hour',
            K: 'ESD_Minute',
            L: 'Selling Name Japan'
        }
    },{
        name: 'EventsTime_Weekdays_Daylight',
        header:{
            rows: 1
        },
        columnToKey: {
        	A: 'Time 1',
            B: 'Time 2',
            C: 'Time 3',
            D: 'Time 4'
        }
    },{
        name: 'EventsTime_Weekdays_Evening',
        header:{
            rows: 1
        },
        columnToKey: {
        	A: 'Time 1',
            B: 'Time 2',
            C: 'Time 3',
            D: 'Time 4'
        }
    },{
        name: 'EventsTime_WeekendAndHolidays',
        header:{
            rows: 1
        },
        columnToKey: {
        	A: 'Time 1',
            B: 'Time 2',
            C: 'Time 3',
            D: 'Time 4'
        }
    },{
        name: 'BuyTickets',
        header:{
            rows: 1
        },
        columnToKey: {
        	A: 'Date',
            B: 'Time',
            C: 'OrderStatus'
        }
    },{
        name: 'Tariff',
        header:{
            rows: 1
        },
        columnToKey: {
        	D: '10:00 - 11:00',
            E: '11:00 - 12:00',
            F: '12:00 - 13:00',
            G: '13:00 - 14:00',
            H: '14:00 - 15:00',
            I: '15:00 - 16:00',
            J: '16:00 - 17:00',
            K: '17:00 - 18:00',
            L: '18:00 - 19:00',
            M: '19:00 - 20:00',
            N: '20:00 - 20:30'
        }
    }]
});