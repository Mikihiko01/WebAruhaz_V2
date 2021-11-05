$(function () {
    $.ajax(
        {
            url: "termekek.json",
            success: function (result) {
                console.log(result);
                console.log("ajax hivásban");
                megjelenit();

            }
        }

    );
    /////////////////////Ajax Hívás vége//////////////////////////////////////

    const szuloElem = $("article");
    const sablonElem = $(".termék");
    const kepTomb = {

    }

    function megjelenit() {
        for (let index = 0; index < 7; index++) {     
        const ujElem = sablonElem.clone().appendTo(szuloElem);
        const termek = new Termek("kepek/kep" + (index + 1) + ".jpg", ujElem);

        }
        sablonElem.remove();

        $(window).on("kosarbaRakja", (event)=>{
            console.log(event.detail);
        });






    }



})



