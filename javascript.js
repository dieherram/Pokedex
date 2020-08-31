$(document).ready(function() {
    
    $("button").click(function(){
        var numpok = $('#numpok').val();
        console.log (numpok);

        var pokeapi = 'https://pokeapi.co/api/v2/pokemon/' + numpok;
        console.log (pokeapi);

        $.getJSON(pokeapi).done(function(data){
        console.log(data);
        $('img').attr('src',data.sprites.other.dream_world.front_default);
        $('#nombrepokemon').text(data.species.name.toUpperCase());
        $('#pesopokemon').text('peso:' + ' ' +  data.weight);
        // codigo grafico
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Estadísticas"
            },
              axisY: {
              includeZero: true
            },
            data: [{
                type: "column", //change type to bar, line, area, pie, etc
                //indexLabel: "{y}", //Shows y value on all Data Points
                indexLabelFontColor: "#5A5757",
                  indexLabelFontSize: 16,
                indexLabelPlacement: "outside",
                dataPoints: [
                    { label: "hp", y: (data.stats[0].base_stat) },
                    { label: "attack", y: (data.stats[1].base_stat) },
                    { label: "defense", y: (data.stats[2].base_stat) },
                    { label: "special-attack", y: (data.stats[3].base_stat) },
                    { label: "special-defense", y: (data.stats[4].base_stat) },
                    { label: "speed", y: (data.stats[5].base_stat) }
                ]
            }]
        });
        chart.render();
        // codigo grafico
        });

        }); 
    });
