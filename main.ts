let lightsOn = 0
input.onSound(DetectedSound.Loud, function () {
    if (lightsOn) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        lightsOn = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        lightsOn = 1
    }
})
basic.forever(function () {
	
})
