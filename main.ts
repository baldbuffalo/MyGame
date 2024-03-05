let paused = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (paused < 0) {
        basic.clearScreen()
    } else {
        paused = 1
        basic.showString("paused")
    }
})
basic.forever(function () {
	
})
