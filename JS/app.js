let time=['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:']
let Seattle ={
    min:23,
    max:65,
    avgcookie: 6.3,
    randomNum: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;

    },
    arr:[],
    simulated:function(){
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
 