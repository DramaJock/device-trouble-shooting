input.onButtonPressed(Button.A, function () {
    basic.showString("A Pressed")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B Pressed")
})
input.onGesture(Gesture.Shake, function () {
    RPS[randint(0, 2)].showImage(0)
})
let RPS: Image[] = []
RPS = [images.createImage(`
    . . . . .
    . # # . .
    # # # # .
    # # # # #
    # # # # .
    `), images.createImage(`
    . # # # .
    # # # # .
    # # # # .
    # # # # .
    # # # # .
    `), images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    # # . # #
    # # . # #
    `)]
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.showArrow(ArrowNames.North)
basic.pause(100)
basic.showArrow(ArrowNames.South)
basic.pause(500)
basic.showArrow(ArrowNames.East)
basic.pause(100)
basic.showArrow(ArrowNames.West)
basic.forever(function () {
	
})
