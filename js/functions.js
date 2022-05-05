$(document).ready(function(){

    $('body').fadeIn()

    $('#random-poke').css('display','none')
    $('#choose-a-poke').css('order', '1')
    $('#build-a-poke-team').css('order', '3')

    //Funções para geração de novos Pokémons

    const changeExhibitedData = (name, image) =>{
        $('#poke-name').html(name)
        $('#poke-img').attr('src',image)
    }

    const randomNumberGeneration = () =>{
        return Math.floor(Math.random() * (897 - 1) + 1);
    }

    const randomPokemonGeneration = () =>{
        var randomNumber = randomNumberGeneration()
        if(randomNumber >= 0 && randomNumber <= 600){
            const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`

            fetch(url).then(response =>{
                return response.json()
            }).then(data =>{
                changeExhibitedData(data.name, data.sprites.front_default)
            })
        }
    }

    $('#random-poke-btn').click(function(){
        randomPokemonGeneration()
    })

})