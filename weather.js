var apikey = 'fc58b4e531aa4fd0c4149bb17c0af559';
function getdat()
{
    var input = document.getElementById('city').value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>
        {
            console.log(data);
            document.getElementById('city1').innerText = data.name;
            document.getElementById('city1').innerText += ","+ data.sys.country;
            document.getElementById('temp').innerText = data.main.temp;
            console.log( data.name,data.main.temp,data.sys.country);
            var today = new Date();
            var dd = String(today.getDate()).padStart(2,'0');
            var mm = String(today.getMonth() +1).padStart(2,'0');
            var year = today.getFullYear();
            console.log( mm + '/' + dd + '/' + year );
            document.getElementById('date').innerText = mm + '/' + dd + '/' + year ;
            data.weather.map((ele)=>{
                document.getElementById('weather').innerText += ele.main + "\n";
            })
            document.getElementById('hi-low').innerText = data.main.temp_max + '°c' + '/' +data.main.temp_min + '°c' ;
        })
        .catch((error) =>
        {
        console.log(error);
        });
}