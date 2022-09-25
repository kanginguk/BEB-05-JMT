const VTOKEN = {
  "contractName": "VJMToken",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "treasury",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "TreasuryMoved",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MAX_SUPPLY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "treasuryWallet",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "contract LiquidityPool",
          "name": "_lp",
          "type": "address"
        }
      ],
      "name": "setLPAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "increaseContractAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MoveToTreasuryWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"treasury\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"TreasuryMoved\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_SUPPLY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MoveToTreasuryWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"increaseContractAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract LiquidityPool\",\"name\":\"_lp\",\"type\":\"address\"}],\"name\":\"setLPAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryWallet\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/VJMToken.sol\":\"VJMToken\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0xfc84e3f67f174bce1881de3d7bd0c23466ec9df839faee2e63ca10dc399914b2\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ff45d9a075e085d434fdd2e03f8daedd093d79b1da787dc02695e4ac6d1167c8\",\"dweb:/ipfs/QmQVcDsY57kxiw2XnMUhEUyR7h8G539Mqd2aFPfPvAENQX\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0xa2bc2b583b4a3c3dd261e5ec6f98ba02cfe17ec43e7c5b92c14b37b78776f5a3\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://274fa4ca244401264800702c06a51a1560134dea847080036779b8d24dcac5b7\",\"dweb:/ipfs/Qmc4GR8JwNBYkDM32nMrPCdHKabqSCiGuWZTweVQc3qTL5\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620014c5380380620014c58339810160408190526200003491620001f0565b6040518060400160405280600a8152602001693b2526aa102a37b5b2b760b11b815250604051806040016040528060048152602001631d92935560e21b8152508160039081620000859190620002c6565b506004620000948282620002c6565b50620000a1915050601290565b620000ae90600a620004a7565b620000bd90620927c0620004b8565b6005819055620000cf90309062000103565b60068054336001600160a01b031991821617909155600780549091166001600160a01b0392909216919091179055620004e8565b6001600160a01b0382166200015e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001729190620004d2565b90915550506001600160a01b03821660009081526020819052604081208054839290620001a1908490620004d2565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b6000602082840312156200020357600080fd5b81516001600160a01b03811681146200021b57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200024d57607f821691505b6020821081036200026e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001eb57600081815260208120601f850160051c810160208610156200029d5750805b601f850160051c820191505b81811015620002be57828155600101620002a9565b505050505050565b81516001600160401b03811115620002e257620002e262000222565b620002fa81620002f3845462000238565b8462000274565b602080601f831160018114620003325760008415620003195750858301515b600019600386901b1c1916600185901b178555620002be565b600085815260208120601f198616915b82811015620003635788860151825594840194600190910190840162000342565b5085821015620003825787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620003e9578160001904821115620003cd57620003cd62000392565b80851615620003db57918102915b93841c9390800290620003ad565b509250929050565b6000826200040257506001620004a1565b816200041157506000620004a1565b81600181146200042a5760028114620004355762000455565b6001915050620004a1565b60ff84111562000449576200044962000392565b50506001821b620004a1565b5060208310610133831016604e8410600b84101617156200047a575081810a620004a1565b620004868383620003a8565b80600019048211156200049d576200049d62000392565b0290505b92915050565b60006200021b60ff841683620003f1565b8082028115828204841417620004a157620004a162000392565b80820180821115620004a157620004a162000392565b610fcd80620004f86000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a457c2d711610071578063a457c2d714610261578063a9059cbb14610274578063d83a2bf314610287578063dd62ed3e1461029a578063f3748af9146102ad57600080fd5b806370a08231146101f75780637a351a1d146102205780638da5cb5b1461023357806395d89b41146102465780639dc29fac1461024e57600080fd5b8063313ce567116100f4578063313ce5671461018c57806332cb6b0c1461019b57806339509351146101a457806340c10f19146101b75780634626402b146101cc57600080fd5b806306fdde0314610126578063095ea7b31461014457806318160ddd1461016757806323b872dd14610179575b600080fd5b61012e6102b5565b60405161013b9190610cc3565b60405180910390f35b610157610152366004610d29565b610347565b604051901515815260200161013b565b6002545b60405190815260200161013b565b610157610187366004610d55565b610361565b6040516012815260200161013b565b61016b60055481565b6101576101b2366004610d29565b610385565b6101ca6101c5366004610d29565b6103a7565b005b6007546101df906001600160a01b031681565b6040516001600160a01b03909116815260200161013b565b61016b610205366004610d96565b6001600160a01b031660009081526020819052604090205490565b6101ca61022e366004610d96565b6104ab565b6006546101df906001600160a01b031681565b61012e61053d565b6101ca61025c366004610d29565b61054c565b61015761026f366004610d29565b610595565b610157610282366004610d29565b610610565b610157610295366004610d55565b61061e565b61016b6102a8366004610dba565b61063a565b6101ca610665565b6060600380546102c490610df3565b80601f01602080910402602001604051908101604052809291908181526020018280546102f090610df3565b801561033d5780601f106103125761010080835404028352916020019161033d565b820191906000526020600020905b81548152906001019060200180831161032057829003601f168201915b5050505050905090565b60003361035581858561071a565b60019150505b92915050565b60003361036f85828561083e565b61037a8585856108b8565b506001949350505050565b600033610355818585610398838361063a565b6103a29190610e43565b61071a565b6006546001600160a01b031633146103da5760405162461bcd60e51b81526004016103d190610e56565b60405180910390fd5b6001600160a01b0382166104305760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d1565b6005548161043d60025490565b6104479190610e43565b11156104885760405162461bcd60e51b815260206004820152601060248201526f41424f56455f4d41585f535550504c5960801b60448201526064016103d1565b6104a7826104986012600a610f5e565b6104a29084610f6d565b6108c8565b5050565b6006546001600160a01b031633146104d55760405162461bcd60e51b81526004016103d190610e56565b6008546001600160a01b03161561051b5760405162461bcd60e51b815260206004820152600a60248201526957524954455f4f4e434560b01b60448201526064016103d1565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b6060600480546102c490610df3565b6006546001600160a01b031633146105765760405162461bcd60e51b81526004016103d190610e56565b6104a7826105866012600a610f5e565b6105909084610f6d565b6109a7565b600033816105a3828661063a565b9050838110156106035760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103d1565b61037a828686840361071a565b6000336103558185856108b8565b6000610630848484610398333061063a565b5060019392505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6006546001600160a01b0316331461068f5760405162461bcd60e51b81526004016103d190610e56565b600061069d6012600a610f5e565b6106aa90620186a0610f6d565b6008549091506106c59030906001600160a01b031683610af5565b3060008181526020819052604090205460075490916106ed916001600160a01b031683610af5565b6040517fede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa790600090a15050565b6001600160a01b03831661077c5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d1565b6001600160a01b0382166107dd5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d1565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061084a848461063a565b905060001981146108b257818110156108a55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103d1565b6108b2848484840361071a565b50505050565b6108c3838383610af5565b505050565b6001600160a01b03821661091e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d1565b80600260008282546109309190610e43565b90915550506001600160a01b0382166000908152602081905260408120805483929061095d908490610e43565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610a075760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103d1565b6001600160a01b03821660009081526020819052604090205481811015610a7b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103d1565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610aaa908490610f84565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038316610b595760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d1565b6001600160a01b038216610bbb5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d1565b6001600160a01b03831660009081526020819052604090205481811015610c335760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103d1565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610c6a908490610e43565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cb691815260200190565b60405180910390a36108b2565b600060208083528351808285015260005b81811015610cf057858101830151858201604001528201610cd4565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b0381168114610d2657600080fd5b50565b60008060408385031215610d3c57600080fd5b8235610d4781610d11565b946020939093013593505050565b600080600060608486031215610d6a57600080fd5b8335610d7581610d11565b92506020840135610d8581610d11565b929592945050506040919091013590565b600060208284031215610da857600080fd5b8135610db381610d11565b9392505050565b60008060408385031215610dcd57600080fd5b8235610dd881610d11565b91506020830135610de881610d11565b809150509250929050565b600181811c90821680610e0757607f821691505b602082108103610e2757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561035b5761035b610e2d565b6020808252600a90820152694f574e45525f4f4e4c5960b01b604082015260600190565b600181815b80851115610eb5578160001904821115610e9b57610e9b610e2d565b80851615610ea857918102915b93841c9390800290610e7f565b509250929050565b600082610ecc5750600161035b565b81610ed95750600061035b565b8160018114610eef5760028114610ef957610f15565b600191505061035b565b60ff841115610f0a57610f0a610e2d565b50506001821b61035b565b5060208310610133831016604e8410600b8410161715610f38575081810a61035b565b610f428383610e7a565b8060001904821115610f5657610f56610e2d565b029392505050565b6000610db360ff841683610ebd565b808202811582820484141761035b5761035b610e2d565b8181038181111561035b5761035b610e2d56fea2646970667358221220086ba678d7d3fe3dac3a48ea62c9ee5df53ad7881e2b3bbba9df46abaa33f10864736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a457c2d711610071578063a457c2d714610261578063a9059cbb14610274578063d83a2bf314610287578063dd62ed3e1461029a578063f3748af9146102ad57600080fd5b806370a08231146101f75780637a351a1d146102205780638da5cb5b1461023357806395d89b41146102465780639dc29fac1461024e57600080fd5b8063313ce567116100f4578063313ce5671461018c57806332cb6b0c1461019b57806339509351146101a457806340c10f19146101b75780634626402b146101cc57600080fd5b806306fdde0314610126578063095ea7b31461014457806318160ddd1461016757806323b872dd14610179575b600080fd5b61012e6102b5565b60405161013b9190610cc3565b60405180910390f35b610157610152366004610d29565b610347565b604051901515815260200161013b565b6002545b60405190815260200161013b565b610157610187366004610d55565b610361565b6040516012815260200161013b565b61016b60055481565b6101576101b2366004610d29565b610385565b6101ca6101c5366004610d29565b6103a7565b005b6007546101df906001600160a01b031681565b6040516001600160a01b03909116815260200161013b565b61016b610205366004610d96565b6001600160a01b031660009081526020819052604090205490565b6101ca61022e366004610d96565b6104ab565b6006546101df906001600160a01b031681565b61012e61053d565b6101ca61025c366004610d29565b61054c565b61015761026f366004610d29565b610595565b610157610282366004610d29565b610610565b610157610295366004610d55565b61061e565b61016b6102a8366004610dba565b61063a565b6101ca610665565b6060600380546102c490610df3565b80601f01602080910402602001604051908101604052809291908181526020018280546102f090610df3565b801561033d5780601f106103125761010080835404028352916020019161033d565b820191906000526020600020905b81548152906001019060200180831161032057829003601f168201915b5050505050905090565b60003361035581858561071a565b60019150505b92915050565b60003361036f85828561083e565b61037a8585856108b8565b506001949350505050565b600033610355818585610398838361063a565b6103a29190610e43565b61071a565b6006546001600160a01b031633146103da5760405162461bcd60e51b81526004016103d190610e56565b60405180910390fd5b6001600160a01b0382166104305760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d1565b6005548161043d60025490565b6104479190610e43565b11156104885760405162461bcd60e51b815260206004820152601060248201526f41424f56455f4d41585f535550504c5960801b60448201526064016103d1565b6104a7826104986012600a610f5e565b6104a29084610f6d565b6108c8565b5050565b6006546001600160a01b031633146104d55760405162461bcd60e51b81526004016103d190610e56565b6008546001600160a01b03161561051b5760405162461bcd60e51b815260206004820152600a60248201526957524954455f4f4e434560b01b60448201526064016103d1565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b6060600480546102c490610df3565b6006546001600160a01b031633146105765760405162461bcd60e51b81526004016103d190610e56565b6104a7826105866012600a610f5e565b6105909084610f6d565b6109a7565b600033816105a3828661063a565b9050838110156106035760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103d1565b61037a828686840361071a565b6000336103558185856108b8565b6000610630848484610398333061063a565b5060019392505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6006546001600160a01b0316331461068f5760405162461bcd60e51b81526004016103d190610e56565b600061069d6012600a610f5e565b6106aa90620186a0610f6d565b6008549091506106c59030906001600160a01b031683610af5565b3060008181526020819052604090205460075490916106ed916001600160a01b031683610af5565b6040517fede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa790600090a15050565b6001600160a01b03831661077c5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d1565b6001600160a01b0382166107dd5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d1565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061084a848461063a565b905060001981146108b257818110156108a55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103d1565b6108b2848484840361071a565b50505050565b6108c3838383610af5565b505050565b6001600160a01b03821661091e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d1565b80600260008282546109309190610e43565b90915550506001600160a01b0382166000908152602081905260408120805483929061095d908490610e43565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610a075760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103d1565b6001600160a01b03821660009081526020819052604090205481811015610a7b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103d1565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610aaa908490610f84565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038316610b595760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d1565b6001600160a01b038216610bbb5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d1565b6001600160a01b03831660009081526020819052604090205481811015610c335760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103d1565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610c6a908490610e43565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cb691815260200190565b60405180910390a36108b2565b600060208083528351808285015260005b81811015610cf057858101830151858201604001528201610cd4565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b0381168114610d2657600080fd5b50565b60008060408385031215610d3c57600080fd5b8235610d4781610d11565b946020939093013593505050565b600080600060608486031215610d6a57600080fd5b8335610d7581610d11565b92506020840135610d8581610d11565b929592945050506040919091013590565b600060208284031215610da857600080fd5b8135610db381610d11565b9392505050565b60008060408385031215610dcd57600080fd5b8235610dd881610d11565b91506020830135610de881610d11565b809150509250929050565b600181811c90821680610e0757607f821691505b602082108103610e2757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561035b5761035b610e2d565b6020808252600a90820152694f574e45525f4f4e4c5960b01b604082015260600190565b600181815b80851115610eb5578160001904821115610e9b57610e9b610e2d565b80851615610ea857918102915b93841c9390800290610e7f565b509250929050565b600082610ecc5750600161035b565b81610ed95750600061035b565b8160018114610eef5760028114610ef957610f15565b600191505061035b565b60ff841115610f0a57610f0a610e2d565b50506001821b61035b565b5060208310610133831016604e8410600b8410161715610f38575081810a61035b565b610f428383610e7a565b8060001904821115610f5657610f56610e2d565b029392505050565b6000610db360ff841683610ebd565b808202811582820484141761035b5761035b610e2d565b8181038181111561035b5761035b610e2d56fea2646970667358221220086ba678d7d3fe3dac3a48ea62c9ee5df53ad7881e2b3bbba9df46abaa33f10864736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:5395:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "103:209:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "149:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "158:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "161:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "151:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "151:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "151:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "124:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "133:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "120:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "120:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "145:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "116:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "116:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "113:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "174:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "193:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "187:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:16:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "178:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "266:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "275:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "278:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "268:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "268:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "268:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "225:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "236:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "251:3:37",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "256:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "247:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "247:11:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "260:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "243:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "243:19:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "232:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "232:31:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "222:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "222:42:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "215:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "215:50:37"
                  },
                  "nodeType": "YulIf",
                  "src": "212:70:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "291:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "301:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "291:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_payable_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "69:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "80:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "92:6:37",
                "type": ""
              }
            ],
            "src": "14:298:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "349:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "366:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "373:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "378:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "369:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "369:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "359:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "359:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "359:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "406:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "409:4:37",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "399:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "399:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "399:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "430:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "433:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "423:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "423:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "423:15:37"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "317:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "504:325:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "514:22:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "528:1:37",
                        "type": "",
                        "value": "1"
                      },
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "531:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "524:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "524:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "514:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "545:38:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "575:4:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "581:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "571:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "571:12:37"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "549:18:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "622:31:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "624:27:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "638:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "646:4:37",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "634:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "634:17:37"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "624:6:37"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "602:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "595:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "595:26:37"
                  },
                  "nodeType": "YulIf",
                  "src": "592:61:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "712:111:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "733:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "740:3:37",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "745:10:37",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "736:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "736:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "726:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "726:31:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "726:31:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "777:1:37",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "780:4:37",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "770:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "770:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "770:15:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "805:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "808:4:37",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "798:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "798:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "798:15:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "668:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "691:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "699:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "688:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "688:14:37"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "665:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "665:38:37"
                  },
                  "nodeType": "YulIf",
                  "src": "662:161:37"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "484:4:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "493:6:37",
                "type": ""
              }
            ],
            "src": "449:380:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "890:65:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "907:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "910:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "900:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "900:14:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "900:14:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "923:26:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "941:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "944:4:37",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "931:9:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "931:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "923:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "873:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "881:4:37",
                "type": ""
              }
            ],
            "src": "834:121:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1041:464:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1074:425:37",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1088:11:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1098:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "_1",
                            "nodeType": "YulTypedName",
                            "src": "1092:2:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1119:2:37"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "1123:5:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1112:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1112:17:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1112:17:37"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1142:31:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1164:2:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1168:4:37",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "keccak256",
                            "nodeType": "YulIdentifier",
                            "src": "1154:9:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1154:19:37"
                        },
                        "variables": [
                          {
                            "name": "data",
                            "nodeType": "YulTypedName",
                            "src": "1146:4:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1186:57:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "1209:4:37"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1219:1:37",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "startIndex",
                                      "nodeType": "YulIdentifier",
                                      "src": "1226:10:37"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1238:2:37",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1222:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1222:19:37"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nodeType": "YulIdentifier",
                                "src": "1215:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1215:27:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1205:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1205:38:37"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "1190:11:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1280:23:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1282:19:37",
                              "value": {
                                "name": "data",
                                "nodeType": "YulIdentifier",
                                "src": "1297:4:37"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1282:11:37"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "startIndex",
                              "nodeType": "YulIdentifier",
                              "src": "1262:10:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1274:4:37",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1259:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1259:20:37"
                        },
                        "nodeType": "YulIf",
                        "src": "1256:47:37"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1316:41:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "1330:4:37"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1340:1:37",
                                  "type": "",
                                  "value": "5"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "1347:3:37"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1352:2:37",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1343:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1343:12:37"
                                }
                              ],
                              "functionName": {
                                "name": "shr",
                                "nodeType": "YulIdentifier",
                                "src": "1336:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1336:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1326:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1326:31:37"
                        },
                        "variables": [
                          {
                            "name": "_2",
                            "nodeType": "YulTypedName",
                            "src": "1320:2:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1370:24:37",
                        "value": {
                          "name": "deleteStart",
                          "nodeType": "YulIdentifier",
                          "src": "1383:11:37"
                        },
                        "variables": [
                          {
                            "name": "start",
                            "nodeType": "YulTypedName",
                            "src": "1374:5:37",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1468:21:37",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "1477:5:37"
                                  },
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "1484:2:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "1470:6:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1470:17:37"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1470:17:37"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "1418:5:37"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1425:2:37"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1415:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1415:13:37"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "1429:26:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1431:22:37",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "1444:5:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1451:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1440:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1440:13:37"
                              },
                              "variableNames": [
                                {
                                  "name": "start",
                                  "nodeType": "YulIdentifier",
                                  "src": "1431:5:37"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "1411:3:37",
                          "statements": []
                        },
                        "src": "1407:82:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "1057:3:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1062:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1054:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1054:11:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1051:448:37"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "1013:5:37",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "1020:3:37",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "1025:10:37",
                "type": ""
              }
            ],
            "src": "960:545:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1595:81:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1605:65:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "data",
                            "nodeType": "YulIdentifier",
                            "src": "1620:4:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1638:1:37",
                                        "type": "",
                                        "value": "3"
                                      },
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "1641:3:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "1634:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1634:11:37"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1651:1:37",
                                        "type": "",
                                        "value": "0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "1647:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1647:6:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1630:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1630:24:37"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "1626:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1626:29:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1616:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1616:40:37"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1662:1:37",
                            "type": "",
                            "value": "1"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "1665:3:37"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "1658:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1658:11:37"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1613:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1613:57:37"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "1605:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "extract_used_part_and_set_length_of_short_byte_array",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "1572:4:37",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "1578:3:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "1586:4:37",
                "type": ""
              }
            ],
            "src": "1510:166:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1777:1256:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1787:24:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "1807:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1801:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1801:10:37"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "1791:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1854:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "1856:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1856:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1856:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "1826:6:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1842:2:37",
                                "type": "",
                                "value": "64"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1846:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "1838:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1838:10:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1850:1:37",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1834:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1834:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1823:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1823:30:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1820:56:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "1929:4:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "1967:4:37"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "1961:5:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1961:11:37"
                          }
                        ],
                        "functionName": {
                          "name": "extract_byte_array_length",
                          "nodeType": "YulIdentifier",
                          "src": "1935:25:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1935:38:37"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "1975:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "1885:43:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1885:97:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1885:97:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1991:18:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2008:1:37",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "1995:9:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2018:23:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2037:4:37",
                    "type": "",
                    "value": "0x20"
                  },
                  "variables": [
                    {
                      "name": "srcOffset_1",
                      "nodeType": "YulTypedName",
                      "src": "2022:11:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2050:24:37",
                  "value": {
                    "name": "srcOffset_1",
                    "nodeType": "YulIdentifier",
                    "src": "2063:11:37"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "2050:9:37"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2120:656:37",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2134:35:37",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "2153:6:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2165:2:37",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "2161:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2161:7:37"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "2149:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2149:20:37"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "2138:7:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2182:49:37",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2226:4:37"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "2196:29:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2196:35:37"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "2186:6:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2244:10:37",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2253:1:37",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "2248:1:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2331:172:37",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "2356:6:37"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "2374:3:37"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "2379:9:37"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "2370:3:37"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2370:19:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "2364:5:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2364:26:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "2349:6:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2349:42:37"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "2349:42:37"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2408:24:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "2422:6:37"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2430:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2418:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2418:14:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "2408:6:37"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2449:40:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "2466:9:37"
                                      },
                                      {
                                        "name": "srcOffset_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "2477:11:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2462:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2462:27:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "2449:9:37"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "2278:1:37"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2281:7:37"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "2275:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2275:14:37"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "2290:28:37",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2292:24:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "2301:1:37"
                                      },
                                      {
                                        "name": "srcOffset_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "2304:11:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2297:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2297:19:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "2292:1:37"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "2271:3:37",
                              "statements": []
                            },
                            "src": "2267:236:37"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2551:166:37",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "2569:43:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "2596:3:37"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "2601:9:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "2592:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2592:19:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "2586:5:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2586:26:37"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "2573:9:37",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "2636:6:37"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "2648:9:37"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "arguments": [
                                                  {
                                                    "arguments": [
                                                      {
                                                        "arguments": [
                                                          {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2675:1:37",
                                                            "type": "",
                                                            "value": "3"
                                                          },
                                                          {
                                                            "name": "newLen",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2678:6:37"
                                                          }
                                                        ],
                                                        "functionName": {
                                                          "name": "shl",
                                                          "nodeType": "YulIdentifier",
                                                          "src": "2671:3:37"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2671:14:37"
                                                      },
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2687:3:37",
                                                        "type": "",
                                                        "value": "248"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "and",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "2667:3:37"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2667:24:37"
                                                  },
                                                  {
                                                    "arguments": [
                                                      {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2697:1:37",
                                                        "type": "",
                                                        "value": "0"
                                                      }
                                                    ],
                                                    "functionName": {
                                                      "name": "not",
                                                      "nodeType": "YulIdentifier",
                                                      "src": "2693:3:37"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2693:6:37"
                                                  }
                                                ],
                                                "functionName": {
                                                  "name": "shr",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2663:3:37"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2663:37:37"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "not",
                                              "nodeType": "YulIdentifier",
                                              "src": "2659:3:37"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "2659:42:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "and",
                                          "nodeType": "YulIdentifier",
                                          "src": "2644:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2644:58:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "2629:6:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2629:74:37"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "2629:74:37"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2522:7:37"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "2531:6:37"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "2519:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2519:19:37"
                            },
                            "nodeType": "YulIf",
                            "src": "2516:201:37"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2737:4:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2751:1:37",
                                          "type": "",
                                          "value": "1"
                                        },
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "2754:6:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "2747:3:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2747:14:37"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2763:1:37",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2743:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2743:22:37"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "2730:6:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2730:36:37"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2730:36:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "2113:663:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2118:1:37",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2793:234:37",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2807:14:37",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2820:1:37",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "2811:5:37",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "2856:67:37",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "2874:35:37",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "2893:3:37"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "2898:9:37"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "2889:3:37"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2889:19:37"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "2883:5:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2883:26:37"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "2874:5:37"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "2837:6:37"
                            },
                            "nodeType": "YulIf",
                            "src": "2834:89:37"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "2943:4:37"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "3002:5:37"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "3009:6:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "2949:52:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2949:67:37"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "2936:6:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2936:81:37"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2936:81:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "2785:242:37",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "2093:6:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2101:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2090:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2090:14:37"
                  },
                  "nodeType": "YulSwitch",
                  "src": "2083:944:37"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "1762:4:37",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1768:3:37",
                "type": ""
              }
            ],
            "src": "1681:1352:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3070:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3087:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3094:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3099:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "3090:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3090:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3080:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3080:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3080:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3127:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3130:4:37",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3120:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3120:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3120:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3151:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3154:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3144:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3144:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3144:15:37"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "3038:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3234:358:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3244:16:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "3259:1:37",
                    "type": "",
                    "value": "1"
                  },
                  "variables": [
                    {
                      "name": "power_1",
                      "nodeType": "YulTypedName",
                      "src": "3248:7:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3269:16:37",
                  "value": {
                    "name": "power_1",
                    "nodeType": "YulIdentifier",
                    "src": "3278:7:37"
                  },
                  "variableNames": [
                    {
                      "name": "power",
                      "nodeType": "YulIdentifier",
                      "src": "3269:5:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3294:13:37",
                  "value": {
                    "name": "_base",
                    "nodeType": "YulIdentifier",
                    "src": "3302:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "base",
                      "nodeType": "YulIdentifier",
                      "src": "3294:4:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3358:228:37",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3403:22:37",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "3405:16:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3405:18:37"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3405:18:37"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "3378:4:37"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "3392:1:37",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "3388:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3388:6:37"
                                },
                                {
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "3396:4:37"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "3384:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3384:17:37"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "3375:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3375:27:37"
                        },
                        "nodeType": "YulIf",
                        "src": "3372:53:37"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3464:29:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "3466:25:37",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "power",
                                    "nodeType": "YulIdentifier",
                                    "src": "3479:5:37"
                                  },
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "3486:4:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "mul",
                                  "nodeType": "YulIdentifier",
                                  "src": "3475:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3475:16:37"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "3466:5:37"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "3445:8:37"
                            },
                            {
                              "name": "power_1",
                              "nodeType": "YulIdentifier",
                              "src": "3455:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "3441:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3441:22:37"
                        },
                        "nodeType": "YulIf",
                        "src": "3438:55:37"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3506:23:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "3518:4:37"
                            },
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "3524:4:37"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "3514:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3514:15:37"
                        },
                        "variableNames": [
                          {
                            "name": "base",
                            "nodeType": "YulIdentifier",
                            "src": "3506:4:37"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3542:34:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "power_1",
                              "nodeType": "YulIdentifier",
                              "src": "3558:7:37"
                            },
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "3567:8:37"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "3554:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3554:22:37"
                        },
                        "variableNames": [
                          {
                            "name": "exponent",
                            "nodeType": "YulIdentifier",
                            "src": "3542:8:37"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "exponent",
                        "nodeType": "YulIdentifier",
                        "src": "3327:8:37"
                      },
                      {
                        "name": "power_1",
                        "nodeType": "YulIdentifier",
                        "src": "3337:7:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3324:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3324:21:37"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "3346:3:37",
                    "statements": []
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "3320:3:37",
                    "statements": []
                  },
                  "src": "3316:270:37"
                }
              ]
            },
            "name": "checked_exp_helper",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "_base",
                "nodeType": "YulTypedName",
                "src": "3198:5:37",
                "type": ""
              },
              {
                "name": "exponent",
                "nodeType": "YulTypedName",
                "src": "3205:8:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "power",
                "nodeType": "YulTypedName",
                "src": "3218:5:37",
                "type": ""
              },
              {
                "name": "base",
                "nodeType": "YulTypedName",
                "src": "3225:4:37",
                "type": ""
              }
            ],
            "src": "3170:422:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3656:747:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3694:52:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3708:10:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3717:1:37",
                          "type": "",
                          "value": "1"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "3708:5:37"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulLeave",
                        "src": "3731:5:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "exponent",
                        "nodeType": "YulIdentifier",
                        "src": "3676:8:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3669:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3669:16:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3666:80:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3779:52:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3793:10:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3802:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "3793:5:37"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulLeave",
                        "src": "3816:5:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "3765:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3758:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3758:12:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3755:76:37"
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3867:52:37",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "3881:10:37",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3890:1:37",
                              "type": "",
                              "value": "1"
                            },
                            "variableNames": [
                              {
                                "name": "power",
                                "nodeType": "YulIdentifier",
                                "src": "3881:5:37"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulLeave",
                            "src": "3904:5:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "3860:59:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3865:1:37",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3935:123:37",
                        "statements": [
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "3970:22:37",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "panic_error_0x11",
                                      "nodeType": "YulIdentifier",
                                      "src": "3972:16:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3972:18:37"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "3972:18:37"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "3955:8:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3965:3:37",
                                  "type": "",
                                  "value": "255"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "3952:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3952:17:37"
                            },
                            "nodeType": "YulIf",
                            "src": "3949:43:37"
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4005:25:37",
                            "value": {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "4018:8:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4028:1:37",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "4014:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4014:16:37"
                            },
                            "variableNames": [
                              {
                                "name": "power",
                                "nodeType": "YulIdentifier",
                                "src": "4005:5:37"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulLeave",
                            "src": "4043:5:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "3928:130:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3933:1:37",
                        "type": "",
                        "value": "2"
                      }
                    }
                  ],
                  "expression": {
                    "name": "base",
                    "nodeType": "YulIdentifier",
                    "src": "3847:4:37"
                  },
                  "nodeType": "YulSwitch",
                  "src": "3840:218:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4156:70:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4170:28:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "4183:4:37"
                            },
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "4189:8:37"
                            }
                          ],
                          "functionName": {
                            "name": "exp",
                            "nodeType": "YulIdentifier",
                            "src": "4179:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4179:19:37"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "4170:5:37"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulLeave",
                        "src": "4211:5:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "4080:4:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4086:2:37",
                                "type": "",
                                "value": "11"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "4077:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4077:12:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "4094:8:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4104:2:37",
                                "type": "",
                                "value": "78"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "4091:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4091:16:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4073:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4073:35:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "4117:4:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4123:3:37",
                                "type": "",
                                "value": "307"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "4114:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4114:13:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "4132:8:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4142:2:37",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "4129:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4129:16:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4110:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4110:36:37"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "4070:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4070:77:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4067:159:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4235:57:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "4277:4:37"
                      },
                      {
                        "name": "exponent",
                        "nodeType": "YulIdentifier",
                        "src": "4283:8:37"
                      }
                    ],
                    "functionName": {
                      "name": "checked_exp_helper",
                      "nodeType": "YulIdentifier",
                      "src": "4258:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4258:34:37"
                  },
                  "variables": [
                    {
                      "name": "power_1",
                      "nodeType": "YulTypedName",
                      "src": "4239:7:37",
                      "type": ""
                    },
                    {
                      "name": "base_1",
                      "nodeType": "YulTypedName",
                      "src": "4248:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4337:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "4339:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4339:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4339:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "power_1",
                        "nodeType": "YulIdentifier",
                        "src": "4307:7:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4324:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "4320:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4320:6:37"
                          },
                          {
                            "name": "base_1",
                            "nodeType": "YulIdentifier",
                            "src": "4328:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "div",
                          "nodeType": "YulIdentifier",
                          "src": "4316:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4316:19:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4304:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4304:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4301:58:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4368:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "power_1",
                        "nodeType": "YulIdentifier",
                        "src": "4381:7:37"
                      },
                      {
                        "name": "base_1",
                        "nodeType": "YulIdentifier",
                        "src": "4390:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "4377:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4377:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "power",
                      "nodeType": "YulIdentifier",
                      "src": "4368:5:37"
                    }
                  ]
                }
              ]
            },
            "name": "checked_exp_unsigned",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "base",
                "nodeType": "YulTypedName",
                "src": "3627:4:37",
                "type": ""
              },
              {
                "name": "exponent",
                "nodeType": "YulTypedName",
                "src": "3633:8:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "power",
                "nodeType": "YulTypedName",
                "src": "3646:5:37",
                "type": ""
              }
            ],
            "src": "3597:806:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4476:72:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4486:56:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "4516:4:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "exponent",
                            "nodeType": "YulIdentifier",
                            "src": "4526:8:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4536:4:37",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4522:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4522:19:37"
                      }
                    ],
                    "functionName": {
                      "name": "checked_exp_unsigned",
                      "nodeType": "YulIdentifier",
                      "src": "4495:20:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4495:47:37"
                  },
                  "variableNames": [
                    {
                      "name": "power",
                      "nodeType": "YulIdentifier",
                      "src": "4486:5:37"
                    }
                  ]
                }
              ]
            },
            "name": "checked_exp_t_uint256_t_uint8",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "base",
                "nodeType": "YulTypedName",
                "src": "4447:4:37",
                "type": ""
              },
              {
                "name": "exponent",
                "nodeType": "YulTypedName",
                "src": "4453:8:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "power",
                "nodeType": "YulTypedName",
                "src": "4466:5:37",
                "type": ""
              }
            ],
            "src": "4408:140:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4605:116:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4615:20:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4630:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "4633:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "4626:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4626:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "4615:7:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4693:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "4695:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4695:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4695:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "4664:1:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "4657:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4657:9:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "4671:1:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "product",
                                    "nodeType": "YulIdentifier",
                                    "src": "4678:7:37"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "4687:1:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "4674:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4674:15:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "4668:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4668:22:37"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nodeType": "YulIdentifier",
                          "src": "4654:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4654:37:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4647:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4647:45:37"
                  },
                  "nodeType": "YulIf",
                  "src": "4644:71:37"
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "4584:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "4587:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "4593:7:37",
                "type": ""
              }
            ],
            "src": "4553:168:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4900:181:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4917:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4928:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4910:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4910:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4910:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4951:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4962:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4947:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4947:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4967:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4940:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4940:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4940:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4990:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5001:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4986:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4986:18:37"
                      },
                      {
                        "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5006:33:37",
                        "type": "",
                        "value": "ERC20: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4979:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4979:61:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4979:61:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5049:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5061:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5072:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5057:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5057:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5049:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4877:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4891:4:37",
                "type": ""
              }
            ],
            "src": "4726:355:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5134:77:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5144:16:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "5155:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "5158:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5151:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5151:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "5144:3:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5183:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "5185:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5185:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5185:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "5175:1:37"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "5178:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "5172:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5172:10:37"
                  },
                  "nodeType": "YulIf",
                  "src": "5169:36:37"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "5117:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "5120:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "5126:3:37",
                "type": ""
              }
            ],
            "src": "5086:125:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5317:76:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5327:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5339:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5350:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5335:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5335:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5327:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5369:9:37"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5380:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5362:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5362:25:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5362:25:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5286:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5297:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5308:4:37",
                "type": ""
              }
            ],
            "src": "5216:177:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_tuple_t_address_payable_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_exp_helper(_base, exponent) -> power, base\n    {\n        let power_1 := 1\n        power := power_1\n        base := _base\n        for { } gt(exponent, power_1) { }\n        {\n            if gt(base, div(not(0), base)) { panic_error_0x11() }\n            if and(exponent, power_1) { power := mul(power, base) }\n            base := mul(base, base)\n            exponent := shr(power_1, exponent)\n        }\n    }\n    function checked_exp_unsigned(base, exponent) -> power\n    {\n        if iszero(exponent)\n        {\n            power := 1\n            leave\n        }\n        if iszero(base)\n        {\n            power := 0\n            leave\n        }\n        switch base\n        case 1 {\n            power := 1\n            leave\n        }\n        case 2 {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := shl(exponent, 1)\n            leave\n        }\n        if or(and(lt(base, 11), lt(exponent, 78)), and(lt(base, 307), lt(exponent, 32)))\n        {\n            power := exp(base, exponent)\n            leave\n        }\n        let power_1, base_1 := checked_exp_helper(base, exponent)\n        if gt(power_1, div(not(0), base_1)) { panic_error_0x11() }\n        power := mul(power_1, base_1)\n    }\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power\n    {\n        power := checked_exp_unsigned(base, and(exponent, 0xff))\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:10708:37",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:37",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "135:427:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "145:12:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "155:2:37",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "149:2:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "173:9:37"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "184:2:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "166:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "166:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "166:21:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "196:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "216:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "210:5:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "210:13:37"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "200:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "243:9:37"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "254:2:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "239:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "239:18:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "259:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "232:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "232:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "232:34:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "275:10:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "284:1:37",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "279:1:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "344:90:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "373:9:37"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "384:1:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "369:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "369:17:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "388:2:37",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "365:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "365:26:37"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "value0",
                                          "nodeType": "YulIdentifier",
                                          "src": "407:6:37"
                                        },
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "415:1:37"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "403:3:37"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "403:14:37"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "419:2:37"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "399:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "399:23:37"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "393:5:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "393:30:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "358:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "358:66:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "358:66:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "305:1:37"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "308:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "302:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "302:13:37"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "316:19:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "318:15:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "327:1:37"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "330:2:37"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "323:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "323:10:37"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "318:1:37"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "298:3:37",
                    "statements": []
                  },
                  "src": "294:140:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "458:9:37"
                              },
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "469:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "454:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "454:22:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "478:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "450:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "450:31:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "483:1:37",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "443:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "443:42:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "443:42:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "494:62:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "510:9:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "529:6:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "537:2:37",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "525:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "525:15:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "546:2:37",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "542:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "542:7:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "521:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "521:29:37"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "506:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "506:45:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "553:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "502:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "502:54:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "494:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "104:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "115:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "126:4:37",
                "type": ""
              }
            ],
            "src": "14:548:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "612:86:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "676:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "685:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "688:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "678:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "678:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "678:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "635:5:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "646:5:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "661:3:37",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "666:1:37",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "657:3:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "657:11:37"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "670:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "653:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "653:19:37"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "642:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "642:31:37"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "632:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "632:42:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "625:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "625:50:37"
                  },
                  "nodeType": "YulIf",
                  "src": "622:70:37"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "601:5:37",
                "type": ""
              }
            ],
            "src": "567:131:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "790:228:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "836:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "845:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "848:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "838:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "838:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "838:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "811:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "820:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "807:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "807:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "832:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "803:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "803:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "800:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "861:36:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "887:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "874:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "874:23:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "865:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "931:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "906:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "906:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "906:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "946:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "956:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "946:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "970:42:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "997:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1008:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "993:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "993:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "980:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "980:32:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "970:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "748:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "759:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "771:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "779:6:37",
                "type": ""
              }
            ],
            "src": "703:315:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1118:92:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1128:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1140:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1151:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1136:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1136:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1128:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1170:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "1195:6:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "1188:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1188:14:37"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1181:6:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1181:22:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1163:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1163:41:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1163:41:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1087:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1098:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1109:4:37",
                "type": ""
              }
            ],
            "src": "1023:187:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1316:76:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1326:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1338:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1349:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1334:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1334:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1326:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1368:9:37"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1379:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1361:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1361:25:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1361:25:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1285:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1296:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1307:4:37",
                "type": ""
              }
            ],
            "src": "1215:177:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1501:352:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1547:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1556:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1559:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1549:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1549:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1549:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1522:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1531:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1518:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1518:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1543:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1514:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1514:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "1511:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1572:36:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1598:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1585:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1585:23:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1576:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1642:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1617:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1617:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1617:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1657:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1667:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1657:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1681:47:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1713:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1724:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1709:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1709:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1696:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1696:32:37"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "1685:7:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "1762:7:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1737:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1737:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1737:33:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1779:17:37",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "1789:7:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1779:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1805:42:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1832:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1843:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1828:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1828:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1815:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1815:32:37"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1805:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1451:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1462:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1474:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1482:6:37",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1490:6:37",
                "type": ""
              }
            ],
            "src": "1397:456:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1955:87:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1965:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1977:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1988:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1973:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1973:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1965:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2007:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2022:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2030:4:37",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2018:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2018:17:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2000:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2000:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2000:36:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1924:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1935:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1946:4:37",
                "type": ""
              }
            ],
            "src": "1858:184:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2164:102:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2174:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2186:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2197:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2182:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2182:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2174:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2216:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2231:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2247:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2252:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "2243:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2243:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2256:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "2239:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2239:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2227:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2227:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2209:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2209:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2209:51:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2133:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2144:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2155:4:37",
                "type": ""
              }
            ],
            "src": "2047:219:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2341:177:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2387:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2396:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2399:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2389:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2389:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2389:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2362:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2371:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2358:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2358:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2383:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2354:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2354:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2351:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2412:36:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2438:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2425:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2425:23:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2416:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2482:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "2457:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2457:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2457:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2497:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2507:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2497:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2307:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2318:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2330:6:37",
                "type": ""
              }
            ],
            "src": "2271:247:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2615:177:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2661:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2670:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2673:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2663:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2663:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2663:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2636:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2645:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2632:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2632:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2657:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2628:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2628:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "2625:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2686:36:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2712:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2699:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2699:23:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2690:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2756:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "2731:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2731:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2731:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2771:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2781:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2771:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_contract$_LiquidityPool_$6654",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2581:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2592:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2604:6:37",
                "type": ""
              }
            ],
            "src": "2523:269:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2898:102:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2908:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2920:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2931:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2916:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2916:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2908:4:37"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2950:9:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2965:6:37"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2981:3:37",
                                    "type": "",
                                    "value": "160"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2986:1:37",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "2977:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2977:11:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2990:1:37",
                                "type": "",
                                "value": "1"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "2973:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2973:19:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2961:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2961:32:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2943:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2943:51:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2943:51:37"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2867:9:37",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2878:6:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2889:4:37",
                "type": ""
              }
            ],
            "src": "2797:203:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3092:301:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3138:16:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3147:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3150:1:37",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3140:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3140:12:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3140:12:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3113:7:37"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3122:9:37"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3109:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3109:23:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3134:2:37",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3105:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3105:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3102:52:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3163:36:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3189:9:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3176:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3176:23:37"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3167:5:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3233:5:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "3208:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3208:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3208:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3248:15:37",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "3258:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3248:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3272:47:37",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3304:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3315:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3300:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3300:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3287:12:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3287:32:37"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "3276:7:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "3353:7:37"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "3328:24:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3328:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3328:33:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3370:17:37",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "3380:7:37"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "3370:6:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3050:9:37",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3061:7:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3073:6:37",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3081:6:37",
                "type": ""
              }
            ],
            "src": "3005:388:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3453:325:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3463:22:37",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3477:1:37",
                        "type": "",
                        "value": "1"
                      },
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3480:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "3473:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3473:12:37"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "3463:6:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3494:38:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3524:4:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3530:1:37",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "3520:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3520:12:37"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "3498:18:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3571:31:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3573:27:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3587:6:37"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3595:4:37",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "3583:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3583:17:37"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "3573:6:37"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "3551:18:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3544:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3544:26:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3541:61:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3661:111:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3682:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3689:3:37",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3694:10:37",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "3685:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3685:20:37"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3675:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3675:31:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3675:31:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3726:1:37",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3729:4:37",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3719:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3719:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3719:15:37"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3754:1:37",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3757:4:37",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3747:6:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3747:15:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3747:15:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "3617:18:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "3640:6:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3648:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "3637:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3637:14:37"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "3614:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3614:38:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3611:161:37"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "3433:4:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "3442:6:37",
                "type": ""
              }
            ],
            "src": "3398:380:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3815:95:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3832:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3839:3:37",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3844:10:37",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "3835:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3835:20:37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3825:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3825:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3825:31:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3872:1:37",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3875:4:37",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3865:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3865:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3865:15:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3896:1:37",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3899:4:37",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3889:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3889:15:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3889:15:37"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "3783:127:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3963:77:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3973:16:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "3984:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "3987:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3980:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3980:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "3973:3:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4012:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "4014:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4014:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4014:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "4004:1:37"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "4007:3:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4001:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4001:10:37"
                  },
                  "nodeType": "YulIf",
                  "src": "3998:36:37"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "3946:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "3949:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "3955:3:37",
                "type": ""
              }
            ],
            "src": "3915:125:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4219:160:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4236:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4247:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4229:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4229:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4229:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4270:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4281:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4266:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4266:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4286:2:37",
                        "type": "",
                        "value": "10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4259:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4259:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4259:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4309:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4320:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4305:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4305:18:37"
                      },
                      {
                        "hexValue": "4f574e45525f4f4e4c59",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4325:12:37",
                        "type": "",
                        "value": "OWNER_ONLY"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4298:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4298:40:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4298:40:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4347:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4359:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4370:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4355:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4355:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4347:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4196:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4210:4:37",
                "type": ""
              }
            ],
            "src": "4045:334:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4558:181:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4575:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4586:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4568:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4568:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4568:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4609:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4620:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4605:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4605:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4625:2:37",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4598:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4598:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4598:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4648:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4659:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4644:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4644:18:37"
                      },
                      {
                        "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4664:33:37",
                        "type": "",
                        "value": "ERC20: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4637:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4637:61:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4637:61:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4707:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4719:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4730:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4715:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4715:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4707:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4535:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4549:4:37",
                "type": ""
              }
            ],
            "src": "4384:355:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4918:166:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4935:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4946:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4928:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4928:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4928:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4969:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4980:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4965:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4965:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4985:2:37",
                        "type": "",
                        "value": "16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4958:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4958:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4958:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5008:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5019:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5004:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5004:18:37"
                      },
                      {
                        "hexValue": "41424f56455f4d41585f535550504c59",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5024:18:37",
                        "type": "",
                        "value": "ABOVE_MAX_SUPPLY"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4997:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4997:46:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4997:46:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5052:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5064:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5075:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5060:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5060:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5052:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4895:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4909:4:37",
                "type": ""
              }
            ],
            "src": "4744:340:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5153:358:37",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5163:16:37",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5178:1:37",
                    "type": "",
                    "value": "1"
                  },
                  "variables": [
                    {
                      "name": "power_1",
                      "nodeType": "YulTypedName",
                      "src": "5167:7:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5188:16:37",
                  "value": {
                    "name": "power_1",
                    "nodeType": "YulIdentifier",
                    "src": "5197:7:37"
                  },
                  "variableNames": [
                    {
                      "name": "power",
                      "nodeType": "YulIdentifier",
                      "src": "5188:5:37"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5213:13:37",
                  "value": {
                    "name": "_base",
                    "nodeType": "YulIdentifier",
                    "src": "5221:5:37"
                  },
                  "variableNames": [
                    {
                      "name": "base",
                      "nodeType": "YulIdentifier",
                      "src": "5213:4:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5277:228:37",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5322:22:37",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "5324:16:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5324:18:37"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5324:18:37"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "5297:4:37"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "5311:1:37",
                                      "type": "",
                                      "value": "0"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "5307:3:37"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5307:6:37"
                                },
                                {
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "5315:4:37"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "5303:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5303:17:37"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "5294:2:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5294:27:37"
                        },
                        "nodeType": "YulIf",
                        "src": "5291:53:37"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5383:29:37",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "5385:25:37",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "power",
                                    "nodeType": "YulIdentifier",
                                    "src": "5398:5:37"
                                  },
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "5405:4:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "mul",
                                  "nodeType": "YulIdentifier",
                                  "src": "5394:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5394:16:37"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "5385:5:37"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "5364:8:37"
                            },
                            {
                              "name": "power_1",
                              "nodeType": "YulIdentifier",
                              "src": "5374:7:37"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "5360:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5360:22:37"
                        },
                        "nodeType": "YulIf",
                        "src": "5357:55:37"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5425:23:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "5437:4:37"
                            },
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "5443:4:37"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "5433:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5433:15:37"
                        },
                        "variableNames": [
                          {
                            "name": "base",
                            "nodeType": "YulIdentifier",
                            "src": "5425:4:37"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5461:34:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "power_1",
                              "nodeType": "YulIdentifier",
                              "src": "5477:7:37"
                            },
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "5486:8:37"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "5473:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5473:22:37"
                        },
                        "variableNames": [
                          {
                            "name": "exponent",
                            "nodeType": "YulIdentifier",
                            "src": "5461:8:37"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "exponent",
                        "nodeType": "YulIdentifier",
                        "src": "5246:8:37"
                      },
                      {
                        "name": "power_1",
                        "nodeType": "YulIdentifier",
                        "src": "5256:7:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "5243:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5243:21:37"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "5265:3:37",
                    "statements": []
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "5239:3:37",
                    "statements": []
                  },
                  "src": "5235:270:37"
                }
              ]
            },
            "name": "checked_exp_helper",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "_base",
                "nodeType": "YulTypedName",
                "src": "5117:5:37",
                "type": ""
              },
              {
                "name": "exponent",
                "nodeType": "YulTypedName",
                "src": "5124:8:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "power",
                "nodeType": "YulTypedName",
                "src": "5137:5:37",
                "type": ""
              },
              {
                "name": "base",
                "nodeType": "YulTypedName",
                "src": "5144:4:37",
                "type": ""
              }
            ],
            "src": "5089:422:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5575:747:37",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5613:52:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5627:10:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5636:1:37",
                          "type": "",
                          "value": "1"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "5627:5:37"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulLeave",
                        "src": "5650:5:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "exponent",
                        "nodeType": "YulIdentifier",
                        "src": "5595:8:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5588:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5588:16:37"
                  },
                  "nodeType": "YulIf",
                  "src": "5585:80:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5698:52:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5712:10:37",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5721:1:37",
                          "type": "",
                          "value": "0"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "5712:5:37"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulLeave",
                        "src": "5735:5:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "5684:4:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "5677:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5677:12:37"
                  },
                  "nodeType": "YulIf",
                  "src": "5674:76:37"
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "5786:52:37",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "5800:10:37",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5809:1:37",
                              "type": "",
                              "value": "1"
                            },
                            "variableNames": [
                              {
                                "name": "power",
                                "nodeType": "YulIdentifier",
                                "src": "5800:5:37"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulLeave",
                            "src": "5823:5:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "5779:59:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5784:1:37",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "5854:123:37",
                        "statements": [
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "5889:22:37",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "panic_error_0x11",
                                      "nodeType": "YulIdentifier",
                                      "src": "5891:16:37"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5891:18:37"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "5891:18:37"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "5874:8:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5884:3:37",
                                  "type": "",
                                  "value": "255"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "5871:2:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5871:17:37"
                            },
                            "nodeType": "YulIf",
                            "src": "5868:43:37"
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5924:25:37",
                            "value": {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "5937:8:37"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5947:1:37",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "5933:3:37"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5933:16:37"
                            },
                            "variableNames": [
                              {
                                "name": "power",
                                "nodeType": "YulIdentifier",
                                "src": "5924:5:37"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulLeave",
                            "src": "5962:5:37"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "5847:130:37",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5852:1:37",
                        "type": "",
                        "value": "2"
                      }
                    }
                  ],
                  "expression": {
                    "name": "base",
                    "nodeType": "YulIdentifier",
                    "src": "5766:4:37"
                  },
                  "nodeType": "YulSwitch",
                  "src": "5759:218:37"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6075:70:37",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6089:28:37",
                        "value": {
                          "arguments": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "6102:4:37"
                            },
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "6108:8:37"
                            }
                          ],
                          "functionName": {
                            "name": "exp",
                            "nodeType": "YulIdentifier",
                            "src": "6098:3:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6098:19:37"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "6089:5:37"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulLeave",
                        "src": "6130:5:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "5999:4:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6005:2:37",
                                "type": "",
                                "value": "11"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "5996:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5996:12:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "6013:8:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6023:2:37",
                                "type": "",
                                "value": "78"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "6010:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6010:16:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "5992:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5992:35:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "6036:4:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6042:3:37",
                                "type": "",
                                "value": "307"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "6033:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6033:13:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "6051:8:37"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6061:2:37",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "6048:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6048:16:37"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "6029:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6029:36:37"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "5989:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5989:77:37"
                  },
                  "nodeType": "YulIf",
                  "src": "5986:159:37"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6154:57:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "6196:4:37"
                      },
                      {
                        "name": "exponent",
                        "nodeType": "YulIdentifier",
                        "src": "6202:8:37"
                      }
                    ],
                    "functionName": {
                      "name": "checked_exp_helper",
                      "nodeType": "YulIdentifier",
                      "src": "6177:18:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6177:34:37"
                  },
                  "variables": [
                    {
                      "name": "power_1",
                      "nodeType": "YulTypedName",
                      "src": "6158:7:37",
                      "type": ""
                    },
                    {
                      "name": "base_1",
                      "nodeType": "YulTypedName",
                      "src": "6167:6:37",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6256:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "6258:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6258:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6258:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "power_1",
                        "nodeType": "YulIdentifier",
                        "src": "6226:7:37"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6243:1:37",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "6239:3:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6239:6:37"
                          },
                          {
                            "name": "base_1",
                            "nodeType": "YulIdentifier",
                            "src": "6247:6:37"
                          }
                        ],
                        "functionName": {
                          "name": "div",
                          "nodeType": "YulIdentifier",
                          "src": "6235:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6235:19:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "6223:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6223:32:37"
                  },
                  "nodeType": "YulIf",
                  "src": "6220:58:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6287:29:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "power_1",
                        "nodeType": "YulIdentifier",
                        "src": "6300:7:37"
                      },
                      {
                        "name": "base_1",
                        "nodeType": "YulIdentifier",
                        "src": "6309:6:37"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "6296:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6296:20:37"
                  },
                  "variableNames": [
                    {
                      "name": "power",
                      "nodeType": "YulIdentifier",
                      "src": "6287:5:37"
                    }
                  ]
                }
              ]
            },
            "name": "checked_exp_unsigned",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "base",
                "nodeType": "YulTypedName",
                "src": "5546:4:37",
                "type": ""
              },
              {
                "name": "exponent",
                "nodeType": "YulTypedName",
                "src": "5552:8:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "power",
                "nodeType": "YulTypedName",
                "src": "5565:5:37",
                "type": ""
              }
            ],
            "src": "5516:806:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6395:72:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6405:56:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "6435:4:37"
                      },
                      {
                        "arguments": [
                          {
                            "name": "exponent",
                            "nodeType": "YulIdentifier",
                            "src": "6445:8:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6455:4:37",
                            "type": "",
                            "value": "0xff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "6441:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6441:19:37"
                      }
                    ],
                    "functionName": {
                      "name": "checked_exp_unsigned",
                      "nodeType": "YulIdentifier",
                      "src": "6414:20:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6414:47:37"
                  },
                  "variableNames": [
                    {
                      "name": "power",
                      "nodeType": "YulIdentifier",
                      "src": "6405:5:37"
                    }
                  ]
                }
              ]
            },
            "name": "checked_exp_t_uint256_t_uint8",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "base",
                "nodeType": "YulTypedName",
                "src": "6366:4:37",
                "type": ""
              },
              {
                "name": "exponent",
                "nodeType": "YulTypedName",
                "src": "6372:8:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "power",
                "nodeType": "YulTypedName",
                "src": "6385:5:37",
                "type": ""
              }
            ],
            "src": "6327:140:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6524:116:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6534:20:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6549:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "6552:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "6545:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6545:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "6534:7:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6612:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "6614:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6614:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6614:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "6583:1:37"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "6576:6:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6576:9:37"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "6590:1:37"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "product",
                                    "nodeType": "YulIdentifier",
                                    "src": "6597:7:37"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "6606:1:37"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "6593:3:37"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6593:15:37"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "6587:2:37"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6587:22:37"
                          }
                        ],
                        "functionName": {
                          "name": "or",
                          "nodeType": "YulIdentifier",
                          "src": "6573:2:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6573:37:37"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "6566:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6566:45:37"
                  },
                  "nodeType": "YulIf",
                  "src": "6563:71:37"
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "6503:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "6506:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "6512:7:37",
                "type": ""
              }
            ],
            "src": "6472:168:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6819:160:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6836:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6847:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6829:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6829:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6829:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6870:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6881:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6866:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6866:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6886:2:37",
                        "type": "",
                        "value": "10"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6859:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6859:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6859:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6909:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6920:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6905:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6905:18:37"
                      },
                      {
                        "hexValue": "57524954455f4f4e4345",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "6925:12:37",
                        "type": "",
                        "value": "WRITE_ONCE"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6898:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6898:40:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6898:40:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6947:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6959:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6970:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6955:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6955:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6947:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6796:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6810:4:37",
                "type": ""
              }
            ],
            "src": "6645:334:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7158:227:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7175:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7186:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7168:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7168:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7168:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7209:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7220:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7205:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7205:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7225:2:37",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7198:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7198:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7198:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7248:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7259:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7244:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7244:18:37"
                      },
                      {
                        "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7264:34:37",
                        "type": "",
                        "value": "ERC20: decreased allowance below"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7237:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7237:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7237:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7319:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7330:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7315:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7315:18:37"
                      },
                      {
                        "hexValue": "207a65726f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7335:7:37",
                        "type": "",
                        "value": " zero"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7308:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7308:35:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7308:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7352:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7364:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7375:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7360:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7360:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7352:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7135:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7149:4:37",
                "type": ""
              }
            ],
            "src": "6984:401:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7564:226:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7581:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7592:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7574:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7574:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7574:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7615:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7626:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7611:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7611:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7631:2:37",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7604:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7604:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7604:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7654:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7665:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7650:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7650:18:37"
                      },
                      {
                        "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7670:34:37",
                        "type": "",
                        "value": "ERC20: approve from the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7643:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7643:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7643:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7725:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7736:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7721:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7721:18:37"
                      },
                      {
                        "hexValue": "72657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7741:6:37",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7714:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7714:34:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7714:34:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7757:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7769:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7780:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7765:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7765:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7757:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7541:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7555:4:37",
                "type": ""
              }
            ],
            "src": "7390:400:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7969:224:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7986:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7997:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7979:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7979:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7979:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8020:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8031:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8016:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8016:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8036:2:37",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8009:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8009:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8009:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8059:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8070:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8055:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8055:18:37"
                      },
                      {
                        "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8075:34:37",
                        "type": "",
                        "value": "ERC20: approve to the zero addre"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8048:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8048:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8048:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8130:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8141:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8126:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8126:18:37"
                      },
                      {
                        "hexValue": "7373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8146:4:37",
                        "type": "",
                        "value": "ss"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8119:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8119:32:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8119:32:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8160:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8172:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8183:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8168:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8168:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8160:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7946:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7960:4:37",
                "type": ""
              }
            ],
            "src": "7795:398:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8372:179:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8389:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8400:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8382:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8382:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8382:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8423:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8434:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8419:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8419:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8439:2:37",
                        "type": "",
                        "value": "29"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8412:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8412:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8412:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8462:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8473:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8458:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8458:18:37"
                      },
                      {
                        "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8478:31:37",
                        "type": "",
                        "value": "ERC20: insufficient allowance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8451:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8451:59:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8451:59:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8519:26:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8531:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8542:2:37",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8527:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8527:18:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8519:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8349:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8363:4:37",
                "type": ""
              }
            ],
            "src": "8198:353:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8730:223:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8747:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8758:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8740:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8740:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8740:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8781:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8792:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8777:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8777:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8797:2:37",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8770:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8770:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8770:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8820:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8831:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8816:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8816:18:37"
                      },
                      {
                        "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8836:34:37",
                        "type": "",
                        "value": "ERC20: burn from the zero addres"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8809:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8809:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8809:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8891:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8902:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8887:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8887:18:37"
                      },
                      {
                        "hexValue": "73",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "8907:3:37",
                        "type": "",
                        "value": "s"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8880:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8880:31:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8880:31:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8920:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8932:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8943:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8928:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8928:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8920:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8707:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8721:4:37",
                "type": ""
              }
            ],
            "src": "8556:397:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9132:224:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9149:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9160:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9142:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9142:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9142:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9183:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9194:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9179:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9179:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9199:2:37",
                        "type": "",
                        "value": "34"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9172:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9172:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9172:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9222:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9233:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9218:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9218:18:37"
                      },
                      {
                        "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9238:34:37",
                        "type": "",
                        "value": "ERC20: burn amount exceeds balan"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9211:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9211:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9211:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9293:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9304:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9289:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9289:18:37"
                      },
                      {
                        "hexValue": "6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9309:4:37",
                        "type": "",
                        "value": "ce"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9282:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9282:32:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9282:32:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9323:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9335:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9346:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9331:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9331:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9323:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9109:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9123:4:37",
                "type": ""
              }
            ],
            "src": "8958:398:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9410:79:37",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9420:17:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9432:1:37"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9435:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "9428:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9428:9:37"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "9420:4:37"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9461:22:37",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "9463:16:37"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9463:18:37"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9463:18:37"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "9452:4:37"
                      },
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9458:1:37"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "9449:2:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9449:11:37"
                  },
                  "nodeType": "YulIf",
                  "src": "9446:37:37"
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "9392:1:37",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "9395:1:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "9401:4:37",
                "type": ""
              }
            ],
            "src": "9361:128:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9668:227:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9685:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9696:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9678:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9678:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9678:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9719:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9730:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9715:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9715:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9735:2:37",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9708:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9708:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9708:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9758:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9769:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9754:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9754:18:37"
                      },
                      {
                        "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9774:34:37",
                        "type": "",
                        "value": "ERC20: transfer from the zero ad"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9747:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9747:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9747:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9829:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9840:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9825:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9825:18:37"
                      },
                      {
                        "hexValue": "6472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9845:7:37",
                        "type": "",
                        "value": "dress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9818:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9818:35:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9818:35:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9862:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9874:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9885:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9870:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9870:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9862:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9645:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9659:4:37",
                "type": ""
              }
            ],
            "src": "9494:401:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10074:225:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10091:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10102:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10084:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10084:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10084:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10125:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10136:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10121:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10121:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10141:2:37",
                        "type": "",
                        "value": "35"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10114:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10114:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10114:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10164:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10175:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10160:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10160:18:37"
                      },
                      {
                        "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10180:34:37",
                        "type": "",
                        "value": "ERC20: transfer to the zero addr"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10153:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10153:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10153:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10235:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10246:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10231:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10231:18:37"
                      },
                      {
                        "hexValue": "657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10251:5:37",
                        "type": "",
                        "value": "ess"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10224:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10224:33:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10224:33:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10266:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10278:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10289:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10274:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10274:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10266:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10051:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10065:4:37",
                "type": ""
              }
            ],
            "src": "9900:399:37"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10478:228:37",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10495:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10506:2:37",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10488:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10488:21:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10488:21:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10529:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10540:2:37",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10525:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10525:18:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10545:2:37",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10518:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10518:30:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10518:30:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10568:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10579:2:37",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10564:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10564:18:37"
                      },
                      {
                        "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10584:34:37",
                        "type": "",
                        "value": "ERC20: transfer amount exceeds b"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10557:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10557:62:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10557:62:37"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10639:9:37"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10650:2:37",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10635:3:37"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10635:18:37"
                      },
                      {
                        "hexValue": "616c616e6365",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10655:8:37",
                        "type": "",
                        "value": "alance"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10628:6:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10628:36:37"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10628:36:37"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10673:27:37",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10685:9:37"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10696:3:37",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10681:3:37"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10681:19:37"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10673:4:37"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10455:9:37",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10469:4:37",
                "type": ""
              }
            ],
            "src": "10304:402:37"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        mstore(add(add(headStart, length), 64), 0)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_decode_tuple_t_contract$_LiquidityPool_$6654(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 10)\n        mstore(add(headStart, 64), \"OWNER_ONLY\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 16)\n        mstore(add(headStart, 64), \"ABOVE_MAX_SUPPLY\")\n        tail := add(headStart, 96)\n    }\n    function checked_exp_helper(_base, exponent) -> power, base\n    {\n        let power_1 := 1\n        power := power_1\n        base := _base\n        for { } gt(exponent, power_1) { }\n        {\n            if gt(base, div(not(0), base)) { panic_error_0x11() }\n            if and(exponent, power_1) { power := mul(power, base) }\n            base := mul(base, base)\n            exponent := shr(power_1, exponent)\n        }\n    }\n    function checked_exp_unsigned(base, exponent) -> power\n    {\n        if iszero(exponent)\n        {\n            power := 1\n            leave\n        }\n        if iszero(base)\n        {\n            power := 0\n            leave\n        }\n        switch base\n        case 1 {\n            power := 1\n            leave\n        }\n        case 2 {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := shl(exponent, 1)\n            leave\n        }\n        if or(and(lt(base, 11), lt(exponent, 78)), and(lt(base, 307), lt(exponent, 32)))\n        {\n            power := exp(base, exponent)\n            leave\n        }\n        let power_1, base_1 := checked_exp_helper(base, exponent)\n        if gt(power_1, div(not(0), base_1)) { panic_error_0x11() }\n        power := mul(power_1, base_1)\n    }\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power\n    {\n        power := checked_exp_unsigned(base, and(exponent, 0xff))\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 10)\n        mstore(add(headStart, 64), \"WRITE_ONCE\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: decreased allowance below\")\n        mstore(add(headStart, 96), \" zero\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC20: approve from the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: approve to the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 29)\n        mstore(add(headStart, 64), \"ERC20: insufficient allowance\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC20: burn from the zero addres\")\n        mstore(add(headStart, 96), \"s\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: burn amount exceeds balan\")\n        mstore(add(headStart, 96), \"ce\")\n        tail := add(headStart, 128)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: transfer from the zero ad\")\n        mstore(add(headStart, 96), \"dress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC20: transfer to the zero addr\")\n        mstore(add(headStart, 96), \"ess\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"ERC20: transfer amount exceeds b\")\n        mstore(add(headStart, 96), \"alance\")\n        tail := add(headStart, 128)\n    }\n}",
      "id": 37,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "429:2121:35:-:0;;;695:260;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1978:113:9;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;2052:5;2044;:13;;;;;;:::i;:::-;-1:-1:-1;2067:7:9;:17;2077:7;2067;:17;:::i;:::-;-1:-1:-1;797:10:35::1;::::0;-1:-1:-1;;3175:2:9;;3093:91;797:10:35::1;793:14;::::0;:2:::1;:14;:::i;:::-;784:23;::::0;:6:::1;:23;:::i;:::-;771:10;:36:::0;;;817:32:::1;::::0;831:4:::1;::::0;817:5:::1;:32::i;:::-;860:5;:18:::0;;868:10:::1;-1:-1:-1::0;;;;;;860:18:35;;::::1;;::::0;;;889:14:::1;:25:::0;;;;::::1;-1:-1:-1::0;;;;;889:25:35;;;::::1;::::0;;;::::1;::::0;;429:2121;;8402:389:9;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;4928:2:37;8477:65:9;;;4910:21:37;4967:2;4947:18;;;4940:30;5006:33;4986:18;;;4979:61;5057:18;;8477:65:9;;;;;;;;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;5362:25:37;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;5350:2:37;5335:18;8688:37:9;;;;;;;8402:389;;:::o;11786:121::-;;;;:::o;14:298:37:-;92:6;145:2;133:9;124:7;120:23;116:32;113:52;;;161:1;158;151:12;113:52;187:16;;-1:-1:-1;;;;;232:31:37;;222:42;;212:70;;278:1;275;268:12;212:70;301:5;14:298;-1:-1:-1;;;14:298:37:o;317:127::-;378:10;373:3;369:20;366:1;359:31;409:4;406:1;399:15;433:4;430:1;423:15;449:380;528:1;524:12;;;;571;;;592:61;;646:4;638:6;634:17;624:27;;592:61;699:2;691:6;688:14;668:18;665:38;662:161;;745:10;740:3;736:20;733:1;726:31;780:4;777:1;770:15;808:4;805:1;798:15;662:161;;449:380;;;:::o;960:545::-;1062:2;1057:3;1054:11;1051:448;;;1098:1;1123:5;1119:2;1112:17;1168:4;1164:2;1154:19;1238:2;1226:10;1222:19;1219:1;1215:27;1209:4;1205:38;1274:4;1262:10;1259:20;1256:47;;;-1:-1:-1;1297:4:37;1256:47;1352:2;1347:3;1343:12;1340:1;1336:20;1330:4;1326:31;1316:41;;1407:82;1425:2;1418:5;1415:13;1407:82;;;1470:17;;;1451:1;1440:13;1407:82;;;1411:3;;;960:545;;;:::o;1681:1352::-;1801:10;;-1:-1:-1;;;;;1823:30:37;;1820:56;;;1856:18;;:::i;:::-;1885:97;1975:6;1935:38;1967:4;1961:11;1935:38;:::i;:::-;1929:4;1885:97;:::i;:::-;2037:4;;2101:2;2090:14;;2118:1;2113:663;;;;2820:1;2837:6;2834:89;;;-1:-1:-1;2889:19:37;;;2883:26;2834:89;-1:-1:-1;;1638:1:37;1634:11;;;1630:24;1626:29;1616:40;1662:1;1658:11;;;1613:57;2936:81;;2083:944;;2113:663;907:1;900:14;;;944:4;931:18;;-1:-1:-1;;2149:20:37;;;2267:236;2281:7;2278:1;2275:14;2267:236;;;2370:19;;;2364:26;2349:42;;2462:27;;;;2430:1;2418:14;;;;2297:19;;2267:236;;;2271:3;2531:6;2522:7;2519:19;2516:201;;;2592:19;;;2586:26;-1:-1:-1;;2675:1:37;2671:14;;;2687:3;2667:24;2663:37;2659:42;2644:58;2629:74;;2516:201;-1:-1:-1;;;;;2763:1:37;2747:14;;;2743:22;2730:36;;-1:-1:-1;1681:1352:37:o;3038:127::-;3099:10;3094:3;3090:20;3087:1;3080:31;3130:4;3127:1;3120:15;3154:4;3151:1;3144:15;3170:422;3259:1;3302:5;3259:1;3316:270;3337:7;3327:8;3324:21;3316:270;;;3396:4;3392:1;3388:6;3384:17;3378:4;3375:27;3372:53;;;3405:18;;:::i;:::-;3455:7;3445:8;3441:22;3438:55;;;3475:16;;;;3438:55;3554:22;;;;3514:15;;;;3316:270;;;3320:3;3170:422;;;;;:::o;3597:806::-;3646:5;3676:8;3666:80;;-1:-1:-1;3717:1:37;3731:5;;3666:80;3765:4;3755:76;;-1:-1:-1;3802:1:37;3816:5;;3755:76;3847:4;3865:1;3860:59;;;;3933:1;3928:130;;;;3840:218;;3860:59;3890:1;3881:10;;3904:5;;;3928:130;3965:3;3955:8;3952:17;3949:43;;;3972:18;;:::i;:::-;-1:-1:-1;;4028:1:37;4014:16;;4043:5;;3840:218;;4142:2;4132:8;4129:16;4123:3;4117:4;4114:13;4110:36;4104:2;4094:8;4091:16;4086:2;4080:4;4077:12;4073:35;4070:77;4067:159;;;-1:-1:-1;4179:19:37;;;4211:5;;4067:159;4258:34;4283:8;4277:4;4258:34;:::i;:::-;4328:6;4324:1;4320:6;4316:19;4307:7;4304:32;4301:58;;;4339:18;;:::i;:::-;4377:20;;-1:-1:-1;3597:806:37;;;;;:::o;4408:140::-;4466:5;4495:47;4536:4;4526:8;4522:19;4516:4;4495:47;:::i;4553:168::-;4626:9;;;4657;;4674:15;;;4668:22;;4654:37;4644:71;;4695:18;;:::i;5086:125::-;5151:9;;;5172:10;;;5169:36;;;5185:18;;:::i;5216:177::-;429:2121:35;;;;;;",
  "deployedSourceMap": "429:2121:35:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98:9;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;:::i;:::-;;:::i;:::-;;;1188:14:37;;1181:22;1163:41;;1151:2;1136:18;4433:197:9;1023:187:37;3244:106:9;3331:12;;3244:106;;;1361:25:37;;;1349:2;1334:18;3244:106:9;1215:177:37;5192:286:9;;;;;;:::i;:::-;;:::i;3093:91::-;;;3175:2;2000:36:37;;1988:2;1973:18;3093:91:9;1858:184:37;508:25:35;;;;;;5873:234:9;;;;;;:::i;:::-;;:::i;1381:335:35:-;;;;;;:::i;:::-;;:::i;:::-;;609:37;;;;;-1:-1:-1;;;;;609:37:35;;;;;;-1:-1:-1;;;;;2227:32:37;;;2209:51;;2197:2;2182:18;609:37:35;2047:219:37;3408:125:9;;;;;;:::i;:::-;-1:-1:-1;;;;;3508:18:9;3482:7;3508:18;;;;;;;;;;;;3408:125;1081:140:35;;;;;;:::i;:::-;;:::i;572:20::-;;;;;-1:-1:-1;;;;;572:20:35;;;2367:102:9;;;:::i;1726:122:35:-;;;;;;:::i;:::-;;:::i;6594:427:9:-;;;;;;:::i;:::-;;:::i;3729:189::-;;;;;;:::i;:::-;;:::i;1882:279:35:-;;;;;;:::i;:::-;;:::i;3976:149:9:-;;;;;;:::i;:::-;;:::i;2195:352:35:-;;;:::i;2156:98:9:-;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;719:10:19;4570:32:9;719:10:19;4586:7:9;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;;:::o;5192:286::-;5319:4;719:10:19;5375:38:9;5391:4;719:10:19;5406:6:9;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;-1:-1:-1;5467:4:9;;5192:286;-1:-1:-1;;;;5192:286:9:o;5873:234::-;5961:4;719:10:19;6015:64:9;719:10:19;6031:7:9;6068:10;6040:25;719:10:19;6031:7:9;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;1381:335:35:-;1014:5;;-1:-1:-1;;;;;1014:5:35;1000:10;:19;992:42;;;;-1:-1:-1;;;992:42:35;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;;;;;1465:21:35;::::1;1457:65;;;::::0;-1:-1:-1;;;1457:65:35;;4586:2:37;1457:65:35::1;::::0;::::1;4568:21:37::0;4625:2;4605:18;;;4598:30;4664:33;4644:18;;;4637:61;4715:18;;1457:65:35::1;4384:355:37::0;1457:65:35::1;1605:10;;1595:6;1579:13;3331:12:9::0;;;3244:106;1579:13:35::1;:22;;;;:::i;:::-;:36;;1571:65;;;::::0;-1:-1:-1;;;1571:65:35;;4946:2:37;1571:65:35::1;::::0;::::1;4928:21:37::0;4985:2;4965:18;;;4958:30;-1:-1:-1;;;5004:18:37;;;4997:46;5060:18;;1571:65:35::1;4744:340:37::0;1571:65:35::1;1670:39;1676:7:::0;1694:14:::1;3175:2:9::0;1694::35::1;:14;:::i;:::-;1685:23;::::0;:6;:23:::1;:::i;:::-;1670:5;:39::i;:::-;1381:335:::0;;:::o;1081:140::-;1014:5;;-1:-1:-1;;;;;1014:5:35;1000:10;:19;992:42;;;;-1:-1:-1;;;992:42:35;;;;;;;:::i;:::-;1164:2:::1;::::0;-1:-1:-1;;;;;1164:2:35::1;1156:25:::0;1148:48:::1;;;::::0;-1:-1:-1;;;1148:48:35;;6847:2:37;1148:48:35::1;::::0;::::1;6829:21:37::0;6886:2;6866:18;;;6859:30;-1:-1:-1;;;6905:18:37;;;6898:40;6955:18;;1148:48:35::1;6645:334:37::0;1148:48:35::1;1206:2;:8:::0;;-1:-1:-1;;;;;;1206:8:35::1;-1:-1:-1::0;;;;;1206:8:35;;;::::1;::::0;;;::::1;::::0;;1081:140::o;2367:102:9:-;2423:13;2455:7;2448:14;;;;;:::i;1726:122:35:-;1014:5;;-1:-1:-1;;;;;1014:5:35;1000:10;:19;992:42;;;;-1:-1:-1;;;992:42:35;;;;;;;:::i;:::-;1802:39:::1;1808:7:::0;1826:14:::1;3175:2:9::0;1826::35::1;:14;:::i;:::-;1817:23;::::0;:6;:23:::1;:::i;:::-;1802:5;:39::i;6594:427:9:-:0;6687:4;719:10:19;6687:4:9;6768:25;719:10:19;6785:7:9;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;-1:-1:-1;;;6803:85:9;;7186:2:37;6803:85:9;;;7168:21:37;7225:2;7205:18;;;7198:30;7264:34;7244:18;;;7237:62;-1:-1:-1;;;7315:18:37;;;7308:35;7360:19;;6803:85:9;6984:401:37;6803:85:9;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;3729:189::-;3808:4;719:10:19;3862:28:9;719:10:19;3879:2:9;3883:6;3862:9;:28::i;1882:279:35:-;1982:4;1998:134;2020:6;2048:8;2115:7;2076:36;2086:10;2106:4;2076:9;:36::i;1998:134::-;-1:-1:-1;2150:4:35;1882:279;;;;;:::o;3976:149:9:-;-1:-1:-1;;;;;4091:18:9;;;4065:7;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3976:149::o;2195:352:35:-;1014:5;;-1:-1:-1;;;;;1014:5:35;1000:10;:19;992:42;;;;-1:-1:-1;;;992:42:35;;;;;;;:::i;:::-;2254:20:::1;2286:14;3175:2:9::0;2286::35::1;:14;:::i;:::-;2277:23;::::0;:6:::1;:23;:::i;:::-;2349:2;::::0;2254:46;;-1:-1:-1;2310:57:35::1;::::0;2334:4:::1;::::0;-1:-1:-1;;;;;2349:2:35::1;2254:46:::0;2310:15:::1;:57::i;:::-;2422:4;2378:23;3508:18:9::0;;;;;;;;;;;2477:14:35::1;::::0;3508:18:9;;2438:72:35::1;::::0;-1:-1:-1;;;;;2477:14:35::1;3508:18:9::0;2438:15:35::1;:72::i;:::-;2525:15;::::0;::::1;::::0;;;::::1;2244:303;;2195:352::o:0;10110:370:9:-;-1:-1:-1;;;;;10241:19:9;;10233:68;;;;-1:-1:-1;;;10233:68:9;;7592:2:37;10233:68:9;;;7574:21:37;7631:2;7611:18;;;7604:30;7670:34;7650:18;;;7643:62;-1:-1:-1;;;7721:18:37;;;7714:34;7765:19;;10233:68:9;7390:400:37;10233:68:9;-1:-1:-1;;;;;10319:21:9;;10311:68;;;;-1:-1:-1;;;10311:68:9;;7997:2:37;10311:68:9;;;7979:21:37;8036:2;8016:18;;;8009:30;8075:34;8055:18;;;8048:62;-1:-1:-1;;;8126:18:37;;;8119:32;8168:19;;10311:68:9;7795:398:37;10311:68:9;-1:-1:-1;;;;;10390:18:9;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10441:32;;1361:25:37;;;10441:32:9;;1334:18:37;10441:32:9;;;;;;;10110:370;;;:::o;10761:441::-;10891:24;10918:25;10928:5;10935:7;10918:9;:25::i;:::-;10891:52;;-1:-1:-1;;10957:16:9;:37;10953:243;;11038:6;11018:16;:26;;11010:68;;;;-1:-1:-1;;;11010:68:9;;8400:2:37;11010:68:9;;;8382:21:37;8439:2;8419:18;;;8412:30;8478:31;8458:18;;;8451:59;8527:18;;11010:68:9;8198:353:37;11010:68:9;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10881:321;10761:441;;;:::o;1228:147:35:-;1326:42;1342:6;1350:9;1361:6;1326:15;:42::i;:::-;1228:147;;;:::o;8402:389:9:-;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;4586:2:37;8477:65:9;;;4568:21:37;4625:2;4605:18;;;4598:30;4664:33;4644:18;;;4637:61;4715:18;;8477:65:9;4384:355:37;8477:65:9;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;1361:25:37;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;1349:2:37;1334:18;8688:37:9;;;;;;;1381:335:35;;:::o;9111:576:9:-;-1:-1:-1;;;;;9194:21:9;;9186:67;;;;-1:-1:-1;;;9186:67:9;;8758:2:37;9186:67:9;;;8740:21:37;8797:2;8777:18;;;8770:30;8836:34;8816:18;;;8809:62;-1:-1:-1;;;8887:18:37;;;8880:31;8928:19;;9186:67:9;8556:397:37;9186:67:9;-1:-1:-1;;;;;9349:18:9;;9324:22;9349:18;;;;;;;;;;;9385:24;;;;9377:71;;;;-1:-1:-1;;;9377:71:9;;9160:2:37;9377:71:9;;;9142:21:37;9199:2;9179:18;;;9172:30;9238:34;9218:18;;;9211:62;-1:-1:-1;;;9289:18:37;;;9282:32;9331:19;;9377:71:9;8958:398:37;9377:71:9;-1:-1:-1;;;;;9482:18:9;;:9;:18;;;;;;;;;;9503:23;;;9482:44;;9546:12;:22;;9520:6;;9482:9;9546:22;;9520:6;;9546:22;:::i;:::-;;;;-1:-1:-1;;9584:37:9;;1361:25:37;;;9610:1:9;;-1:-1:-1;;;;;9584:37:9;;;;;1349:2:37;1334:18;9584:37:9;;;;;;;1228:147:35;;;:::o;7475:651:9:-;-1:-1:-1;;;;;7601:18:9;;7593:68;;;;-1:-1:-1;;;7593:68:9;;9696:2:37;7593:68:9;;;9678:21:37;9735:2;9715:18;;;9708:30;9774:34;9754:18;;;9747:62;-1:-1:-1;;;9825:18:37;;;9818:35;9870:19;;7593:68:9;9494:401:37;7593:68:9;-1:-1:-1;;;;;7679:16:9;;7671:64;;;;-1:-1:-1;;;7671:64:9;;10102:2:37;7671:64:9;;;10084:21:37;10141:2;10121:18;;;10114:30;10180:34;10160:18;;;10153:62;-1:-1:-1;;;10231:18:37;;;10224:33;10274:19;;7671:64:9;9900:399:37;7671:64:9;-1:-1:-1;;;;;7817:15:9;;7795:19;7817:15;;;;;;;;;;;7850:21;;;;7842:72;;;;-1:-1:-1;;;7842:72:9;;10506:2:37;7842:72:9;;;10488:21:37;10545:2;10525:18;;;10518:30;10584:34;10564:18;;;10557:62;-1:-1:-1;;;10635:18:37;;;10628:36;10681:19;;7842:72:9;10304:402:37;7842:72:9;-1:-1:-1;;;;;7948:15:9;;;:9;:15;;;;;;;;;;;7966:20;;;7948:38;;8006:13;;;;;;;;:23;;7980:6;;7948:9;8006:23;;7980:6;;8006:23;:::i;:::-;;;;;;;;8060:2;-1:-1:-1;;;;;8045:26:9;8054:4;-1:-1:-1;;;;;8045:26:9;;8064:6;8045:26;;;;1361:25:37;;1349:2;1334:18;;1215:177;8045:26:9;;;;;;;;8082:37;1228:147:35;14:548:37;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;553:2;546;542:7;537:2;529:6;525:15;521:29;510:9;506:45;502:54;494:62;;;;14:548;;;;:::o;567:131::-;-1:-1:-1;;;;;642:31:37;;632:42;;622:70;;688:1;685;678:12;622:70;567:131;:::o;703:315::-;771:6;779;832:2;820:9;811:7;807:23;803:32;800:52;;;848:1;845;838:12;800:52;887:9;874:23;906:31;931:5;906:31;:::i;:::-;956:5;1008:2;993:18;;;;980:32;;-1:-1:-1;;;703:315:37:o;1397:456::-;1474:6;1482;1490;1543:2;1531:9;1522:7;1518:23;1514:32;1511:52;;;1559:1;1556;1549:12;1511:52;1598:9;1585:23;1617:31;1642:5;1617:31;:::i;:::-;1667:5;-1:-1:-1;1724:2:37;1709:18;;1696:32;1737:33;1696:32;1737:33;:::i;:::-;1397:456;;1789:7;;-1:-1:-1;;;1843:2:37;1828:18;;;;1815:32;;1397:456::o;2271:247::-;2330:6;2383:2;2371:9;2362:7;2358:23;2354:32;2351:52;;;2399:1;2396;2389:12;2351:52;2438:9;2425:23;2457:31;2482:5;2457:31;:::i;:::-;2507:5;2271:247;-1:-1:-1;;;2271:247:37:o;3005:388::-;3073:6;3081;3134:2;3122:9;3113:7;3109:23;3105:32;3102:52;;;3150:1;3147;3140:12;3102:52;3189:9;3176:23;3208:31;3233:5;3208:31;:::i;:::-;3258:5;-1:-1:-1;3315:2:37;3300:18;;3287:32;3328:33;3287:32;3328:33;:::i;:::-;3380:7;3370:17;;;3005:388;;;;;:::o;3398:380::-;3477:1;3473:12;;;;3520;;;3541:61;;3595:4;3587:6;3583:17;3573:27;;3541:61;3648:2;3640:6;3637:14;3617:18;3614:38;3611:161;;3694:10;3689:3;3685:20;3682:1;3675:31;3729:4;3726:1;3719:15;3757:4;3754:1;3747:15;3611:161;;3398:380;;;:::o;3783:127::-;3844:10;3839:3;3835:20;3832:1;3825:31;3875:4;3872:1;3865:15;3899:4;3896:1;3889:15;3915:125;3980:9;;;4001:10;;;3998:36;;;4014:18;;:::i;4045:334::-;4247:2;4229:21;;;4286:2;4266:18;;;4259:30;-1:-1:-1;;;4320:2:37;4305:18;;4298:40;4370:2;4355:18;;4045:334::o;5089:422::-;5178:1;5221:5;5178:1;5235:270;5256:7;5246:8;5243:21;5235:270;;;5315:4;5311:1;5307:6;5303:17;5297:4;5294:27;5291:53;;;5324:18;;:::i;:::-;5374:7;5364:8;5360:22;5357:55;;;5394:16;;;;5357:55;5473:22;;;;5433:15;;;;5235:270;;;5239:3;5089:422;;;;;:::o;5516:806::-;5565:5;5595:8;5585:80;;-1:-1:-1;5636:1:37;5650:5;;5585:80;5684:4;5674:76;;-1:-1:-1;5721:1:37;5735:5;;5674:76;5766:4;5784:1;5779:59;;;;5852:1;5847:130;;;;5759:218;;5779:59;5809:1;5800:10;;5823:5;;;5847:130;5884:3;5874:8;5871:17;5868:43;;;5891:18;;:::i;:::-;-1:-1:-1;;5947:1:37;5933:16;;5962:5;;5759:218;;6061:2;6051:8;6048:16;6042:3;6036:4;6033:13;6029:36;6023:2;6013:8;6010:16;6005:2;5999:4;5996:12;5992:35;5989:77;5986:159;;;-1:-1:-1;6098:19:37;;;6130:5;;5986:159;6177:34;6202:8;6196:4;6177:34;:::i;:::-;6247:6;6243:1;6239:6;6235:19;6226:7;6223:32;6220:58;;;6258:18;;:::i;:::-;6296:20;;5516:806;-1:-1:-1;;;5516:806:37:o;6327:140::-;6385:5;6414:47;6455:4;6445:8;6441:19;6435:4;6414:47;:::i;6472:168::-;6545:9;;;6576;;6593:15;;;6587:22;;6573:37;6563:71;;6614:18;;:::i;9361:128::-;9428:9;;;9449:11;;;9446:37;;;9463:18;;:::i",
  "source": "// SPDX-License-Identifier: GPL-3.0-only\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/security/Pausable.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/security/ReentrancyGuard.sol\";\nimport \"@openzeppelin/contracts/utils/Strings.sol\";\nimport \"@openzeppelin/contracts/utils/Context.sol\";\nimport \"./LiquidityPool.sol\";\n\ncontract VJMToken is ERC20 {\n    event TreasuryMoved(); // 자산이동  \n\n    uint256 public MAX_SUPPLY; // 발행량 jmt : vjmt == 1:10 \n    address public owner; // 오너 \n    address payable public treasuryWallet; // 재무 계좌\n    LiquidityPool lp;\n   \n    constructor(address payable treasury) ERC20(\"vJMT Token\", \"vJMT\") {\n        MAX_SUPPLY = 600000 * 10**decimals();\n        _mint(address(this), MAX_SUPPLY); \n        owner = msg.sender; \n        treasuryWallet = treasury; // 임시,현재는 오너 지갑\n    }\n\n    modifier ownerOnly() {\n        require(msg.sender == owner, \"OWNER_ONLY\");\n        _;\n    }\n\n    // set lp address \n    function setLPAddress(LiquidityPool _lp) public ownerOnly {\n       require(address(lp) == address(0), \"WRITE_ONCE\");\n        lp = _lp;\n    }\n \n    function _transfer(address sender, address recipient, uint256 amount) internal override {\n        super._transfer(sender, recipient, amount);\n    }\n\n    function mint(address account, uint256 amount) external ownerOnly {\n        require(account != address(0), \"ERC20: mint to the zero address\"); // 주소 전송 가능 여부 체크 \n        require(totalSupply() + amount <= MAX_SUPPLY, \"ABOVE_MAX_SUPPLY\"); // 총발행량 체크 \n        _mint(account, amount * 10**decimals());\n    }\n    \n    function burn(address account, uint256 amount) external ownerOnly {\n        _burn(account, amount * 10**decimals());\n    }\n\n    // 거래 제한 해제\n    function increaseContractAllowance(address _owner,address _spender,uint256 _amount) public returns (bool) {\n        _approve(\n            _owner, // from\n            _spender, // to\n            allowance(msg.sender, address(this)) + _amount\n        ); \n        return true;\n    }\n\n    // 재무 지갑 이동\n    function MoveToTreasuryWallet() public ownerOnly {\n        uint256 lpSwapAmount = 100000 * 10**decimals();\n        super._transfer(address(this), address(lp), lpSwapAmount);\n\n        uint256 remainingAmount = balanceOf(address(this));\n        super._transfer(address(this), address(treasuryWallet), remainingAmount);\n        emit TreasuryMoved();\n    }\n\n}",
  "sourcePath": "/Users/hyenne/workspace/BEB-05-JMT/contract/contracts/VJMToken.sol",
  "ast": {
    "absolutePath": "project:/contracts/VJMToken.sol",
    "exportedSymbols": {
      "Context": [
        4290
      ],
      "ERC20": [
        2473
      ],
      "IERC20": [
        2551
      ],
      "IERC20Metadata": [
        2576
      ],
      "LiquidityPool": [
        6654
      ],
      "Ownable": [
        112
      ],
      "Pausable": [
        220
      ],
      "ReentrancyGuard": [
        260
      ],
      "Strings": [
        4590
      ],
      "VJMToken": [
        9868
      ]
    },
    "id": 9869,
    "license": "GPL-3.0-only",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9610,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "41:23:35"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 9611,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9869,
        "sourceUnit": 2474,
        "src": "66:55:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/security/Pausable.sol",
        "file": "@openzeppelin/contracts/security/Pausable.sol",
        "id": 9612,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9869,
        "sourceUnit": 221,
        "src": "122:55:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 9613,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9869,
        "sourceUnit": 113,
        "src": "178:52:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/security/ReentrancyGuard.sol",
        "file": "@openzeppelin/contracts/security/ReentrancyGuard.sol",
        "id": 9614,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9869,
        "sourceUnit": 261,
        "src": "231:62:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Strings.sol",
        "file": "@openzeppelin/contracts/utils/Strings.sol",
        "id": 9615,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9869,
        "sourceUnit": 4591,
        "src": "294:51:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Context.sol",
        "file": "@openzeppelin/contracts/utils/Context.sol",
        "id": 9616,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9869,
        "sourceUnit": 4291,
        "src": "346:51:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/LiquidityPool.sol",
        "file": "./LiquidityPool.sol",
        "id": 9617,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 9869,
        "sourceUnit": 6655,
        "src": "398:29:35",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 9618,
              "name": "ERC20",
              "nameLocations": [
                "450:5:35"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2473,
              "src": "450:5:35"
            },
            "id": 9619,
            "nodeType": "InheritanceSpecifier",
            "src": "450:5:35"
          }
        ],
        "canonicalName": "VJMToken",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 9868,
        "linearizedBaseContracts": [
          9868,
          2473,
          2576,
          2551,
          4290
        ],
        "name": "VJMToken",
        "nameLocation": "438:8:35",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "eventSelector": "ede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa7",
            "id": 9621,
            "name": "TreasuryMoved",
            "nameLocation": "468:13:35",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "481:2:35"
            },
            "src": "462:22:35"
          },
          {
            "constant": false,
            "functionSelector": "32cb6b0c",
            "id": 9623,
            "mutability": "mutable",
            "name": "MAX_SUPPLY",
            "nameLocation": "523:10:35",
            "nodeType": "VariableDeclaration",
            "scope": 9868,
            "src": "508:25:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9622,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "508:7:35",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "8da5cb5b",
            "id": 9625,
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "587:5:35",
            "nodeType": "VariableDeclaration",
            "scope": 9868,
            "src": "572:20:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9624,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "572:7:35",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "4626402b",
            "id": 9627,
            "mutability": "mutable",
            "name": "treasuryWallet",
            "nameLocation": "632:14:35",
            "nodeType": "VariableDeclaration",
            "scope": 9868,
            "src": "609:37:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 9626,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "609:15:35",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 9630,
            "mutability": "mutable",
            "name": "lp",
            "nameLocation": "683:2:35",
            "nodeType": "VariableDeclaration",
            "scope": 9868,
            "src": "669:16:35",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LiquidityPool_$6654",
              "typeString": "contract LiquidityPool"
            },
            "typeName": {
              "id": 9629,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9628,
                "name": "LiquidityPool",
                "nameLocations": [
                  "669:13:35"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6654,
                "src": "669:13:35"
              },
              "referencedDeclaration": 6654,
              "src": "669:13:35",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                "typeString": "contract LiquidityPool"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9665,
              "nodeType": "Block",
              "src": "761:194:35",
              "statements": [
                {
                  "expression": {
                    "id": 9646,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9639,
                      "name": "MAX_SUPPLY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9623,
                      "src": "771:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9645,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "hexValue": "363030303030",
                        "id": 9640,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "784:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_600000_by_1",
                          "typeString": "int_const 600000"
                        },
                        "value": "600000"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9644,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 9641,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "793:2:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10_by_1",
                            "typeString": "int_const 10"
                          },
                          "value": "10"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "**",
                        "rightExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 9642,
                            "name": "decimals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1962,
                            "src": "797:8:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                              "typeString": "function () view returns (uint8)"
                            }
                          },
                          "id": 9643,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "797:10:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "793:14:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "784:23:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "771:36:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9647,
                  "nodeType": "ExpressionStatement",
                  "src": "771:36:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9651,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "831:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VJMToken_$9868",
                              "typeString": "contract VJMToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_VJMToken_$9868",
                              "typeString": "contract VJMToken"
                            }
                          ],
                          "id": 9650,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "823:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9649,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "823:7:35",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9652,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "823:13:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9653,
                        "name": "MAX_SUPPLY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9623,
                        "src": "838:10:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 9648,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2290,
                      "src": "817:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 9654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "817:32:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9655,
                  "nodeType": "ExpressionStatement",
                  "src": "817:32:35"
                },
                {
                  "expression": {
                    "id": 9659,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9656,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9625,
                      "src": "860:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9657,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "868:3:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 9658,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "872:6:35",
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "868:10:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "860:18:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9660,
                  "nodeType": "ExpressionStatement",
                  "src": "860:18:35"
                },
                {
                  "expression": {
                    "id": 9663,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9661,
                      "name": "treasuryWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9627,
                      "src": "889:14:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 9662,
                      "name": "treasury",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9632,
                      "src": "906:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "889:25:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 9664,
                  "nodeType": "ExpressionStatement",
                  "src": "889:25:35"
                }
              ]
            },
            "id": 9666,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "764a4d5420546f6b656e",
                    "id": 9635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "739:12:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_ea4d8c69a65fad034f10740b7a1ab2a34b81adbe1d188ce9216ee6a8758bdcb4",
                      "typeString": "literal_string \"vJMT Token\""
                    },
                    "value": "vJMT Token"
                  },
                  {
                    "hexValue": "764a4d54",
                    "id": 9636,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "753:6:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_7918aede97f2be136e5c3df0d3ecbe7d26bc3fc14d0e3b20723408605d8f5a0e",
                      "typeString": "literal_string \"vJMT\""
                    },
                    "value": "vJMT"
                  }
                ],
                "id": 9637,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 9634,
                  "name": "ERC20",
                  "nameLocations": [
                    "733:5:35"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 2473,
                  "src": "733:5:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "733:27:35"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9632,
                  "mutability": "mutable",
                  "name": "treasury",
                  "nameLocation": "723:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9666,
                  "src": "707:24:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 9631,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "707:15:35",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "706:26:35"
            },
            "returnParameters": {
              "id": 9638,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "761:0:35"
            },
            "scope": 9868,
            "src": "695:260:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9677,
              "nodeType": "Block",
              "src": "982:70:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9672,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 9669,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1000:3:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9670,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1004:6:35",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1000:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 9671,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9625,
                          "src": "1014:5:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1000:19:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f574e45525f4f4e4c59",
                        "id": 9673,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1021:12:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
                          "typeString": "literal_string \"OWNER_ONLY\""
                        },
                        "value": "OWNER_ONLY"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
                          "typeString": "literal_string \"OWNER_ONLY\""
                        }
                      ],
                      "id": 9668,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "992:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 9674,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "992:42:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9675,
                  "nodeType": "ExpressionStatement",
                  "src": "992:42:35"
                },
                {
                  "id": 9676,
                  "nodeType": "PlaceholderStatement",
                  "src": "1044:1:35"
                }
              ]
            },
            "id": 9678,
            "name": "ownerOnly",
            "nameLocation": "970:9:35",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 9667,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "979:2:35"
            },
            "src": "961:91:35",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9703,
              "nodeType": "Block",
              "src": "1139:82:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9695,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "id": 9689,
                              "name": "lp",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9630,
                              "src": "1164:2:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                                "typeString": "contract LiquidityPool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                                "typeString": "contract LiquidityPool"
                              }
                            ],
                            "id": 9688,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1156:7:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 9687,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1156:7:35",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 9690,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1156:11:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 9693,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1179:1:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 9692,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1171:7:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 9691,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1171:7:35",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 9694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1171:10:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1156:25:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "57524954455f4f4e4345",
                        "id": 9696,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1183:12:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923",
                          "typeString": "literal_string \"WRITE_ONCE\""
                        },
                        "value": "WRITE_ONCE"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923",
                          "typeString": "literal_string \"WRITE_ONCE\""
                        }
                      ],
                      "id": 9686,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1148:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 9697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1148:48:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9698,
                  "nodeType": "ExpressionStatement",
                  "src": "1148:48:35"
                },
                {
                  "expression": {
                    "id": 9701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9699,
                      "name": "lp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9630,
                      "src": "1206:2:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 9700,
                      "name": "_lp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9681,
                      "src": "1211:3:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "src": "1206:8:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                      "typeString": "contract LiquidityPool"
                    }
                  },
                  "id": 9702,
                  "nodeType": "ExpressionStatement",
                  "src": "1206:8:35"
                }
              ]
            },
            "functionSelector": "7a351a1d",
            "id": 9704,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 9684,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 9683,
                  "name": "ownerOnly",
                  "nameLocations": [
                    "1129:9:35"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 9678,
                  "src": "1129:9:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "1129:9:35"
              }
            ],
            "name": "setLPAddress",
            "nameLocation": "1090:12:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9681,
                  "mutability": "mutable",
                  "name": "_lp",
                  "nameLocation": "1117:3:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9704,
                  "src": "1103:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                    "typeString": "contract LiquidityPool"
                  },
                  "typeName": {
                    "id": 9680,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 9679,
                      "name": "LiquidityPool",
                      "nameLocations": [
                        "1103:13:35"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6654,
                      "src": "1103:13:35"
                    },
                    "referencedDeclaration": 6654,
                    "src": "1103:13:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                      "typeString": "contract LiquidityPool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1102:19:35"
            },
            "returnParameters": {
              "id": 9685,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1139:0:35"
            },
            "scope": 9868,
            "src": "1081:140:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              2234
            ],
            "body": {
              "id": 9722,
              "nodeType": "Block",
              "src": "1316:59:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9717,
                        "name": "sender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9706,
                        "src": "1342:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9718,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9708,
                        "src": "1350:9:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9719,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9710,
                        "src": "1361:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 9714,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "1326:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_VJMToken_$9868_$",
                          "typeString": "type(contract super VJMToken)"
                        }
                      },
                      "id": 9716,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1332:9:35",
                      "memberName": "_transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2234,
                      "src": "1326:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 9720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1326:42:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9721,
                  "nodeType": "ExpressionStatement",
                  "src": "1326:42:35"
                }
              ]
            },
            "id": 9723,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_transfer",
            "nameLocation": "1237:9:35",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 9712,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1307:8:35"
            },
            "parameters": {
              "id": 9711,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9706,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "1255:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9723,
                  "src": "1247:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9705,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1247:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9708,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "1271:9:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9723,
                  "src": "1263:17:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9707,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1263:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9710,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1290:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9723,
                  "src": "1282:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9709,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1282:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1246:51:35"
            },
            "returnParameters": {
              "id": 9713,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1316:0:35"
            },
            "scope": 9868,
            "src": "1228:147:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 9762,
              "nodeType": "Block",
              "src": "1447:269:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 9738,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9733,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9725,
                          "src": "1465:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 9736,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1484:1:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 9735,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1476:7:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 9734,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1476:7:35",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 9737,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1476:10:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1465:21:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                        "id": 9739,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1488:33:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                          "typeString": "literal_string \"ERC20: mint to the zero address\""
                        },
                        "value": "ERC20: mint to the zero address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                          "typeString": "literal_string \"ERC20: mint to the zero address\""
                        }
                      ],
                      "id": 9732,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1457:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 9740,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1457:65:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9741,
                  "nodeType": "ExpressionStatement",
                  "src": "1457:65:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9748,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9746,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 9743,
                              "name": "totalSupply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1972,
                              "src": "1579:11:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 9744,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1579:13:35",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 9745,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9727,
                            "src": "1595:6:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1579:22:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 9747,
                          "name": "MAX_SUPPLY",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9623,
                          "src": "1605:10:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1579:36:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "41424f56455f4d41585f535550504c59",
                        "id": 9749,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1617:18:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
                          "typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
                        },
                        "value": "ABOVE_MAX_SUPPLY"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
                          "typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
                        }
                      ],
                      "id": 9742,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1571:7:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 9750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1571:65:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9751,
                  "nodeType": "ExpressionStatement",
                  "src": "1571:65:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9753,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9725,
                        "src": "1676:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9759,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9754,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9727,
                          "src": "1685:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9758,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 9755,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1694:2:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 9756,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1962,
                              "src": "1698:8:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                "typeString": "function () view returns (uint8)"
                              }
                            },
                            "id": 9757,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1698:10:35",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1694:14:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1685:23:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 9752,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2290,
                      "src": "1670:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 9760,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1670:39:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9761,
                  "nodeType": "ExpressionStatement",
                  "src": "1670:39:35"
                }
              ]
            },
            "functionSelector": "40c10f19",
            "id": 9763,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 9730,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 9729,
                  "name": "ownerOnly",
                  "nameLocations": [
                    "1437:9:35"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 9678,
                  "src": "1437:9:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "1437:9:35"
              }
            ],
            "name": "mint",
            "nameLocation": "1390:4:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9728,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9725,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1403:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9763,
                  "src": "1395:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9724,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1395:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9727,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1420:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9763,
                  "src": "1412:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9726,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1412:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1394:33:35"
            },
            "returnParameters": {
              "id": 9731,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1447:0:35"
            },
            "scope": 9868,
            "src": "1381:335:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9782,
              "nodeType": "Block",
              "src": "1792:56:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9773,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9765,
                        "src": "1808:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9779,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9774,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9767,
                          "src": "1817:6:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9778,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 9775,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1826:2:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10_by_1",
                              "typeString": "int_const 10"
                            },
                            "value": "10"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "**",
                          "rightExpression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 9776,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1962,
                              "src": "1830:8:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                "typeString": "function () view returns (uint8)"
                              }
                            },
                            "id": 9777,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1830:10:35",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1826:14:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1817:23:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 9772,
                      "name": "_burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2362,
                      "src": "1802:5:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 9780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1802:39:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9781,
                  "nodeType": "ExpressionStatement",
                  "src": "1802:39:35"
                }
              ]
            },
            "functionSelector": "9dc29fac",
            "id": 9783,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 9770,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 9769,
                  "name": "ownerOnly",
                  "nameLocations": [
                    "1782:9:35"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 9678,
                  "src": "1782:9:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "1782:9:35"
              }
            ],
            "name": "burn",
            "nameLocation": "1735:4:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9765,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1748:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9783,
                  "src": "1740:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9764,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1740:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9767,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1765:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9783,
                  "src": "1757:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1757:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1739:33:35"
            },
            "returnParameters": {
              "id": 9771,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1792:0:35"
            },
            "scope": 9868,
            "src": "1726:122:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "body": {
              "id": 9811,
              "nodeType": "Block",
              "src": "1988:173:35",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9795,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9785,
                        "src": "2020:6:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9796,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9787,
                        "src": "2048:8:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9806,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 9798,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "2086:3:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9799,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2090:6:35",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2086:10:35",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 9802,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967268,
                                  "src": "2106:4:35",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_VJMToken_$9868",
                                    "typeString": "contract VJMToken"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_VJMToken_$9868",
                                    "typeString": "contract VJMToken"
                                  }
                                ],
                                "id": 9801,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2098:7:35",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 9800,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2098:7:35",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 9803,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2098:13:35",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 9797,
                            "name": "allowance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2029,
                            "src": "2076:9:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
                              "typeString": "function (address,address) view returns (uint256)"
                            }
                          },
                          "id": 9804,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2076:36:35",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "id": 9805,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9789,
                          "src": "2115:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2076:46:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 9794,
                      "name": "_approve",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2407,
                      "src": "1998:8:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 9807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1998:134:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9808,
                  "nodeType": "ExpressionStatement",
                  "src": "1998:134:35"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 9809,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2150:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 9793,
                  "id": 9810,
                  "nodeType": "Return",
                  "src": "2143:11:35"
                }
              ]
            },
            "functionSelector": "d83a2bf3",
            "id": 9812,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "increaseContractAllowance",
            "nameLocation": "1891:25:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9785,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "1925:6:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9812,
                  "src": "1917:14:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9784,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1917:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9787,
                  "mutability": "mutable",
                  "name": "_spender",
                  "nameLocation": "1940:8:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9812,
                  "src": "1932:16:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9786,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1932:7:35",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9789,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "1957:7:35",
                  "nodeType": "VariableDeclaration",
                  "scope": 9812,
                  "src": "1949:15:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9788,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1949:7:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1916:49:35"
            },
            "returnParameters": {
              "id": 9793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9792,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9812,
                  "src": "1982:4:35",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9791,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1982:4:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1981:6:35"
            },
            "scope": 9868,
            "src": "1882:279:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9866,
              "nodeType": "Block",
              "src": "2244:303:35",
              "statements": [
                {
                  "assignments": [
                    9818
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9818,
                      "mutability": "mutable",
                      "name": "lpSwapAmount",
                      "nameLocation": "2262:12:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 9866,
                      "src": "2254:20:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9817,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2254:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9825,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9824,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "hexValue": "313030303030",
                      "id": 9819,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2277:6:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100000_by_1",
                        "typeString": "int_const 100000"
                      },
                      "value": "100000"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "hexValue": "3130",
                        "id": 9820,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2286:2:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "**",
                      "rightExpression": {
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 9821,
                          "name": "decimals",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1962,
                          "src": "2290:8:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                            "typeString": "function () view returns (uint8)"
                          }
                        },
                        "id": 9822,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2290:10:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "src": "2286:14:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2277:23:35",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2254:46:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9831,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "2334:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VJMToken_$9868",
                              "typeString": "contract VJMToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_VJMToken_$9868",
                              "typeString": "contract VJMToken"
                            }
                          ],
                          "id": 9830,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2326:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9829,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2326:7:35",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9832,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2326:13:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 9835,
                            "name": "lp",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9630,
                            "src": "2349:2:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                              "typeString": "contract LiquidityPool"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_LiquidityPool_$6654",
                              "typeString": "contract LiquidityPool"
                            }
                          ],
                          "id": 9834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2341:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9833,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2341:7:35",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9836,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2341:11:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9837,
                        "name": "lpSwapAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9818,
                        "src": "2354:12:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 9826,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "2310:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_VJMToken_$9868_$",
                          "typeString": "type(contract super VJMToken)"
                        }
                      },
                      "id": 9828,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2316:9:35",
                      "memberName": "_transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2234,
                      "src": "2310:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 9838,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2310:57:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9839,
                  "nodeType": "ExpressionStatement",
                  "src": "2310:57:35"
                },
                {
                  "assignments": [
                    9841
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9841,
                      "mutability": "mutable",
                      "name": "remainingAmount",
                      "nameLocation": "2386:15:35",
                      "nodeType": "VariableDeclaration",
                      "scope": 9866,
                      "src": "2378:23:35",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9840,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2378:7:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9848,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9845,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "2422:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VJMToken_$9868",
                              "typeString": "contract VJMToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_VJMToken_$9868",
                              "typeString": "contract VJMToken"
                            }
                          ],
                          "id": 9844,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2414:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9843,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2414:7:35",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9846,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2414:13:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 9842,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1986,
                      "src": "2404:9:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 9847,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2404:24:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2378:50:35"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9854,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "2462:4:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VJMToken_$9868",
                              "typeString": "contract VJMToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_VJMToken_$9868",
                              "typeString": "contract VJMToken"
                            }
                          ],
                          "id": 9853,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2454:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9852,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2454:7:35",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2454:13:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 9858,
                            "name": "treasuryWallet",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9627,
                            "src": "2477:14:35",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 9857,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2469:7:35",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 9856,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2469:7:35",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9859,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2469:23:35",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 9860,
                        "name": "remainingAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9841,
                        "src": "2494:15:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 9849,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "2438:5:35",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_VJMToken_$9868_$",
                          "typeString": "type(contract super VJMToken)"
                        }
                      },
                      "id": 9851,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2444:9:35",
                      "memberName": "_transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 2234,
                      "src": "2438:15:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 9861,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2438:72:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9862,
                  "nodeType": "ExpressionStatement",
                  "src": "2438:72:35"
                },
                {
                  "eventCall": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 9863,
                      "name": "TreasuryMoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9621,
                      "src": "2525:13:35",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 9864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2525:15:35",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9865,
                  "nodeType": "EmitStatement",
                  "src": "2520:20:35"
                }
              ]
            },
            "functionSelector": "f3748af9",
            "id": 9867,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 9815,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 9814,
                  "name": "ownerOnly",
                  "nameLocations": [
                    "2234:9:35"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 9678,
                  "src": "2234:9:35"
                },
                "nodeType": "ModifierInvocation",
                "src": "2234:9:35"
              }
            ],
            "name": "MoveToTreasuryWallet",
            "nameLocation": "2204:20:35",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9813,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2224:2:35"
            },
            "returnParameters": {
              "id": 9816,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2244:0:35"
            },
            "scope": 9868,
            "src": "2195:352:35",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 9869,
        "src": "429:2121:35",
        "usedErrors": []
      }
    ],
    "src": "41:2509:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0xede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa7": {
          "anonymous": false,
          "inputs": [],
          "name": "TreasuryMoved",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x409F297D819A8F2308c1498E69eF148Ff79D8c97",
      "transactionHash": "0x196f47a93cad092cb7cf9a2acd17cea217c4592abcc5e4d3e26b25512529b55d"
    }
  },
  "schemaVersion": "3.4.9",
  "updatedAt": "2022-09-20T22:49:23.830Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}

module.exports = VTOKEN;