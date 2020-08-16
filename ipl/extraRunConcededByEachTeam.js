function extraRunConcededByEachTeam(matches, deliveries)
{
    let res={}
    const Id = (matches.filter(i=>i.season==2016)).map(i=>parseInt(i.id))
    const Deliveries = deliveries.filter(i=> Id.includes(parseInt(i.match_id)))
    for(let i in Deliveries)
    {
        const extras = Deliveries[i].extra_runs;
        const team = Deliveries[i].bowling_team
        if(res[team])
        {
            res[team]+=parseInt(extras)
        }
        else
        {
            res[team]=parseInt(extras)
        }
    }
    
    return res;
}
module.exports = extraRunConcededByEachTeam





