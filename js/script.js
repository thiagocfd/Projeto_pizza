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


$(document).ready(function(){
    carregar_json('Sabores');
    function carregar_json(id){
        var html = '';
        $.getJSON('sabores.json', function(data) {
            html += '<option>Selecionar' + id + '</option>';

            if(id == 'Sabores'){
                for(var i = 0; i < data.length; i++){
                    html += '<option value=' + data[i].nome +'> '+ data[i].nome +':   ' + data[i].valor +'</option>';
                }
            }
            $('#sabor_valor').html(html);
        });
        
    }
        
});

