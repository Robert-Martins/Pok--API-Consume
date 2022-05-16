$(document).ready(function(){

    $('body').fadeIn()

    $('#poke-img').css('display', 'none')

    //Funções para requisição de dados do Pokémon

    var pokemonData = {} //Variável para guardar os objeto de dados do Pokémon

    var teamData = []

    var didRequest = false

    const changeExhibitedData = (name, image) =>{
        $('#poke-img').fadeOut()
        $('#poke-name').fadeOut()
        $('#poke-name').html(name)
        $('#poke-img').attr('src',image)
        $('#poke-img').fadeIn()
        $('#poke-name').fadeIn()
    }

    const getPokémonData = (data) =>{
        pokemonData = data
    }

    const changePokedexData = () =>{
        changeExhibitedInfo(pokemonData)
        changeExhibitedMoves(pokemonData.moves)
        changeExhibitedTypes(pokemonData.types)
        changeExhibitedStats(pokemonData.stats)
    }

    const changeExhibitedInfo = (info) =>{
        $('#pokedex-id').html('#'+info.id+' - '+info.name)
        $('#pokedex-img').attr('src',info.sprites.front_default)
    }

    const changeExhibitedMoves = (moves) =>{
        el = $('.pokedex-moves')
        el.html('')
        let max = moves.length
        for(let count = 1; count <= 4; count++){
            let val = randomNumberGeneration(max, 0)
            el.append('<h4>Move '+count+': '+moves[val].move.name+'</h4>')
        }

    }

    const changeExhibitedTypes = (types) =>{
        el = $('.pokedex-types')
        let typeCount = 0;
        el.html('')
        types.map(function(val){
            typeCount++
            el.append('<h4>Type '+typeCount+': '+val.type.name+'</h4>')
        })
    }

    const changeExhibitedStats = (stats) =>{
        el = $('.pokedex-stats')
        let statCount = 0;
        el.html('')
        stats.map(function(val){
            statCount++
            el.append('<h4>'+val.stat.name+': '+val.base_stat+'</h4>')
        })
    }

    const showBtns = () =>{
        didRequest = true
        $('#pokedex-btn').removeClass('disabled')
        $('#team-btn').removeClass('disabled')
    }

    const randomNumberGeneration = (max, min) =>{
        return Math.floor(Math.random() * (max - min) + min);
    }

    const generatePokemonData = (poke) =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${poke}`

        if(poke != ''){
            fetch(url, {
                method: 'GET'
            }).then(response=>{
                return response.json()
            }).then(data =>{
                changeExhibitedData(data.name, data.sprites.front_default)
                getPokémonData(data)
                if(didRequest == false) showBtns()
            })
        }
    }

    $('#generate-btn').click(function(){
        var poke = $('#poke-id').val()
        generatePokemonData(poke)
    })

    //Funções para criação de html da modal de pokédex

    $('body').append(`
    <div id="pokedex-modal-container" class="modal-container">
        <div class="pokedex-modal">
            <h3>POKÉDEX</h3>
            <div class="container">
                <div class="data-container">
                    <h3>Pokémon</h3>
                    <div class="pokedex-info">
                        <h3 id="pokedex-id"></h3>
                        <img id="pokedex-img" src=""/>
                    </div><!--pokedex-moves-->
                </div><!--data-container-->
                <div class="data-container">
                    <h3>Type</h3>
                    <div class="pokedex-types text-style">
                    
                    </div><!--pokedex-types-->
                </div><!--data-container-->
                <div class="data-container">
                    <h3>Stats</h3>
                    <div class="pokedex-stats text-style">
                    
                    </div><!--pokedex-stats-->
                </div><!--data-container-->
                <div class="data-container">
                    <h3>Moves</h3>
                    <div class="pokedex-moves text-style">
                    
                    </div><!--pokedex-moves-->
                </div><!--data-container-->
                <div style="clear:both"></div>
            </div><!--container-->
        </div><!--pokedex-modal-->
    </div><!--modal-container-->
    `)

    //Funções para exibição de modal de pokédex

    const openPokedexModal = () =>{
        $('body').css('overflow', 'hidden')
        $('#pokedex-modal-container').fadeIn()
    }

    const closePokedexModal = () =>{
        $('body').css('overflow', 'auto')
        $('#pokedex-modal-container').fadeOut()
    }

    $('#pokedex-btn').click(function(){
        if(didRequest){
            changePokedexData()
            openPokedexModal()
        }
    })

    $('#pokedex-modal-container').click(function(e){
        if(!($(e.target).closest('.pokedex-modal').length > 0)){
            closePokedexModal()
        }
    })

    //Funções para inserção de pokémon no time

    const checkPokemonOnTeam = (id) =>{
        const elem = teamData.find(function(val){
            return val.id = id
        })
        if(elem){
            return true
        }
        else{
            return false
        }
    }

    const checkMaxTeamSize = () =>{
        if(teamData.length == 6){
            return true
        }
        else{
            return false
        }
    }

    const insertPokemonOnTeam = () =>{
        if(checkMaxTeamSize()){
            console.log(checkMaxTeamSize())
            return console.log("Max team size reached")
        }
        if(checkPokemonOnTeam(pokemonData.id)){
            return console.log("Pokémon is already on the team")
        }
        else{
            teamData.push(pokemonData)
        }
    }

    $('#team-btn').click(function(){
        insertPokemonOnTeam()
        console.log('==========Pokemon atual==========')
        console.log(pokemonData)
        console.log('==========Time atual==========')
        console.log(teamData)
    })

    //Funções para inclusão de botões na modal de menu

    $('body').append(`
    <div id="menu-modal-container" class="modal-container">
        <div class="menu-modal">
            <h1 style="margin-bottom:24px; ">MENU</h1>
            <div style="margin-bottom: 12px">
                <a href="../../index.html">
                    <h3>Home</h3>
                </a>
            </div>
            <a href="../whos-your-pokemon-screen">
                <img src="../../../assets/icons/function-1-logo.png" />
                <h3>Whos Your Pokémon</h3>
            </a>
            <a href="../choose-a-pokemon-screen">
                <img src="../../../assets/icons/function-2-logo.png" />
                <h3>Choose Your Pokémon</h3>
            </a>
            <div style="margin-top: 16px">
                <a href="">
                    <h3>Back to Projects</h3>
                </a>
            </div>
        </div><!--menu-modal-->
    </div><!--modal-container-->
    `)

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