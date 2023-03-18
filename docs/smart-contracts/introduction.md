---
sidebar_position: 1
---

import BrowserWindow from '../../src/components/BrowserWindow';
import Highlight from '../../src/components/Highlight';

# An introduction to our Smart Contracts

There sure are a lot of them, and there is a lot that you can do through the **[dApp](https://app.foundance.org)** interface, more you can do using our CLI tool and even more that you can do if you have the comfort to interact with them directly.

Foundance smart contracts started with the inspiration from **[Tribute DAO](https://tributedao.com/)** and evolved to a different framework for the needs of Foundance. Tribute DAO offers a modular approach for smart contracts which we kept and expanded in Foundance smart contracts. This modular approach is supported by ACL flags which defines the accessability between smart contracts. As it is used in Tribute DAO, Foundance smart contracts consist of adapters, extensions and core contracts.

Adapter contracts are singular and used by all DAOs created in Foundance. They mostly handle the proposals in the DAO and are most commonly interacted by the members of DAO. They get the necessary ACL flags at the generation of DAO to interact with the extensions of all DAOs.

Extension contracts on the other hand are deployed for each DAO as clone contracts. They hold the most important information about the daos like member addresses, token balances, foundance configurations... They can not be interacted by EOA(Externally Owned Account)s directly. Adapters have the required ACL flags to call the necessary functions of extensions.

You might wonder where these ACL flag values are stored. Here is the answer: DaoRegistry. DaoRegistry, as we kept the name same as Tribute DAO is the most core contract of your DAO. It holds the ACL flags for each address, registered extensions and adapters, dao members and many more crucially important things for a Foundance DAO. DaoRegistry is again a clone contract similar to extensions. Each DAO has their own deployed DaoRegistry contract.
