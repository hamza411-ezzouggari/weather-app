    async function GetValue(Country){
            var API="http://api.openweathermap.org/data/2.5/weather?&appid=744e9c9bfeff18dc06df1a282bc9e968&q="+Country;
            if(Country===''){
                var latitude='';
                var longitude='';
            navigator.geolocation.getCurrentPosition(function(position){
                    latitude=position.coords.latitude;
                    longitude=position.coords.longitude;
            });
            console.log("hamza")
            console.log(latitude)
            API="http://api.openweathermap.org/data/2.5/weather?&appid=c9c723c8bdf30ec51fd543e0080323df&lat="+latitude+"&lon="+longitude;
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