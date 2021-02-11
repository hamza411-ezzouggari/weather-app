async function GetValue(Country){
    var API="https://api.openweathermap.org/data/2.5/weather?&appid=744e9c9bfeff18dc06df1a282bc9e968&q="+Country;
    if(Country===''){
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position)})
            API="https://api.openweathermap.org/data/2.5/weather?&appid=744e9c9bfeff18dc06df1a282bc9e968&lat=51.5074&lon=-0.136439";
        }
        let res= await fetch(API,{mode:'cors'}).then((x) =>{return x.json()})
        .then((c) =>{
            if( c.hasOwnProperty('weather')){
                return c
            }else{
                return null;
            }
    }).catch((error)=>{
        return null;
    })
    return res;
    }
export default GetValue