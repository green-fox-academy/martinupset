var car = {
    model:'Benz',
    color:'black',
    year:1886,
    doors:0,
    historical:true
};
var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower:{
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}

// without es6
var model = car.model
var color = car.color
var year = car.year
var doors = car.doors
var historical = car.historical

var {type1, monitor:{color : color1, size : size1, HDMI : HDMI1, VGA : VGA1 }, tower:{color : color2, CPU : CPU2, memory : memory2, SSD : SSD2}} = computer

console.log(HDMI1)