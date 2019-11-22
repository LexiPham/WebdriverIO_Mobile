import AppScreen from './app.screen';
import NativeAlert from '../helper/NativeAlert';
import Picker from '../helper/Picker';

const SELECTORS = {
    SELL_SCREEN: '*//android.widget.TextView[@text=\"Previous month\"]'
};

class SaleScreen extends AppScreen {
    constructor() {
        super(SELECTORS.SELL_SCREEN);
    }

    get addAdult() { return $('(*//android.widget.ImageView[@resource-id=\"app.naked_pos.stg:id/imgAdd\"])[1]') };
    get addStudent() { return $('(*//android.widget.ImageView[@resource-id=\"app.naked_pos.stg:id/imgAdd\"])[2]') };
    get addJunior() { return $('(*//android.widget.ImageView[@resource-id=\"app.naked_pos.stg:id/imgAdd\"])[3]') };

    get el() { return NativeAlert; }

    addTicket(type) {
        switch (type) {
            case 'Adult':
                this.addAdult.click();
                break;
            case 'Student':
                this.addStudent.click();
                break;
            default:
                this.addJunior.click();
        }
    }
}

export default new SaleScreen();
