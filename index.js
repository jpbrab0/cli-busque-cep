const argv = require("minimist")(process.argv.slice(2))
const axios = require("axios").default
async function validateCep(){
  const cep = argv.cep
  try{
    const { data } = await axios.get(`https://buscacepinter.correios.com.br/app/endereco/carrega-cep-endereco.php?pagina=/app/endereco/index.php&cepaux=&mensagem_alerta=&endereco=${cep}&tipoCEP=ALL`)
  
    console.log("\x1b[34m",data.mensagem)
    console.log(` Mensagem:${data.mensagem} \n uf:${data.dados[0].uf} \n localidade:${data.dados[0].localidade} \n logradouro:${data.dados[0].logradouroDNEC} \n bairro:${data.dados[0].bairro} \n`)
    
  } catch(err){
    console.log("\x1b[32m","Ocorreu um erro na busca do cep.")
  } 
}

validateCep()
