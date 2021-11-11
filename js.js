$(function(){


    const szuloElem = $("article");
    const sablonElem = $(".aruhaz");
     
    var termekTomb = [];

    $.ajax(
        {
            url: "termekek.json",
            success: function (result) {
            
                result.termekek.forEach((value)=>{termekTomb.push(value)});  
                megjelenit();        
            }
        }

      );

   function megjelenit(){
    
    for (let index = 0; index < termekTomb.length; index++) {
            const ujElem = sablonElem.clone().appendTo(szuloElem);
            const adat = termekTomb[index];
            const galeria = new Termek(adat, ujElem);
    }

    sablonElem.remove();

    const szuloElem2 = $("section");
    const sablonElem2 = $(".kosar");
    sablonElem2.remove();
    var osszeg = 0;
    $(window).on("kosarKattintas", (event)=>{
        
        const ujElem = sablonElem2.clone().appendTo(szuloElem2);
        osszeg += event.detail.ar
        const ujTermek = new Kosar(event.detail.nev, event.detail.ar, osszeg, ujElem);
    });
    
   }

});    
    