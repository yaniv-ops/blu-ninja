import citiesList from '@/cities.json';


export async function fetchWeather() {
    
    let cities_dict = []
    let citieslat = []
    let citieslong = []
    const res = Object.keys(citiesList)
    for (let i=0;i<res.length;i++) {
        let citycorlat = citiesList[res[i]]['coordinates'][0]
        let citycorlong = citiesList[res[i]]['coordinates'][1]
        citieslat.push(citycorlat)
        citieslong.push(citycorlong)
    }

    try {
    
    let result
    result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${citieslat.toString()}&longitude=${citieslong.toString()}&current=temperature_2m&timezone=auto`,{
        cache:'no-store'
    })
    if (!result.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const json = await result.json();
    let configDate = json[0].current.time
    configDate = configDate.split('T')
    let date = configDate[0].split("-")
    const hour = configDate[1]
    date = [date[2],date[1]].join("-")
    let completedWeatherDict = {}

    for (let i=0;i<json.length;i++) {
        let city_details = {}
        city_details['city'] = res[i]
        city_details['temperature'] = json[i].current.temperature_2m
        cities_dict.push(city_details)
        
    }
    
    completedWeatherDict['date'] = date
    completedWeatherDict['hour'] = hour
    completedWeatherDict['forecast'] = cities_dict
    
    return completedWeatherDict
    } catch (e){
        return e.message
    }
    
    
}



