const plec =document.getElementsByName("plec");
const cel =document.getElementsByName("cel");
const aktywnosc = document.getElementById("aktywnosc");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const age = document.getElementById("age");
const infoPPM = document.getElementById("infoPPM");
const infoAim = document.getElementById("infoAim");
const infoBMI = document.getElementById("infoBMI")
let reduction;
let mass;
let plecValue;
let celValue;
let result =0;
let addCalories;

const calculate = document.getElementById("calculate").addEventListener("click", ()=>{
    
    for(i=0;i<2;i++){
      if(plec[i].checked)  plecValue = plec[i].value;
    }
    for(i=0;i<3;i++){
      if(cel[i].checked)  celValue = cel[i].value;
    }

    const con = document.querySelector('#aktywnosc option:checked'); 
    
      if(con.value == "siedzacy") addCalories = 1.4;
      else if(con.value == "malo") addCalories = 1.6;
      else if(con.value == "srednio") addCalories =1.8;
      else if(con.value == "duzo") addCalories = 2;

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