function listar() {
    $.ajax({
        url: 'https://pizzaria.roxo.dev.br/',
        method: 'get',
        success(data) {
            $('#tabela').html(('<tr><td>Sabor</td><td>Valor</td></tr>'))
            data.forEach(function(item) {
                var valorBR = JSON.stringify(item.valor);                   
                valorBR = valorBR.slice(1, length-1)
                valorBR = valorBR.replaceAll('.',',');

                $('#tabela').append('<tr><td>' + item.nome + '</td><td>' + `R$ ${valorBR}` + '</td></tr>')
                //?$('#tabela').append('<tr><td>' + item.nome + '</td><td>' + item.valor + '</td></tr>')
                //com o append ele concatena a nova lista na que ja foi gerada. usando o html, o codigo gera uma lista nova e atualizada

            });
        }
    });
}
listar();

// function addSabor () {
//     let sabor = $('#sabor').val();
//     let valor = $('#valor').val();
//     $.ajax({
//         url: 'https://pizzaria.roxo.dev.br/',
//         method: 'post',
//         data: {
//             nome: sabor,
//             valor: valor
//         },
//         success(data) {                
//             listar();               
//         }
//     })
// }

// $('#adicionar').click(function() {
//     addSabor(); 
// })



// $(document).ready(function () {
//     $.getJSON("sabores.json", function (result) {
//         $.each(result, function (i, nome) {
//             $("#sabores").append("<option value="+nome+">"+nome+"</option>");
//         });
//     });
// });


// $(document).ready(function(){
//     $.getJSON('sabores.json', function(data) {
//         $.each(data, function(id, nome) {
//             $("#sabores").append('<option name="' + data.id + '">' + data.nome + '</option>');
//         });
//     });
// });

