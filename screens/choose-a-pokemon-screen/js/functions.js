$(document).ready(function(){

    $('body').fadeIn()

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

    $('#generate-btn').click(function(){
        var poke = $('#poke-id').val()
        getPokemonData(poke)
    })

    //Funções para inclusão de botões na modal de menu

    $('body').append('<div id="menu-modal-container" class="modal-container"></div><!--modal-container-->')

    $('#menu-modal-container').append('<div class="menu-modal"></div><!--menu-modal-->')

    $('.menu-modal').append('<h1 style="margin-bottom:32px; ">MENU</h1>')

    $('.menu-modal').append('<div style="margin-bottom: 12px"><a href="../../index.html"><h3>Home</h3></a></div>')

    $('.menu-modal').append('<a href="../whos-your-pokemon-screen"><img src="../../../assets/icons/function-1-logo.png" /><h3>Whos Your Pokemon</h3></a>')

    $('.menu-modal').append('<a href="../build-a-pokemon-team"><img src="../../../assets/icons/function-3-logo.png" /><h3>Build Your Team</h3></a>')

    $('.menu-modal').append('<div style="margin-top: 16px"><a href=""><h3>Back to Projects</h3></a></div>')

    //Funções para exibição de modal de menu

    const openMenuModal = () =>{
        $('body').css('overflow', 'hidden')
        $('#menu-modal-container').fadeIn()
    }

    const closeMenuModal = () =>{
        $('body').css('overflow', 'auto')
        $('#menu-modal-container').fadeOut()
    }

    $('#menu-btn').click(function(){
        openMenuModal()
    })

    $('div#menu-modal-container').click(function(e){
        if(!(($(e.target).closest(".menu-modal").length > 0))){
            closeMenuModal()
        }
    })

})