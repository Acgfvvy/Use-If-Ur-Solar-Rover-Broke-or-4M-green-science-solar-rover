basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    225
    )
    if (input.lightLevel() > 128) {
        servos.P0.run(50)
    } else {
        servos.P0.run(0)
    }
})
