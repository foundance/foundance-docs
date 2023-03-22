---
sidebar_position: 5
---

import BrowserWindow from '../../src/components/BrowserWindow';
import Highlight from '../../src/components/Highlight';

# How your Foundance runs

There are many contracts that helps your Foundance DAO run, these are extension and adapter contracts.

## Extensions

- **Bank Extension** : This contract is used to manage the funds of your DAO. It holds the balance of each member in DAO for all internal tokens. These balances are stored with their time index, so the balance changes can be retriewed according to created checkpoints.
- **Community Equity Extension** : This contract is used to manage community equity.
- **Dynamic Equity Extension** : This contract is used to manage dynamic equity. Things like your weekly contribution to the project, your expenses and how much token you should get are manged here.
- **ERC20 Extension** : ERC20 extension works as an ERC20 contract for your Foundance. It has all of the functions required for an ERC20 contract and can be interpreted by other web3 apps like Metamask as an ERC20 Token. Only difference is the balances of each address are not stored in this contract but in Bank Extension contract. Also, the transfer function is controlled by a configuration made in DaoRegistry, by default it is set to not approve any transfers. Later it can be set to be transferable between dao members or transferable by any address.
- **Member Extension** : This contract manages the members of your dao. It has the ability to add or remove member from your dao by interacting with other contracts in your dao where any member config is stored.
- **Vested Equity Extension** : This contract is used to manage vested equity. Currently we are not using vesting in Foundance.

## Adapters

- **Community Equity Adapter** : This contract manages te proposals for adding, updating and removing community equity config of members and your dao.
- **Dynamic Equity Adapter** : This contract mainly manages the proposals about dynamic equity. It has functions to update your weekly contribution or request an update from another member, manage conflict resolution and distribute the tokens that should be minted according to dynamic equity.
- **Manager Adapter** : This contract manages the changes you would want to make in your Foundance contracts. It has the proposals to change extensions, adapters or configs from your daoRegistry. It also has the proposals for you to change the delegated source and implementation addresses in the lighthouse if you want to be free of contract updates.
- **Member Adapter** : This contract just like the Manages Extension contract, manages the members of your dao. Since the functions in extension contract requires ACL flags and normally this flag is not provided to EOAs, adapter contract has proposals for you to manage the members of your dao.
- **Vested Equity Adapter** : This contract is used to manage vested equity configs by proposals.
- **Voting Adapter** : This contract is the main contract for your proposals and votings in your Dao. It is used by other adapters to create proposals and keep track of the proposal state. It calculates the vote results for all proposals according to your voting config. This calculation is used by adapters to let your process the proposals that PASSED by the votings.
