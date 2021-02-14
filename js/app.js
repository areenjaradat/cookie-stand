'use strict';

let hours=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","Total"] 

let seattle={
    location:'Seattle',
    minCust:23,
    maxCust:65,
    avgCookieSale:6.3,
    custPerHour:[],
    cookie:[],
    total:0,

    updatecustPerHour:function(){
        for(let i=0;i<hours.length-1;i++){
            this.custPerHour.push(randomValue(this.minCust,this.maxCust));
            
        }
    },

    updatecookiesPerhour:function(){

        for(let i=0;i<hours.length-1;i++){
            this.cookie.push(randomValue(this.minCust,this.maxCust)*Math.floor(this.avgCookieSale));
            this.total= this.total+this.cookie[i];
            //console.log(this.cookie[i])
           // console.log("the total"+this.total)
        }
        this.cookie[this.cookie.length]=this.total;
        //console.log(this.cookie[this.cookie.length-1]);
    },

    createElement:function(){
        let mainEl=document.getElementById('mainelement');
        let paraEl=document.createElement('p');
        mainEl.appendChild(paraEl);
        paraEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainEl.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=hours[i]+" : "+this.cookie[i]+" cookies";
        }
    }

}

let tokyo={
    location:'Tokyo',
    minCust:3,
    maxCust:24,
    avgCookieSale:1.2,
    custPerHour:[],
    cookie:[],
    total:0,

    updatecustPerHour:function(){
        for(let i=0;i<hours.length-1;i++){
            this.custPerHour.push(randomValue(this.minCust,this.maxCust));
            
        }
    },

    updatecookiesPerhour:function(){

        for(let i=0;i<hours.length-1;i++){
            this.cookie.push(randomValue(this.minCust,this.maxCust)*Math.floor(this.avgCookieSale));
            this.total= this.total+this.cookie[i];
            //console.log(this.cookie[i])
           // console.log("the total"+this.total)
        }
        this.cookie[this.cookie.length]=this.total;
       // console.log(this.cookie[this.cookie.length-1]);
    },

    createElement:function(){
        let mainEl=document.getElementById('mainelement');
        let paraEl=document.createElement('p');
        mainEl.appendChild(paraEl);
        paraEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainEl.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=hours[i]+" : "+this.cookie[i]+" cookies";
        }
    }

}

let dubai={
    location:'Dubai',
    minCust:11,
    maxCust:38,
    avgCookieSale:3.7,
    custPerHour:[],
    cookie:[],
    total:0,

    updatecustPerHour:function(){
        for(let i=0;i<hours.length-1;i++){
            this.custPerHour.push(randomValue(this.minCust,this.maxCust));
            
        }
    },

    updatecookiesPerhour:function(){

        for(let i=0;i<hours.length-1;i++){
            this.cookie.push(randomValue(this.minCust,this.maxCust)*Math.floor(this.avgCookieSale));
            this.total= this.total+this.cookie[i];
           // console.log(this.cookie[i])
            //console.log("the total"+this.total)
        }
        this.cookie[this.cookie.length]=this.total;
        //console.log(this.cookie[this.cookie.length-1]);
    },

    createElement:function(){
        let mainEl=document.getElementById('mainelement');
        let paraEl=document.createElement('p');
        mainEl.appendChild(paraEl);
        paraEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainEl.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=hours[i]+" : "+this.cookie[i]+" cookies";
        }
    }

}


let paris={
    location:'Paris',
    minCust:20,
    maxCust:38,
    avgCookieSale:2.3,
    custPerHour:[],
    cookie:[],
    total:0,

    updatecustPerHour:function(){
        for(let i=0;i<hours.length-1;i++){
            this.custPerHour.push(randomValue(this.minCust,this.maxCust));
            
        }
    },

    updatecookiesPerhour:function(){

        for(let i=0;i<hours.length-1;i++){
            this.cookie.push(randomValue(this.minCust,this.maxCust)*Math.floor(this.avgCookieSale));
            this.total= this.total+this.cookie[i];
            //console.log(this.cookie[i])
           // console.log("the total"+this.total)
        }
        this.cookie[this.cookie.length]=this.total;
       // console.log(this.cookie[this.cookie.length-1]);
    },

    createElement:function(){
        let mainEl=document.getElementById('mainelement');
        let paraEl=document.createElement('p');
        mainEl.appendChild(paraEl);
        paraEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainEl.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=hours[i]+" : "+this.cookie[i]+" cookies";
        }
    }

}


let lima={
    location:'Lima',
    minCust:2,
    maxCust:16,
    avgCookieSale:4.6,
    custPerHour:[],
    cookie:[],
    total:0,

    updatecustPerHour:function(){
        for(let i=0;i<hours.length-1;i++){
            this.custPerHour.push(randomValue(this.minCust,this.maxCust));
            
        }
    },

    updatecookiesPerhour:function(){

        for(let i=0;i<hours.length-1;i++){
            this.cookie.push(randomValue(this.minCust,this.maxCust)*Math.floor(this.avgCookieSale));
            this.total= this.total+this.cookie[i];
           // console.log(this.cookie[i])
           // console.log("the total"+this.total)
        }
        this.cookie[this.cookie.length]=this.total;
       // console.log(this.cookie[this.cookie.length-1]);
    },

    createElement:function(){
        let mainEl=document.getElementById('mainelement');
        let paraEl=document.createElement('p');
        mainEl.appendChild(paraEl);
        paraEl.textContent=this.location;
        let ulLi=document.createElement('ul');
        mainEl.appendChild(ulLi);
        let liEl;
        for(let i=0;i<this.cookie.length;i++){
            liEl=document.createElement('li');
            ulLi.appendChild(liEl);
            liEl.textContent=hours[i]+" : "+this.cookie[i]+" cookies";
        }
    }

}

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive


}

seattle.updatecustPerHour();
seattle.updatecookiesPerhour();
seattle.createElement();

tokyo.updatecustPerHour();
tokyo.updatecookiesPerhour();
tokyo.createElement();

dubai.updatecustPerHour();
dubai.updatecookiesPerhour();
dubai.createElement();

paris.updatecustPerHour();
paris.updatecookiesPerhour();
paris.createElement();

lima.updatecustPerHour();
lima.updatecookiesPerhour();
lima.createElement();
