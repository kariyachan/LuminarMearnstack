var weather=[
    {dist_name:"tsr",temp:25},
    {dist_name:"tvm",temp:26},
    {dist_name:"ekm",temp:29},
    {dist_name:"pkd",temp:30},
    {dist_name:"idk",temp:15},
    {dist_name:"mpm",temp:29},
    {dist_name:"tsr",temp:27},
    {dist_name:"tvm",temp:23},
    {dist_name:"ekm",temp:31},
    {dist_name:"pkd",temp:27},
    {dist_name:"idk",temp:17},
    {dist_name:"mpm",temp:25},
]//................................O/P = > district name and highest temp of the dist...........................
var max_weather={}
for(let data of weather){// {dist_name:"tsr",temp:25},

    let district=data.dist_name
    let cur_temp=data.temp
    if(! (district in max_weather))
    {
        max_weather[district]=cur_temp
    }
    else
    {
        let old_temp=max_weather[district] //max_weather[tsr]=25
        if(old_temp<cur_temp)
        {
            max_weather[district]=cur_temp
        }
    }
}
console.log(max_weather);

//sort the o/p based on temperature
//convert object into array ----objects.entries
Object.entries(max_weather).sort((o1,o2)=>o2[1]-o1[1]).forEach(data=>console.log(data))
