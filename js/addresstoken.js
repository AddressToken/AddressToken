
const addressTokenABI = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"bytecodeAt","outputs":[{"name":"outCode","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"deploy","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_beneficiary","type":"address"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deployerHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"addressToURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_byWhom","type":"address"}],"name":"ownershipTransferred","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_deployer","type":"address"}],"name":"firstAddressFromDeployer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_deployerHash","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}];
const deployerABI = [{"constant":false,"inputs":[{"name":"_data","type":"bytes"}],"name":"deploy","outputs":[{"name":"addr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnershipAndNotify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"at","type":"address"}],"name":"Deployed","type":"event"}];
const deployerBytecode = "0x608060405260008054600160a060020a0319163317905534801561002257600080fd5b506102ff806100326000396000f3006080604052600436106100605763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166277436081146100655780638a3b9d37146100da5780638da5cb5b146100fd578063f2fde38b14610112575b600080fd5b34801561007157600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100be9436949293602493928401919081908401838280828437509497506101339650505050505050565b60408051600160a060020a039092168252519081900360200190f35b3480156100e657600080fd5b506100fb600160a060020a03600435166101aa565b005b34801561010957600080fd5b506100be61027e565b34801561011e57600080fd5b506100fb600160a060020a036004351661028d565b60008054600160a060020a0316331461014b57600080fd5b8151602083016000f09050600160a060020a038116151561016b57600080fd5b60408051600160a060020a038316815290517ff40fcec21964ffb566044d083b4073f29f7f7929110ea19e1b3ebe375d89055e9181900360200190a133ff5b600054600160a060020a031633146101c157600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383169081178255604080517fac9a252a0000000000000000000000000000000000000000000000000000000081523360048201529051919263ac9a252a926024808401936020939083900390910190829087803b15801561024457600080fd5b505af1158015610258573d6000803e3d6000fd5b505050506040513d602081101561026e57600080fd5b5051151561027b57600080fd5b50565b600054600160a060020a031681565b600054600160a060020a031633146102a457600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820212532eae11038deeaceab491b5154fc507f77d52ec6f4c7783c50ba568adc150029";

var account;
var web3js;

async function connectToWeb3() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    let accountPromiseDone;
    let accountPromise = new Promise(done => accountPromiseDone = done);
    function updateAccount() {
        web3js.eth.getAccounts(async function(error, result) {
            if (result && result.length > 0) {
                if (account !== result[0]) {
                    account = result[0];
                    $('#accountAddress').val(account);
                    $('#accountAddress').triggerHandler('input');
                    console.log(`Account: ${account} https://ethrscan.io/address/${account}`);
                }
            } else {
                console.log(`Account: NULL`);
            }

            setTimeout(updateAccount, 1000);
            if (accountPromiseDone) {
                accountPromiseDone();
            }
        });
    }

    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3js = new Web3(web3.currentProvider);
        updateAccount();
    } else {
        console.log('No web3js? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3js = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'));
        web3 = web3js;
        updateAccount();
        accountPromiseDone();
    }
    await accountPromise;
    accountPromiseDone = null;
}

async function sendTransaction(preTx, value, to) {
    // Get gas price
    const gasPriceJSON = (await $.getJSON('https://gasprice.poa.network/'));
    console.log('gasPriceJSON = ', gasPriceJSON);
    const estimateGas = await preTx.estimateGas({ from: account, value: value, gasPrice: gasPriceJSON.standard * 10**9 });
    console.log('estimateGas = ', estimateGas);
    const gasPrice = Math.trunc((gasPriceJSON.standard + (gasPriceJSON.fast - gasPriceJSON.standard)*estimateGas/4000000) * 10**9);
    console.log('gasPrice = ', gasPrice / 10**9);

    if (account) {
        const tx = await preTx.send({ from: account, value: value, gasPrice: gasPrice, gas: estimateGas });
        console.log(tx);
    } else {
        $('#tx_to').val(to);
        $('#tx_value').val(value);
        $('#tx_data').val(preTx.encodeABI());
        $('#tx_gas').val(estimateGas);
        $('#tx_gas_price').val(Math.trunc(gasPrice/10**9*100)/100 + ' Gwei');
        $('#txModal').modal('show');
    }
}

window.addEventListener('load', async function() {

    const getAccountTokens = async function (addressTokenContract, addr) {
        const tokensCount = await addressTokenContract.methods.balanceOf(addr).call();
        const tokensPromises = [];
        for (let i = 0; i < tokensCount; i++) {
            tokensPromises.push(addressTokenContract.methods.tokenOfOwnerByIndex(addr, i).call());
        }
        return await Promise.all(tokensPromises);
    };

    const getTokenDestinations = async function (addressTokenContract, tokens) {
        return (await Promise.all(
            tokens.map(tid => addressTokenContract.methods.tokenURI(tid).call())
        )).map(uri => web3js.utils.toChecksumAddress(uri.split(':')[1]));
    };

    const updateTokens = async function () {
        const addressTokenContract = new web3js.eth.Contract(addressTokenABI, $('#addressTokenAddress').val());
        const accountTokens = await getAccountTokens(addressTokenContract, $('#accountAddress').val());
        console.log('All account tokens: ', accountTokens);
        const tokenDestinations = await getTokenDestinations(addressTokenContract, accountTokens);
        console.log('All token destinations: ', tokenDestinations);

        $('#tokens').html(tokenDestinations.map(
            (addr,i) => `<option${i?'':' selected'}>${addr}</option>`
        ).join());
    };

    var getDeterministicContractAddress = function (address, nonce = 0) {
        if (nonce == 0) {
            return '0x' + web3js.utils.keccak256('0xd694' + address.substr(2) + '80').slice(26).toString('hex');
        }
        if (nonce <= 0x7f) {
            return '0x' + web3js.utils.keccak256('0xd694' + address.substr(2) + web3js.utils.toBN(nonce).toString(16, 2)).slice(26).toString('hex');
        }
        if (nonce <= 0xff) {
            return '0x' + web3js.utils.keccak256('0xd794' + address.substr(2) + '81' + web3js.utils.toBN(nonce).toString(16, 2)).slice(26).toString('hex');
        }
        if (nonce <= 0xffff) {
            return '0x' + web3js.utils.keccak256('0xd894' + address.substr(2) + '82' + web3js.utils.toBN(nonce).toString(16, 4)).slice(26).toString('hex');
        }
        if (nonce <= 0xffffff) {
            return '0x' + web3js.utils.keccak256('0xd994' + address.substr(2) + '83' + web3js.utils.toBN(nonce).toString(16, 6)).slice(26).toString('hex');
        }
        return '0x' + web3js.utils.keccak256('0xda94' + address.substr(2) + '84' + web3js.utils.toBN(nonce).toString(16, 8)).slice(26).toString('hex');
    };

    $('#addressTokenAddress').bind('input', async function() {
        updateTokens();
    });

    $('#accountAddress').bind('input', async function() {
        updateTokens();

        const addr = $('#accountAddress').val();
        const nonce = await web3js.eth.getTransactionCount(addr);
        console.log('Account nonce: ' + nonce.toString());

        const deployerAddress = web3js.utils.toChecksumAddress(getDeterministicContractAddress(addr, nonce));
        console.log('Deployer address: ' + deployerAddress);
        $('#new-deployer-address').val(deployerAddress);
        $('#new-token-deployer').val(deployerAddress);

        const destinationAddress = web3js.utils.toChecksumAddress(getDeterministicContractAddress(deployerAddress, 1));
        console.log('Destination address: ' + destinationAddress);
        $('#new-deployer-dest').val(destinationAddress);
    });

    $('#token-contract-deploy').bind('click', async function () {
        const addressTokenContract = new web3js.eth.Contract(addressTokenABI, $('#addressTokenAddress').val());
        const accountTokens = await getAccountTokens(addressTokenContract, $('#accountAddress').val());
        console.log('All account tokens: ', accountTokens);
        const tokenDestinations = await getTokenDestinations(addressTokenContract, accountTokens);
        console.log('All token destinations: ', tokenDestinations);

        const indexOfSelectedToken = tokenDestinations.indexOf($('#tokens').val());
        const selectedTokenId = accountTokens[indexOfSelectedToken];
        console.log('Deploying to: ' + $('#tokens').val());
        console.log('Deploying with: ' + selectedTokenId);

        const contractData = $('#token-contract-data').val();
        sendTransaction(addressTokenContract.methods.deploy(selectedTokenId, contractData), 0, addressTokenContract.options.address);
    });

    $('#new-deployer-create').bind('click', async function () {
        const addressTokenContract = new web3js.eth.Contract(addressTokenABI, $('#addressTokenAddress').val());
        const deployerContract = new web3js.eth.Contract(deployerABI);

        sendTransaction(deployerContract.deploy({ data: deployerBytecode }), 0, "0x0");
    });

    $('#new-token-create').bind('click', async function () {
        const addressTokenContract = new web3js.eth.Contract(addressTokenABI, $('#addressTokenAddress').val());
        const deployerContract = new web3js.eth.Contract(deployerABI, $('#new-token-deployer').val());

        sendTransaction(await deployerContract.methods.transferOwnershipAndNotify(addressTokenContract.options.address), 0, deployerContract.options.address);
    });

    // SETUP UI

    for (const name of ['#tokens']) {
        let buttonName = name + '_copy';
        $(buttonName).tooltip();

        $(buttonName).bind('click', function() {
            var copy = function (e) {
                e.preventDefault();
                if (e.clipboardData) {
                    e.clipboardData.setData('text/plain', $(name).val());
                } else if (window.clipboardData) {
                    window.clipboardData.setData('Text', $(name).val());
                }
            }

            window.addEventListener('copy', copy);
            try {
                if (document.execCommand('copy')) {
                    $(buttonName).trigger('copied', ['Copied!']);
                } else {
                    $(buttonName).trigger('copied', ['Copy with Ctrl/Cmd+C']);
                }
            } catch (err) {
                $(buttonName).trigger('copied', ['Copy with Ctrl/Cmd+C']);
            }
            window.removeEventListener('copy', copy);
        });

        $(buttonName).bind('copied', function(event, message) {
            $(this).attr('title', message)
                .tooltip('_fixTitle') // https://github.com/mistic100/jQuery-QueryBuilder/issues/432#issuecomment-395164492
                .tooltip('show')
                .attr('title', 'Copy to Clipboard')
                .tooltip('_fixTitle');
            setTimeout
        });
    }

    // SETUP WEB3

    connectToWeb3();
    $('#addressTokenAddress').triggerHandler('input');
    $('#accountAddress').triggerHandler('input');
});