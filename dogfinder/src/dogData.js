// src/dogData.js
const dogData = [
    {
        name: "Whiskey",
        age: 5,
        src: process.env.PUBLIC_URL + "/whiskey.jpg",
        facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
        ]
    },
    {
        name: "Duke",
        age: 3,
        src: process.env.PUBLIC_URL + "/duke.jpg",
        facts: [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
    },
    {
        name: "Perry",
        age: 4,
        src: process.env.PUBLIC_URL + "/perry.jpg",
        facts: [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
    },
    {
        name: "Tubby",
        age: 4,
        src: process.env.PUBLIC_URL + "/tubby.jpg",
        facts: [
            "Tubby is really stupid.",
            "Tubby does not like walks.",
            "Angelina used to hate Tubby, but claims not to anymore."
        ]
    }
];

export default dogData;
