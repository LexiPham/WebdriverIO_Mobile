# Notes

## Installation

    [Prerequisites]
        NodeJs: https://nodejs.org/en/download/
        JDK: 
        Appium:
        Android studio:
        Xcode:

    [Steps]:
    1. Set JAVA_HOME & ANDROID_HOME paths
        open file ~/.profile and paste below:

        export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_231.jdk/Contents/Home
        export PATH=${JAVA_HOME}/bin:$PATH
        export ANDROID_HOME=/Users/${USER}/Library/Android/sdk
        export PATH=$ANDROID_HOME/platform-tools:$PATH
        export PATH=$ANDROID_HOME/tools:$PATH
        export PATH=$ANDROID_HOME/tools/bin:$PATH
        export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools/adb:$ANDROID_HOME/build-tools:$JAVA_HOME/bin
        # This one is used for the `start.android.emulator` script
        export emulator=/Users/${USER}/Library/Android/sdk/emulator

    2. Restart
    3. Install packages
        npm install appium-doctor
        npm install appium
    4. Run appium doctor to check
        appium-doctor
    5. Get npm packages 
        npm install
    6. Run commands
        - for android: npm run android.app

## Folder structure

    - config: contains all config files

    - helper: contains utility.

    - screens: contains screen object.
        
    - tests:
        - data: contains constant, excel file and pdf file
        - specs: contains specification
    
    > It is advised to keep this structure.

## Commands to run

    #Run android native app
    npm run android.app

    #Run android browser
    npm run android.browser

    #Run ios native app
    npm run ios.app

    #Run ios browser
    npm run ios.browser

## Spec status

1. [Done]
    - app.pos.spec.js: 
        [Description] this spec will make an order
        [Input] 
        [Output] 
        [TestCases]
            . Order_01: order 1 item
            . Order_02: order n items
        [Run]
            npm run android.app
2. [Implementing]
    - TBD

3. [Pending]
    - Business logic
    - Test cases
    - Discount



