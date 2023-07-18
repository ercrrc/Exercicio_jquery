$(document).ready(function () {
    $('#addItem').submit(function (event) {
        event.preventDefault();

        const tarefa = $('#nome-da-tarefa').val();

        const lista = $('#items');
        const novoItem = $('<li>').text(tarefa);
        lista.append(novoItem);

        $('#nome-da-tarefa').val('');
    });

    $(document).on('click', '#items li', function () {
        $(this).toggleClass('feito');
    });
});