---
sidebar_position: 4
---

import BrowserWindow from '../../src/components/BrowserWindow';
import Highlight from '../../src/components/Highlight';

# Your Project lives here

The DAO Registry contract is the identity of the DAO. This is the contract address that every adapter usually interacts with.

The scope of the registry is to manage the following:

- The adapter registry - which adapter is being used by this DAO and which access it has to the DAO state.
- The extension registry - which extension is part of the DAO and the adapter's access to it.
- Members registry - whether members exist, their delegate key and their access flags.

DaoRegistry contract is one of the contracts that we kept mostly unchanged compared to Tribute Dao contracts. If you are interested about the contract in depth, you can check out the docs **[here](https://tributedao.com/docs/contracts/core/dao-registry)**

We added some features to the DaoRegistry because of our Lighthouse Proxy patterns. These are setting the delegated source of your dao and changing the implementation addresses of your contracts. While DaoRegistry has the access to Lighthouse contract to set these up, there are functions in DaoRegistry with AccesFlag protection to change them. By default access is given to Manager Adapter for you to be able change your delegated source and implementation addresses with a proposal.
