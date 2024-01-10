let plec =document.getElementsByName("plec");
let cel =document.getElementsByName("cel");
let aktywnosc = document.getElementById("aktywnosc");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let age = document.getElementById("age");
let  selectedOption =  document.querySelector('#aktywnosc option:checked');  
let plecValue;
let celValue;
let aktywnoscValue;
let result =0;
let addCalories;
const infoPPM = document.getElementById("infoPPM");
const infoAim = document.getElementById("infoAim");
const infoBMI = document.getElementById("infoBMI")
let reduction;
let mass;

const calculate = document.getElementById("calculate").addEventListener("click", ()=>{
    
    for(i=0;i<2;i++){
      if(plec[i].checked)  plecValue = plec[i].value;
    }
    for(i=0;i<3;i++){
      if(cel[i].checked)  celValue = cel[i].value;
    }

    for(i=0;i<4;i++){
      if(aktywnosc[i].checked)  aktywnoscValue = aktywnosc[i].value;
    }
      if(selectedOption.value == "siedzacy") addCalories = 1.4;
      if(selectedOption.value == "malo") addCalories = 1.6;
      if(selectedOption.value == "srednio") addCalories =1.8;
      if(selectedOption.value == "duzo") addCalories = 2;
   
        if(plecValue == 'kobieta'){
            result = (9.5*weight.value) + (1.8*height.value) + (4.6*age.value) +655;
            result=result*addCalories;
        }else{
          result = (13.7*weight.value) + (5*height.value) - (6.7*age.value) +66;
          result*=addCalories;

        }
         
      
         if(celValue == 'zmniejszenie') {
           reduction = result-500;
          infoAim.innerHTML = reduction.toFixed(2);;
          infoPPM.innerHTML = result.toFixed(2);;
         }
         else if(celValue == 'zwiekszenie'){

           mass =  result+500;
          infoAim.innerHTML = mass.toFixed(2);;
          infoPPM.innerHTML = result.toFixed(2);;
        }
         else{
          infoAim.innerHTML = result.toFixed(2);;
          infoPPM.innerHTML = result.toFixed(2);;
        }

       let calcBMI  = weight.value/Math.pow(height.value/100,2);
       infoBMI.innerHTML = calcBMI.toFixed(2);
  

})