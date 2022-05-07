$(document).ready(function(){
    $('body').fadeIn()

    //Funções para navegação

    $('#whos-your-pokemon-nav').click(function(){
        location.href = 'screens/whos-your-pokemon-screen/index.html'
    })

    $('#choose-your-pokemon-nav').click(function(){
        location.href = 'screens/choose-a-pokemon-screen/index.html'
    })

    $('#build-your-team-nav').click(function(){
        location.href = 'screens/build-a-pokemon-team/index.html'
    })

})