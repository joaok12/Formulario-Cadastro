function enviarDados() {
    var token = '2a12fe75fec2c9aa88b31fbb8bbcddcab300b4842874b8ef51d919eaa0acd1ac';
    var contato = {
  "contatos": [
    {
      "contato": {
        "sequencia": "1",
        "nome": "teste do joao versel",
        "tipo_pessoa": "F",
        "cep": "74553510",
        "situacao": "A"
      }
    }
  ]
};

    var data = new URLSearchParams();
    data.append('token', token);
    data.append('contato', JSON.stringify(contato));
    data.append('formato', 'JSON');

    fetch('https://api.tiny.com.br/api2/contato.incluir.php', {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
