const Web3 = require('web3')

var nodoUrl = 'https://mainnet.infura.io/v3/611ef8b396a440a58e035fd6ad92c221'

var web3 = new Web3(nodoUrl)

var address = '0x07fe3fcb058d72757ec554c093642bb51f95668c'
function info(){
web3.eth.getBalance(address, (err, _balace) => { balace = _balace })

web3.utils.fromeWei(balace, 'ether')

web3.eth.accounts.create()
}

console.log(info)
