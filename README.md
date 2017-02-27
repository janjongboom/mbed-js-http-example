# mbed-js-http-example

Example of doing HTTP calls using [mbed-js-http](https://github.com/armmbed/mbed-js-http) for [JavaScript on mbed](https://developer.mbed.org/javascript-on-mbed/).

## Build

1. Configure your connectivity method in `native_extras/mbed_lib.json` ([more info](https://github.com/armmbed/easy-connect)).
1. Run `npm install`.
1. Run `gulp --target=YOUR_TARGET_NAME`.
    * To find your target name, look at the [platforms](http://developer.mbed.org/platforms/) page for your development board.
1. Copy the `mbedos5.hex` or `mbedos5.bin` file from `build/out/YOUR_TARGET_NAME` onto your development board.
1. Attach a serial monitor (baud rate 115,200) to your device to see the output.

## HTTPS?

The underlying library supports HTTPS, but it's not implemented in mbed-js-http yet - mainly because the extra memory requirements for the TLS library. But should not be too hard.
