import NativeAlert from '../../helper/NativeAlert'
import Gestures from '../../helper/Gestures'
import SaleScreen from '../../screens/sale.screen'
import InitScreen from '../../screens/init.screen'
import data from '../data/constant'

let productId = 64
describe('POS - Buy a ticket on current date and pay by cash', () => {
    it('should close screen pinned', () => {
        NativeAlert.pressButton('NO THANKS')
    })
    it('should select Counter Mode', () => {
        InitScreen.selectMode('Counter mode')
    })

    it('should enter product', () => {
        InitScreen.setProduct(productId)
    })

    it('should connect printer', () => {
        InitScreen.connectPrinter()
    })

    it('should select curent date', () => {
        InitScreen.setDates(SaleScreen.getCurrentDateYMD())
    })

    it('should click Next', () => {
        InitScreen.el.pressButton('Next')
    })

    it('should select date and time for the tickets', () => {
        SaleScreen.el.pressText(SaleScreen.getCurrentDateMD())
    })

    it('should be able to select a ticket', () => {
        SaleScreen.el.pressText('Select a ticket')
    })

    it('should click to add a ticket', () => {
        SaleScreen.addTicket()
    })

    it('should proceed to payment', () => {
        SaleScreen.el.pressText('PROCEED TO PAYMENT')
    })

    it('should proceed to payment', () => {
        SaleScreen.el.pressText('PROCEED TO PAYMENT')
    })

    it('should select Cash', () => {
        SaleScreen.el.pressText('Cash')
    })

    it('should select Print Ticket', () => {
        SaleScreen.el.pressText('PRINT TICKET')
        SaleScreen.el.pressText('OK')
        driver.pause(20000)
    })
})

describe('POS - Buy a ticket on current date and pay by cash', () => {
    it('should complete Init screen', () => {
        driver.pause(3000)
        NativeAlert.pressButton('NO, THANKS')
        InitScreen.selectMode('Counter mode')
        InitScreen.setProduct(productId)
        InitScreen.connectPrinter()
        InitScreen.setDates(InitScreen.getCurrentDateYMD())
        InitScreen.el.pressButton('Next')
    })

    it('should complete Sale screen', () => {
        SaleScreen.el.pressText(InitScreen.getCurrentDateMD())
        SaleScreen.el.pressText('Select a ticket')
        SaleScreen.addTicket()
        SaleScreen.el.pressText('PROCEED TO PAYMENT')
        SaleScreen.el.pressText('PROCEED TO PAYMENT')
        SaleScreen.el.pressText('Cash')
        SaleScreen.el.pressText('PRINT TICKET')
        SaleScreen.el.pressText('OK')
        driver.pause(20000)
    })
})

describe('POS - Buy 100 tickets in advanced', () => {
    it('should complete Init screen', () => {
        driver.pause(2000)
        NativeAlert.pressButton('NO, THANKS')
        InitScreen.selectMode('Counter mode')
        InitScreen.setProduct(productId)
        InitScreen.connectPrinter()
        // InitScreen.setDates(InitScreen.getCurrentDateYMD())
        InitScreen.el.pressButton('Next')
    })

    it('should complete Sale screen', () => {
        SaleScreen.getTendays('YMD').forEach((date, index) => {
            console.log('What do you want? ' + $(`*//android.widget.TextView[@text="${SaleScreen.convertYMDToMD(date)}"]`).isExisting())
            if ($(`*//android.widget.TextView[@text="${SaleScreen.convertYMDToMD(date)}"]`).isExisting() === false) {
                $('(*//android.widget.ImageView[@resource-id=\"app.naked_pos.stg:id/iv_next_selling\"])[1]').click()
            }
            SaleScreen.el.pressText(SaleScreen.convertYMDToMD(date))

            console.log('Event date: ' + date)
            let total = 0
            data.inputs.forEach((input) => {
                console.log('Event time: ' + input.Time)
                $(`(*//android.support.v7.widget.RecyclerView[@resource-id=\"app.naked_pos.stg:id/recyclerTimeTour\"]//android.widget.TextView[@text="${input.Time}"])`).click()
                SaleScreen.addTicket('Adult')
                // SaleScreen.addTicket('Student')
                // SaleScreen.addTicket('Junior')
                $(`(*//android.widget.TextView[@text="Close"])`).click()
                console.log('Adult ticket price: ' + SaleScreen.getPrice(date, input.Time, 'Adult'))
                console.log('Student ticket price: ' + SaleScreen.getPrice(date, input.Time, 'Student'))
                console.log('Junior ticket price: ' + SaleScreen.getPrice(date, input.Time, 'Junior'))
                let price = SaleScreen.getPrice(date, input.Time, 'Adult') + SaleScreen.getPrice(date, input.Time, 'Student') + SaleScreen.getPrice(date, input.Time, 'Junior')

                total += price
                console.log(total)
            })
        })
        SaleScreen.el.pressText('PROCEED TO PAYMENT')
        SaleScreen.el.pressText('PROCEED TO PAYMENT')
        SaleScreen.el.pressText('Cash')
        SaleScreen.el.pressText('PRINT TICKET')
        SaleScreen.el.pressText('OK')
        driver.pause(2000000000)
    })
})