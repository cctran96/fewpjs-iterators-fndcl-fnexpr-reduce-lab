const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce((batteries, number) => {
    return batteries + number
}, 0)