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
            
        
    };
}
    
    Location.prototype.culcCookies= function(){
        for(let i=0;i<time.length-2;i++){
            this.cookiesNum.push(Math.floor(this.custmerNum[i] *this.avgcookie));
            this.total = this.total + this.cookiesNum[i];
        }
        console.log(this.custmerNum);
        console.log(this.cookiesNum);
        console.log(this.avgcookie);
        console.log(this.minCustmer);
        console.log(this.maxCustmer);

    };
    Location.prototype.tablehead=function(){
        for(let i=0;i<time.length;i++){
            th = document.createElement('th');
            firstRow.appendChild(th);

            th.textContent = time[i];
        }
    };
    Location.prototype.render=function(){
        let secondRow = document.createElement('tr');
                table.appendChild(secondRow);
                secondRow.textContent = this.locName;

            for(let i=0;i<time.length-2;i++){
                td = document.createElement('td');
                secondRow.appendChild(td);
                td.textContent =  this.cookiesNum[i];
            }
            td = document.createElement('td');
                secondRow.appendChild(td);
                td.textContent =  this.total;

        };
        Location.prototype.lastrow =function(){
            let secondRow = document.createElement('tr');
                table.appendChild(secondRow);
                secondRow.textContent = 'Total by Hourly';
                let allLocatinTotal=0;
                for(let i=0;i<this.cookiesNum.length;i++){
                    let sum = 0;
                    for(let j=0;j<arrObj.length;j++) {
                      sum = sum + arrObj[j].cookiesNum[i];
                    }
                     allLocatinTotal += sum; 
                    td = document.createElement('td');
                secondRow.appendChild(td);
                td.textContent =  sum;
                    
                }
                td = document.createElement('td');
                secondRow.appendChild(td);
                td.textContent =  allLocatinTotal;

        }
        

    
    
    
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
   seattle.lastrow();

    const shopForm = document.getElementById('locationForm');
    shopForm.addEventListener('submit',handleSubmitting);
    function handleSubmitting(event){
        event.preventDefault();
        let locationName= event.target.nameField.value;
        let minCust= Number(event.target.minField.value);
        let maxCust= Number(event.target.maxField.value);
        let avgcookie= Number(event.target.avgField.value);

        let location = new Location(locationName,minCust,maxCust,avgcookie);
        table.deleteRow(arrObj.length);
        console.log(arrObj.length)
        location.randomCustmer();
        location.culcCookies();
        location.render();
        seattle.lastrow();
    };
