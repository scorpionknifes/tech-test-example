
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
    return (pin[0]+pin[1]*10+pin[2]*100+pin[3]*1000).toString()
}


function random(): number {
    return Math.floor(Math.random() * 9 + 1)
}
