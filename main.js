$(document).ready(function() {
    $('header button').click(function (){
        $('form').slideDown()
    })
    $('#cancel-button').click(function (){
        $('form').slideUp()
    })
    $('form').on('submit', function (event){
        event.preventDefault()
        const newImageAddress = $('#new-img-address').val()
        const newItem = $('<li style="display: none"></li>')
        $(`<img src="${newImageAddress}">`).appendTo(newItem)
        $(`
            <div class="overlay-img-link">
                <a href="${newImageAddress} target="_blank" title="Ver imagem em tamnho real">
                    Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(newItem)
        $(newItem).appendTo('ul')
        $(newItem).fadeIn(1000)
        $('#new-img-address').val('')
    })
})