// TypeScript Module for generating unique code in the format of
//    [XXXX XXXX XXXX XXXX XXXX]

export default function generate5unique(): string[]  {
    let pins = new Map()
    while (pins.size < 5){
        let pin = generated4pin()
        if (!pins.has(pin)){
            pins.set(pin, null)
        }
    }
    return Array.from( pins.keys() );
}

// Function to check each XXXX for consecutive repeats and consecutive ascending and descending
function generated4pin(): string {
    let pin: number[] = [];
    let consecutive = 0
    let positive = 0
    let lastvalue = -1
    while (pin.length < 4) {
        let value = random()
        if (pin[pin.length - 1] !== value) {
            if (Math.abs(value - lastvalue) === 1 && positive !== (value - lastvalue)){
                positive = value - lastvalue
                consecutive = 0
            }
            consecutive = (Math.abs(value - lastvalue) === 1) ? consecutive+1 : 0
            if (consecutive < 2) {
                pin.push(value)
                lastvalue = value
            }
        }
    }
    // add 0 if the number has a zero in the front
    return (pin[3]===0? "0": "") +(pin[0]+pin[1]*10+pin[2]*100+pin[3]*1000).toString()
}

// Generate random number 0-9
function random(): number {
    return Math.floor(Math.random() * 10)
}
