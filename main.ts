radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(TIRADA)
})
input.onGesture(Gesture.Shake, function () {
    TIRADA = randint(1, 3)
    if (TIRADA == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (TIRADA == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let TIRADA = 0
radio.setGroup(33)
