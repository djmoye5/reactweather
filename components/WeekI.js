import React from 'react';
import ReactDOM from 'react-dom';



// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const divStyle = {
    // width:'100%',

    // color: '#000066',
    color:'white'
}
const h1Style = {
    padding: '30px',
    fontSize: '46px',
    backgroundColor:'#66ccff',
}
const h1day ={
    color:'orange',
}
const left2 ={
    position:'relative',
    right: '-200px',
    top: '199px',
}
 const h1Days = {
     padding: '0  30px',
     fontSize: '46px',
     
     
}
 
 const left = {
     float: 'left',
     backgroundSize: '100% 100%',
     backgroundPosition: 'center',
     backgroundRepeat:'no-repeat',
     backgroundColor:'#66ccff',
     width:'50%',
     height: '800px'
 }
 const left1 = {
     float: 'left',
     backgroundSize: '100% 100%',
     backgroundPosition: 'center',
     backgroundRepeat:'no-repeat',
     backgroundColor:'white',
     width:'50%',
     height: '800px'
 }
 const OpenWeatherMapHelper = require("openweathermap-node");
const helper = new OpenWeatherMapHelper({
    APPID: '6bc3539d29fcd7d30bde744c911c7e97',
    units:"kelvin"
});

class WeekI extends React.Component{ 
    constructor(props) {
        super(props);

        this.state = {
            dates:props.dates ,
            mins :props.mins,
            maxs :props.maxs,
            icons :props.icons,
            dayNum :props.dayNum,

        }
        this.getWeatherData();
    }
    getWeatherData(){
        let dates = this.state.dates;
        let mins = this.state.mins;
        let maxs = this.state.maxs;
        let icons = this.state.icons;
        let dayNum = this.state.dayNum;



        dates = new Array();
        mins = new Array();
        maxs = new Array();
        icons = new Array();
        
        
        helper.getThreeHourForecastByCityName("Miami", (err,threeHourForecast) => {
            if (err){
                console.log(err);
        
            }else{
                for (let i=0;i < threeHourForecast.list.length; i++ ) {
                    dates.push(threeHourForecast.list[i].dt_txt);
                    mins.push(Math.floor(temperatureConverter(threeHourForecast.list[i].main.temp_min)));
                    maxs.push(Math.floor(temperatureConverter(threeHourForecast.list[i].main.temp_max)));
                    icons.push(threeHourForecast.list[i].weather[0].icon);
                }
            }
            console.log(dates.length);
            console.log(mins.length);
            console.log(maxs.length);
            console.log(icons);


            this.setState({dates});
            this.setState({mins});
            this.setState({maxs});
            this.setState({icons});

            var today = new Date();
            dayNum = today.getDay();
            this.setState({dayNum});
        });


        
        function temperatureConverter(valNum) {
            valNum = parseFloat(valNum);
            return((valNum-273.15)*1.8)+32;
        }
    }

    DrawMonday = () =>{
        var day = document.getElementById("day");
        var pic = document.getElementById("pic");
        var temp = document.getElementById("temp");
        var index = ((1 - this.state.dayNum - 1) * 8) + 3;
        index = index > 39 || index < 0 ? 3 : index;

        day.innerHTML = "Monday";
        pic.src = "./images/" + this.state.icons[index] +".jpg";
        temp.innerHTML = (this.state.mins[index] + "&deg;/" + this.state.maxs[index] + "&deg;");
    }
    DrawTuesday = () =>{
        var day = document.getElementById("day");
        var pic = document.getElementById("pic");
        pic.style.width = "250px";
        var temp = document.getElementById("temp");
        var index = ((2 - this.state.dayNum - 1) * 8) + 3;
        index = index > 39 || index < 0 ? 3 : index;
        index = 0;

        day.innerHTML = "Tuesday";
        pic.src = "./images/" + this.state.icons[index] +".jpg";
        temp.innerHTML = (this.state.mins[index] + "&deg;/" + this.state.maxs[index] + "&deg;");
    }
    DrawWednesday = () =>{
        var day = document.getElementById("day");
        var pic = document.getElementById("pic");
        var temp = document.getElementById("temp");
        var index = ((3 - this.state.dayNum - 1) * 8) + 3;
        index = index > 39 || index < 0 ? 3 : index;
        

        day.innerHTML = "Wednesday";
        pic.src = "./images/" + this.state.icons[index] +".jpg";
        temp.innerHTML = (this.state.mins[index] + "&deg;/" + this.state.maxs[index] + "&deg;");
    }
    DrawThursday = () =>{
        var day = document.getElementById("day");
        var pic = document.getElementById("pic");
        var temp = document.getElementById("temp");
        var index = ((4 - this.state.dayNum - 1) * 8) + 3;
        index = index > 39 || index < 0 ? 3 : index;
        


        day.innerHTML = "Thursday";
        pic.src = "./images/" + this.state.icons[index] +".jpg";
        temp.innerHTML = (this.state.mins[index] + "&deg;/" + this.state.maxs[index] + "&deg;"); 
    }
    DrawFriday = () =>{
        var day = document.getElementById("day");
        var pic = document.getElementById("pic");
        var temp = document.getElementById("temp");
        var index = ((5 - this.state.dayNum - 1) * 8) + 3;
        index = index > 39 || index < 0 ? 3 : index;


        day.innerHTML = "Friday";
        pic.src = "./images/" + this.state.icons[index] +".jpg";
        temp.innerHTML = (this.state.mins[index] + "&deg;/" + this.state.maxs[index] + "&deg;");
    }
    DrawSaturday = () =>{
        var day = document.getElementById("day");
        var pic = document.getElementById("pic");
        var temp = document.getElementById("temp");
        var index = ((6 - this.state.dayNum - 1) * 8) + 3;
        index = index > 39 || index < 0 ? 3 : index;


        day.innerHTML = "Saturday";
        pic.src = "./images/" + this.state.icons[index] +".jpg";
        temp.innerHTML = (this.state.mins[index] + "&deg;/" + this.state.maxs[index] + "&deg;");
    }
    DrawSunday = () =>{
        var day = document.getElementById("day");
        var pic = document.getElementById("pic");
        var temp = document.getElementById("temp");
        var index = ((0 - this.state.dayNum - 1) * 8) + 3;
        index = index > 39 || index < 0 ? 3 : index;

        day.innerHTML = "Sunday";
        pic.src = "./images/" + this.state.icons[index] +".jpg";
        temp.innerHTML = (this.state.mins[index] + "&deg;/" + this.state.maxs[index] + "&deg;");
    }

    render(){
        return(
            <div style ={divStyle}>
    
            <h1 style ={h1Style}>Days</h1>
                <div style={left}>
                
                    <h6> Roll Over the Day of week below:</h6>
                    <br/>
                    <h1 style = {h1Days} onMouseOver={this.DrawMonday}>Monday</h1>
                    <h1 style = {h1Days} onMouseOver={this.DrawTuesday}>Tuesday</h1>
                    <h1 style = {h1Days} onMouseOver={this.DrawWednesday}>Wednesday</h1>
                    <h1 style = {h1Days} onMouseOver={this.DrawThursday}>Thursday</h1>
                    <h1 style = {h1Days} onMouseOver={this.DrawFriday}>Friday</h1>
                    <h1 style = {h1Days} onMouseOver={this.DrawSaturday}>Saturday</h1>
                    <h1 style = {h1Days} onMouseOver={this.DrawSunday}>Sunday</h1>

                </div>
                <div style={left1}>
                    <div style={left2}>
                    <h1 id="day" style = {h1day}>Day</h1>
                    <img src= "#" id="pic" />
                    <h1 id="temp" style={h1day}>0&deg; &nbsp;0&deg;</h1>
                </div>
                </div>


            </div>
        );
    }
}

export default WeekI