/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Oct 2023
 * This program creates multiple colours on an RGB LED
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P14, 0)

input.onButtonPressed(Button.A, function () {
  // red
  basic.showString(' Red ')
  pins.digitalWritePin(DigitalPin.P16, 1)
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pause(1000)
  // green
  basic.showString('Green ')
  pins.digitalWritePin(DigitalPin.P16, 0)
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pause(1000)
  // blue
  basic.showString('Blue ')
  pins.digitalWritePin(DigitalPin.P16, 0)
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pause(1000)
  // yellow
  basic.showString('Yellow ')
  pins.digitalWritePin(DigitalPin.P16, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P14, 0)
  pause(1000)
  // magenta
  basic.showString('Magenta ')
  pins.digitalWritePin(DigitalPin.P16, 1)
  pins.digitalWritePin(DigitalPin.P15, 0)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pause(1000)
  // cyan
  basic.showString('Cyan ')
  pins.digitalWritePin(DigitalPin.P16, 0)
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pause(1000)
  // white
  basic.showString('White')
  pins.digitalWritePin(DigitalPin.P16, 1)
  pins.digitalWritePin(DigitalPin.P15, 1)
  pins.digitalWritePin(DigitalPin.P14, 1)
  pause(1000)
})
