let form = document.getElementById('formulario');

    let dados = []

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let sangue = document.getElementById('sangue').value;
    let peso = document.getElementById('peso').value;
    let estado = document.getElementById('estado').value;
    

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';

if (nome.length < 7) {
    document.getElementById('erroNome').textContent = 'Nome deve ter pelo menos nome e sobrenome';
    valido = false;
}
 if(!nome.includes(" ")){
document.getElementById('erroNome').textContent ='Deve conter pelo menos nome e sobrenome.';
valido = false;
}

if (!email.includes('@')) {
document.getElementById('erroEmail').textContent = 'Email Inválido, deve conter @.';
valido = false;
}

if (telefone.length < 8) {
alert("Telefone inválido.");
valido = false;
}

if (telefone === "") {
    alert("Telefone é obrigatória.");
    valido = false;
}

if (idade === "" || idade <= 0) {
    alert("Informe uma idade válida.");
    valido = false;
}

if (idade <= 16 ) {
    alert("Você precisa ter 16 anos ou mais para doar sangue.");
    valido = false;
}

if (cidade === "") {
    alert("Cidade é obrigatória.");
    valido = false;
}

if (estado === "") {
    alert("Estado é obrigatória.");
    valido = false;
}

if (peso < 50) {
    alert("Você deve ter um peso mínimo de 50kg. ");
    valido = false;
}

if (peso === "") {
    alert("Peso é obrigatório.");
    valido = false;
}

if (sangue === "selecione") {
    alert("Você precisa selecionar seu tipo sanguíneo.");
    valido = false;
}

if (valido) {

let usuario = {
            nome: nome,
            email: email,
            idade: idade,
            peso: peso,
            telefone: telefone,
            cidade: cidade,
            estado: estado,
            sangue: sangue
        
        };

        dados.push(usuario);

        console.log(dados);

        alert('Formulário enviado com sucesso!');

        form.reset();
    }
});