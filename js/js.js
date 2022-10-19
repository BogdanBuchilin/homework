const colors = ['antiquewhite', 'blue', 'red', 'greenyellow'];
const cars = [{
        id: 1,
        name: "car 1",
        color: "antiquewhite"
    },
    {
        id: 2,
        name: "car 2",
        color: "blue"
    },
    {
        id: 3,
        name: "car 3",
        color: "red"
    },
    {
        id: 4,
        name: "car 4",
        color: "greenyellow"
    },
];
let filtered = cars.filter(e => e.color.filter(c => colors.includes(c)).length > 0)

console.log(requiredArray);