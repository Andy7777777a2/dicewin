input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showNumber(4)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(5)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(6)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(2)
})
basic.forever(function () {
	
})
