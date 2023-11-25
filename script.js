function enviarDados() {
  let nome = document.getElementById("nome").value;
  let cep = document.getElementById("cep").value.toString();
  let cidade = document.getElementById("cidade").value.toString();
  let cpf = document.getElementById("cpf").value.toString();
  let uf = document.getElementById("uf").value.toString();
  let rua = document.getElementById("rua").value.toString();
  let numero = document.getElementById("numero").value.toString();
  let bairro = document.getElementById("bairro").value.toString();
  let complemento = document.getElementById("complemento").value.toString();
  let email = document.getElementById("email").value.toString();
  let tel = document.getElementById("tel").value.toString();


  var token =
    "2a12fe75fec2c9aa88b31fbb8bbcddcab300b4842874b8ef51d919eaa0acd1ac";
  let contato = {
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
