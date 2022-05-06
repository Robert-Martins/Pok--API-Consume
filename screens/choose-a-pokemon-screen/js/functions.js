$(document).ready(function(){

    $('body').fadeIn()

    $('#random-poke').css('order', '1')
    $('#choose-a-poke').css('display','none')
    $('#build-a-poke-team').css('order', '3')
    $('#poke-img').css('display', 'none')

    //Funções para requisição de dados do Pokémon

    const changeExhibitedData = (name, image) =>{
        $('#poke-img').fadeOut()
        $('#poke-name').fadeOut()
        $('#poke-name').html(name)
        $('#poke-img').attr('src',image)
        $('#poke-img').fadeIn()
        $('#poke-name').fadeIn()
    }

    const changeExhibitedStats = (stats) =>{
        var counter = 0;
        stats.map(function(val){
            $('#stat-'+counter).html(val.base_stat)
            counter++;
        })
        //
    }

    const getPokemonData = (poke) =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${poke}`

        if(poke != ''){
            fetch(url, {
                method: 'GET'
            }).then(response=>{
                return response.json()
            }).then(data =>{
                changeExhibitedData(data.name, data.sprites.front_default)
                changeExhibitedStats(data.stats)
            })
        }
    }

    $('#choose-a-poke-btn').click(function(){
        var poke = $('#poke-id').val()
        getPokemonData(poke)
    })

})