# Electron Web Worker Example

Bare minimal example that shows how terminating a web worker does not release its ram in some electron release:
- 8.4.0 -> OK: web workers are cleared properly
- 8.4.1 -> NOT OK: web wokers are not cleared properly and memory is not released
- 9.1.0 -> OK
- 9.2.0 -> NOT OK

## Run

To run the example:

```sh
npm install
npm start
```