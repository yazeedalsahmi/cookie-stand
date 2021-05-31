'use strict'
let time=['location  ','6am  ','7am  ','8am  ','9am  ','10am  ','11am  ','12pm  ','1pm  ','2pm  ','3pm  ','4pm  ','5pm  ','6pm  ','7pm  ','Total']

 function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

let bodytag=document.getElementById('location');
let table=document.createElement('table');
let arrObj=[];
let articleElm=document.createElement('article');
bodytag.appendChild(articleElm);
        articleElm.appendChild(table);
        let firstRow = document.createElement('tr');
        
        table.appendChild(firstRow);
        let th ;
        let td ;



function Location(locName,minCustmer,maxCustmer,avgcookie){
    this.locName = locName;
    this.minCustmer = minCustmer;
    this.maxCustmer = maxCustmer;
    this.avgcookie = avgcookie;
    this.total=0;
    this.custmerNum =[];
    this.cookiesNum =[];
    arrObj.push(this);

    
}
    Location.prototype.randomCustmer = function(){
        for(let i=0;i<time.length-2 ;i++){
            this.custmerNum.push(randomValue(this.minCustmer,this.maxCustmer));
            
        }
        
    };
    
    
    Location.prototype.culcCookies= function(){
        for(let i=0;i<time.length-2;i++){
            this.cookiesNum.push(Math.floor(this.custmerNum[i] *this.avgcookie));
            this.total = this.total + this.cookiesNum[i];
        };
        console.log(this.cookiesNum);
        console.log(this.avgcookie);
    };
    Location.prototype.tablehead=function(){
        for(let i=0;i<time.length;i++){
            th = document.createElement('th');
            firstRow.appendChild(th);

            th.textContent = time[i];
        };
    };
    Location.prototype.render=function(){
        let secondRow = document.createElement('tr');
                table.appendChild(secondRow);
                secondRow.textContent = this.locName;

            for(let i=0;i<time.length-2;i++){
                td = document.createElement('td');
                secondRow.appendChild(td);
                td.textContent =  this.cookiesNum[i];
            };
            td = document.createElement('td');
                secondRow.appendChild(td);
                td.textContent =  this.total;

        };
        

    
    
    
    let seattle = new Location('seattle',23,65,6.3);
    let tokyo = new Location('tokyo',3,24,1.2);
    let dubai = new Location('dubai',11,38,3.7);
    let paris = new Location('paris',20,38,2.3);
    let lima = new Location('lima',2,16,4.6);

    for(let i=0;i<arrObj.length;i++){
       arrObj[i].randomCustmer();
       arrObj[i].culcCookies(); 
    }
    
    
    seattle.render();
     seattle.tablehead();
    tokyo.render();
   // console.log(tokyo.render);
    
    dubai.render();
    paris.render();
   lima.render();
    
       
        

/*
         let ulsim = document.createElement('ul');
         let h2Tag = document.getElementById('Seattle');
         let lisim = document.createElement('li');
         ulsim.appendChild(lisim);
         ulsim.textContent = `Seattle`;
        h2Tag.appendChild(ulsim);
    for(let i=0 ; i<14;i++){
         lisim = document.createElement('li');
        ulsim.appendChild(lisim);
        let numcookies = Math.floor(this.randomNum(this.min,this.max) * this.avgcookie);
        this.arr.push(numcookies);
        lisim.textContent = `${time[i]} ${this.arr[i]} cookies`;

        console.log(time[5]);
        this.Total = this.Total + this.arr[i];
    }
    
    lisim.textContent = `Total : ${this.Total} cookies`;
    console.log(sumAnyArray(this.arr))
    },
    
};
Seattle.simulated();

let Tokyo ={
    min:3,
    max:24,
    avgcookie: 1.2,
    randomNum: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;

    },
    arr:[],
    simulated:function(){
         let ulsim = document.createElement('ul');
         let h2Tag = document.getElementById('Tokyo');
         let lisim = document.createElement('li');
         ulsim.appendChild(lisim);
         ulsim.textContent = `Tokyo`;
        h2Tag.appendChild(ulsim);
    for(let i=0 ; i<14;i++){
         lisim = document.createElement('li');
        ulsim.appendChild(lisim);
        let numcookies = Math.floor(this.randomNum(this.min,this.max) * this.avgcookie);
        let result= this.arr.push(numcookies);
        lisim.textContent = `${time[i]} ${this.arr[i]} cookies`;
        console.log(time[5]);
    }
    console.log(this.arr);
    function sum(a, b) {
        let array = [a+b]
        return a+b;
        }
        function sumAnyArray(Array) {
            let array = [ Array.reduce(sum)];
            return array;
          
          }
    lisim.textContent = `Total : ${sumAnyArray(this.arr)} cookies`;
    console.log(sumAnyArray(this.arr))
    },
    
};
Tokyo.simulated();

let Dubai ={
    min:11,
    max:38,
    avgcookie: 3.7,
    randomNum: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;

    },
    arr:[],
    simulated:function(){
         let ulsim = document.createElement('ul');
         let h2Tag = document.getElementById('Dubai');
         let lisim = document.createElement('li');
         ulsim.appendChild(lisim);
         ulsim.textContent = `Dubai`;
        h2Tag.appendChild(ulsim);
    for(let i=0 ; i<14;i++){
         lisim = document.createElement('li');
        ulsim.appendChild(lisim);
        let numcookies = Math.floor(this.randomNum(this.min,this.max) * this.avgcookie);
        let result= this.arr.push(numcookies);
        lisim.textContent = `${time[i]} ${this.arr[i]} cookies`;
        console.log(time[5]);
    }
    console.log(this.arr);
    function sum(a, b) {
        let array = [a+b]
        return a+b;
        }
        function sumAnyArray(Array) {
            let array = [ Array.reduce(sum)];
            return array;
          
          }
    lisim.textContent = `Total : ${sumAnyArray(this.arr)} cookies`;
    console.log(sumAnyArray(this.arr))
    },
    
};
Dubai.simulated();

let Paris ={
    min:20,
    max:38,
    avgcookie: 2.3,
    randomNum: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;

    },
    arr:[],
    simulated:function(){
         let ulsim = document.createElement('ul');
         let h2Tag = document.getElementById('Paris');
         let lisim = document.createElement('li');
         ulsim.appendChild(lisim);
         ulsim.textContent = `Paris`;
        h2Tag.appendChild(ulsim);
    for(let i=0 ; i<14;i++){
         lisim = document.createElement('li');
        ulsim.appendChild(lisim);
        let numcookies = Math.floor(this.randomNum(this.min,this.max) * this.avgcookie);
        let result= this.arr.push(numcookies);
        lisim.textContent = `${time[i]} ${this.arr[i]} cookies`;
        console.log(time[5]);
    }
    console.log(this.arr);
    function sum(a, b) {
        let array = [a+b]
        return a+b;
        }
        function sumAnyArray(Array) {
            let array = [ Array.reduce(sum)];
            return array;
          
          }
    lisim.textContent = `Total : ${sumAnyArray(this.arr)} cookies`;
    console.log(sumAnyArray(this.arr))
    },
    
};
Paris.simulated();

let Lima ={
    min:2,
    max:16,
    avgcookie: 4.6,
    randomNum: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;

    },
    arr:[],
    simulated:function(){
         let ulsim = document.createElement('ul');
         let h2Tag = document.getElementById('Lima');
         let lisim = document.createElement('li');
         ulsim.appendChild(lisim);
         ulsim.textContent = `Lima`;
        h2Tag.appendChild(ulsim);
    for(let i=0 ; i<14;i++){
         lisim = document.createElement('li');
        ulsim.appendChild(lisim);
        let numcookies = Math.floor(this.randomNum(this.min,this.max) * this.avgcookie);
        let result= this.arr.push(numcookies);
        lisim.textContent = `${time[i]} ${this.arr[i]} cookies`;
        console.log(time[5]);
    }
    console.log(this.arr);
    function sum(a, b) {
        let array = [a+b]
        return a+b;
        }
        function sumAnyArray(Array) {
            let array = [ Array.reduce(sum)];
            return array;
          
          }
    lisim.textContent = `Total : ${sumAnyArray(this.arr)} cookies`;
    console.log(sumAnyArray(this.arr))
    },
    
};
Lima.simulated();
 */