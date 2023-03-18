---
sidebar_position: 2
---

import BrowserWindow from '../../src/components/BrowserWindow';
import Highlight from '../../src/components/Highlight';

# The Architecture of a Foundance DAO

Foundance contracts has a similar architecture to **[Tribute DAO](https://tributedao.com/)**. They use the similar pattern of accessability for contracts. Dao members interact with adapters, adapters interact with extensions and extensions interact with most core contract which is DaoRegistry.

![Contracts General Schema](/img/contracts-introduction.png)

While Tribute has a modular approach, there is no upgradeability for the contracts that can be achieved in an easy manner that prevents data loss. So we introduced a proxy contract architecture on top of our contracts.

Extension contracts of Tribute are **[Minimal Proxy Contract](https://eips.ethereum.org/EIPS/eip-1167)**, which are the most simple and gas efficient solution for clone contracts. But they dont have the ability to be upgraded. For upgradeability of clone contracts, **[Upgradeable Beacon](https://docs.openzeppelin.com/contracts/4.x/api/proxy#UpgradeableBeacon)** standart can be used. With using Upgreadable Beacon achtitecture, we would need 6 beacons for each type of extension which could be hard to manage. So we came up with a different architecture called Lighthouse Proxy.

## Lighthouse Proxy Architecture

Main logic of Lighthouse Proxy Architecture is to have a very big beacon that holds the implementation addresses of all contracts in Foundance and give access to upgrade them to proper addresses. Lighthouse Proxy Architecture consist of two main contracts: Lighthouse.sol and LighthouseProxy.sol.

### Lighthouse.sol

Lighthouse contract acts as a big beacon that holds and returns the proper implementation for each contract in foundance. delegatedSource mapping works as a crosspath for DAOs in foundance to choose their future. By default delegatedSource of all DAOs created in foundance is the address of Foundance.sol contract address. The implementations of this source is controlled by Foundance admins. Implementations of all contracts for this delegatedSource can be upgraded by Foundance admins which would affect all of the created DAOs and ones that will be created in the future. However, members of the DAO can choose to be free from these updates and change their delegatedSource to their own DaoRegistry address. This can be done by a couple of proposals and should be done carefully.
![Lighthouse Schema](/img/lighthouse-schema.png)

### LighthouseProxy.sol

LighthouseProxy is our main proxy contract which is used to proxy adapters, extensions, extension factories and daoRegistry. DaoRegistry contract can be thought of like an extension too.

At the constructor of a LighouseProxy id and source of that contract is given. Id represents what type of contract is the proxy contract, ie. Membder Adapter, Dynamic Equity Extension, DaoRegistry... Source is defined as the address of daoRegistry contract for contracts that are cloned and belongs to a dao. It is zero address for adapters.
