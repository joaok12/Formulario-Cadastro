function enviarDados() {
  var nome = document.getElementById("nome").value;
  var cep = document.getElementById("cep").value.toString();
  var cidade = document.getElementById("cidade").value.toString();
  var cpf = document.getElementById("cpf").value.toString();
  var uf = document.getElementById("uf").value.toString();
  var rua = document.getElementById("rua").value.toString();
  var numero = document.getElementById("numero").value.toString();
  var bairro = document.getElementById("bairro").value.toString();
  var complemento = document.getElementById("complemento").value.toString();
  var email = document.getElementById("email").value.toString();

  var token =
    "2a12fe75fec2c9aa88b31fbb8bbcddcab300b4842874b8ef51d919eaa0acd1ac";
  var contato = {
    contatos: [
      {
        contato: {
          sequencia: "1",
          nome: nome,
          tipo_pessoa: "F",
          cpf_cnpj: cpf,
          cep: cep,
          fone: tel,
          situacao: "A",
          email: email,
          endereco: rua,
          numero: numero,
          complemento: complemento,
          bairro: bairro,
          cidade: cidade,
          uf: uf,
        },
      },
    ],
  };

  var data = new URLSearchParams();
  data.append("token", token);
  data.append("contato", JSON.stringify(contato));
  data.append("formato", "JSON");

  fetch("https://api.tiny.com.br/api2/contato.incluir.php", {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
