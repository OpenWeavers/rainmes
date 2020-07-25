const stationList = [
    {name: "Devaragudda", place: "Kalasa", years: [2019, 1028, 2017]},
    {name: "Bynekaadu", place: "Kalasa", years: [2019, 2017]},
    {name: "Mallarasana Gudda", place: "Hirebyle", years: [2019, 1028, 2017]},
    {name: "Mavinakere", place: "Kalasa", years: [2019, 1028, 2017]},
    {name: "Maidadi", place: "Marasanige", years: [2019, 1028, 2017]},
    {name: "Vatekolalu", place: "Kalasa", years: [2019, 1028]},
    {name: "S K Megal", place: "Samse", years: [2019, 1028, 2017]},
    {name: "Mathadathota", place: "Kalasa", years: [2019, 1028, 2017]},
    {name: "Kudremukha", place: "Samse", years: [2019, 1028, 2017]},
    {name: "Mertikaan", place: "Basarikatte", years: [2019, 1028, 2017]},
    {name: "Menasinahadya", place: "Horanadu", years: [2019, 1028, 2017]}
];

export default (req, res) => {
    res.statusCode = 200;
    res.json({
        data: stationList
    });
}