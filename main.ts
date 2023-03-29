let set_hand_to = false
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    set_hand_to = Math.randomBoolean()
    if (true) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
    }
    if (false) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
