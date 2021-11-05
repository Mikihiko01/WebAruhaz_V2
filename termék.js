class Termek{
    constructor(elem, adatok){
        this.elem = elem;
        this.adatok= adatok;

        this.nev= this.nev;
        this.leiras=this.leiras;
        this.ar= this.ar;
        this.kepElem = elem.children("img");
        this.kepElem.attr("src", this.adatok);

       

    }
    Sajatesemeny(){
        let esemeny = new CustomEvent("kosarbaRakja",{detail:this});
        console.log("esemény megtörtént");
        window.dispatchEvent(esemeny);
        
    }
}