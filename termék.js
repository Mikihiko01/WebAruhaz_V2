class Termek{
    constructor(adat, elem){

        this.elem = elem;
        this.adat = adat;



        this.nev = this.elem.children("h1");
        this.kep = this.elem.children("img");
        this.leiras = this.elem.children("h3");
        this.gomb = this.elem.children("button");
        this.ar = this.elem.children("p");
        
        

        this.beallit(this.adat);

        this.elem.on("click", ()=>{
            this.kattintasTrigger();
        })
              
    }

    beallit(ertekek){  

        this.nev.html(ertekek.nev);
        this.kep.attr("src", ertekek.kep);
        this.leiras.html(ertekek.leiras);
        this.gomb.html("Kosárba");
        this.ar.html(ertekek.ar);

    }

    kattintasTrigger(){
        let esemeny = new CustomEvent("kosarKattintas", {detail:this.adat});
        window.dispatchEvent(esemeny);

    }
    

}