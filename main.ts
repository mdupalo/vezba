let brojac = 0
basic.forever(function () {
    if (brojac % 10 == 0) {
        led.toggle(0, 0)
    }
    if (brojac % 5 == 0) {
        led.toggle(2, 2)
    }
    if (brojac % 10 == 0) {
        led.toggle(4, 4)
    }
    brojac += 1
    basic.pause(100)
})
