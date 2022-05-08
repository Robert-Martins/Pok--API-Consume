$(document).ready(function(){

    $('body').fadeIn()

    //Funções para inclusão de botões na modal de menu

    $('body').append('<div id="menu-modal-container" class="modal-container"></div><!--modal-container-->')

    $('#menu-modal-container').append('<div class="menu-modal"></div><!--menu-modal-->')

    $('.menu-modal').append('<h1 style="margin-bottom:32px; ">MENU</h1>')

    $('.menu-modal').append('<a href="screens/whos-your-pokemon-screen"><img src="assets/icons/function-1-logo.png" /><h3>Whos Your Pokemon</h3></a>')

    $('.menu-modal').append('<a href="screens/choose-a-pokemon-screen"><img src="assets/icons/function-2-logo.png" /><h3>Choose Your Pokémon</h3></a>')

    $('.menu-modal').append('<a href="screens/build-a-pokemon-team"><img src="assets/icons/function-3-logo.png" /><h3>Build Your Team</h3></a>')

    $('.menu-modal').append('<div style="margin-top: 16px"><a href=""><h3>Back to Projects</h3></a></div>')

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