import AppScreen from './app.screen';
import NativeAlert from '../helper/NativeAlert';
import Picker from '../helper/Picker';

const SELECTORS = {
    DENY_SCREEN_PINNED: '*//android.widget.Button[@text=\"NO, THANKS\"]',
};

class InitScreen extends AppScreen {
    constructor () {
        super(SELECTORS.DENY_SCREEN_PINNED);
    }

    get selectDropdown () { return $('*//android.widget.Spinner[@resource-id=\"app.naked_pos.stg:id/sp_mode\"]');}
    get product () { return $('(*//android.widget.EditText)[2]')};
    get dates () { return $('(*//android.widget.EditText)[3]')};
    get selectPrinter () { return $('*//android.widget.CheckedTextView[@text=\"BT:STAR mPOP-B0078\"]')};
    get el  () { return NativeAlert; } 

    selectMode (value){
        this.selectDropdown.click();
        Picker._setAndroidValue(value);
    }

    setProduct (value){
        this.product.setValue(value);
    }

    connectPrinter(){
        this.el.pressText('Printer');
        this.selectPrinter.click();
    }

    setDates (value){
        this.dates.setValue(value);
    }

}

export default new InitScreen();
