class Kosar{

    
    constructor(nev, ar, osszAr, elem){

        this.elem = elem;
        

        this.nev = this.elem.children("h5");
        this.ar = this.elem.children("p");
        this.gomb = this.elem.children("button");
        this.osszegKiir =this.elem.children("h4");

       

        this.nev.html(nev);
        this.ar.html(ar);
        this.gomb.html("X")
        this.osszegKiir.html("Összeg: "+ osszAr)


        
          
    }

}