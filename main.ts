radio.onReceivedNumber(function (receivedNumber) {
    direction = receivedNumber
    if (direction == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    } else {
        if (direction == 2) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
        } else {
            if (direction == 3) {
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    # . # . #
                    . . # . .
                    . . # . .
                    `)
            } else {
                basic.showLeds(`
                    . # # . .
                    # . . . .
                    . # # . .
                    . . . # .
                    . # # . .
                    `)
            }
        }
    }
})
let direction = 0
radio.setGroup(105)
direction = 0
let brzina = 60
basic.showLeds(`
    . # # . .
    # . . . .
    . # # . .
    . . . # .
    . # # . .
    `)
basic.forever(function () {
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0) {
        if (direction == 1) {
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eLeftMotor)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, brzina)
        } else {
            if (direction == 2) {
                DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eRightMotor)
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, brzina)
            } else {
                if (direction == 3) {
                    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, brzina)
                } else {
                    DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
                }
            }
        }
    } else {
        if ((DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 || DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 1) && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0) {
            direction = 0
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, brzina)
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eLeftMotor)
        } else {
            if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 1 || DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
                direction = 0
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, brzina)
                DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eRightMotor)
            } else {
                direction = 0
                DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, brzina)
            }
        }
    }
})
