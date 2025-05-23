$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
});

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
});

$('#cep').mask('00000-000', {
    placeholder: '01234-567'
});

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        }
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (event, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
});

$('.inicio').click(function (e) {
    e.preventDefault();
    const destino = $('#form');
    $('html, body').animate({
        scrollTop: destino.offset().top
    }, 1000);
});
