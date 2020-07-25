const totalStats = [
    {value:200,unit:"in",description:"Maximum Annual Rainfall"},
    {value:"Devaragudda", description: "Maximum Rainfall Recording Station"},
    {value:2018, description:"Year of Maximum Rainfall"},
    {value:12, description:"Stations"},
    {value:2, unit:"yrs", description:"Age of Oldest Data"}
];

export default async (req, res) => {
    res.statusCode = 200;
    res.json({
        data: totalStats
    });
}