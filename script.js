function enviarDados() {
    var token = '068420d2dbe970aa286bafbbb60808789151d075';
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
