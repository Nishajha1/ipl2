function economyBowlers(matches, deliveries)
{
    let res={}
    for(let i=2008; i<=2019; i++)
    {
        res[i]=calculate(matches, deliveries, i)
    }
    
    return res
}
function calculate(matches, deliveries, year)
{
    let total_runs={}, overs={}, eco;
    const Id = (matches.filter(i=>i.season==year)).map(i=>parseInt(i.id))
    const deliveriesId = deliveries.filter(i=> Id.includes(parseInt(i.match_id)))
    
    for(let i in deliveriesId)
    {
       
       const runs = deliveriesId[i].total_runs;
        const bowler = deliveriesId[i].bowler
        if(total_runs[bowler])
        {
            total_runs[bowler]+=parseInt(runs)
            if(parseInt(deliveriesId[i].ball)==6)
            {
                overs[bowler]+=1
            }
        }
        else
        {
            total_runs[bowler]=parseInt(runs)
            overs[bowler]=0
        }
    }
    for(let i in total_runs)
    {
        total_runs[i]=total_runs[i]/overs[i]
    }
    eco=(Object.entries(total_runs).sort((a,b)=>a[1]-b[1])).slice(0, 10);
    return eco;
}
module.exports = economyBowlers





