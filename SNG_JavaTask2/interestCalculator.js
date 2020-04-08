var input = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
]
// To calculate simple interest, we need one more variable which is rate
// The output should be an array of variables needed to compute interest including rate.


function determineRate(input) {
    var result = []
    for (var item of input) {
        var rate;
        if (item.principal >= 2500 && 1 < item.time && item.time < 3) {
            rate = 3;
        } else if (item.principal >= 2500 && item.time >= 3) {
            rate = 4;
        } else if (item.principal < 2500 || item.time <= 1) {
            rate = 1;
        } else {
            rate = 1;
        }
        var interest = (item.principal * item.time * rate) / 100

        var interestData = {
            principal: item.principal,
            time: item.time,
            rate: rate,
            interest: interest
        };
        result.push(interestData);
    }

    console.log(result)

    return interestData;

}
var output = determineRate(input);