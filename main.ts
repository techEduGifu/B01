//% weight=100 color=#A040E0 icon="\uf0eb" block="拡張ボード （GUB01）"
namespace GUB01 {
    //% blockId=GUBoard01_SwitchON block="スイッチをオンにする"
    //% weight=80 blockGap=8
    //% parts="GUBoard"
    export function SwitchON(): void {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    //% blockId=GUBoard01_SwitchOFF
    //% block="スイッチをオフにする"
    //% weight=80 blockGap=8
    //% parts="GUBoard"
    export function SwitchOFF(): void {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    //% blockId=GUBoard01_SwitchPWM
    //% block="スイッチを %dat ％にする"
    //% weight=80 blockGap=8
    //% parts="GUBoard"
    //% dat.min=0 dat.max=100
    export function SwitchPWM(dat: number): void {
        let val = (dat * 1023) / 100;
        pins.analogWritePin(AnalogPin.P1, val)
    }

    //% blockId=GUBoard01_Sensor
    //% block="人感センサが反応した"
    //% weight=80 blockGap=8
    //% parts="GUBoard"
    export function IsDetected(): boolean {
        if (pins.digitalReadPin(DigitalPin.P2) == 1)
            return true;
        return false;
    }
}