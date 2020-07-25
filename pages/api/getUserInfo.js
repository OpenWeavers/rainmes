export default (req, res) => {
    let token = req.body.token;
    console.log(token);
    res.json({
        data: {
            stationId: "Devaragudda:Kalasa",
            years: [2019,2018],
            unit: "in"
        }
    })
}