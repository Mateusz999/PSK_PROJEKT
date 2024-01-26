const suplementName = ['Maslo orzechowe','kreatyna','białko','cytrulina','witaminy','kwasy omega 3','melatonina','przedtreningówka',];

class addSuplement{
    constructor(suplement, num){
        this.suplement = suplement
        this.num = num;
    }

    createSuplementList(){
        let element =  `<div class='article'>
        <div class='image'><img src='../public/image/image${i}.jpg' alt=''></div>
        <div class='description'> <p>${this.suplement}</p></div>
        <button class="more"><a href='../public/suplementy/${this.suplement}.html'>czytaj więcej</a></button></div>`;
        document.write(element);
       
    }
}
for(i=1;i<=suplementName.length;i++){
    let el  = new addSuplement(suplementName[i-1],i);
    el.createSuplementList();
}