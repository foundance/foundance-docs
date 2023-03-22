---
sidebar_position: 8
---

import BrowserWindow from '../../src/components/BrowserWindow';
import Highlight from '../../src/components/Highlight';

# Super User Mode

By default the lighthouse proxy pattern gives Foundance admins the ability to upgrade the implementation contracts for each dao. These upgrades may be for bug fixes or new features. This ability of Foundance admins are restricted to changing the implementation addresses of default delegated source which is the Foundance.sol contract address. By default, all daos created in foundance has this contract address as their delegated source. So changes made in this source address affects every dao created and will be created later.

However, you can change your delegated source from default delegated source to your own DaoRegistry address with two proposals, which restricts access to change your implementation addresses that come from addresses other than your own DaoRegistry. We do not advise this feature to people who dont whave in depth knowledge of solidity, proxy contract standarts or Foundance contracts. Anyhow, here is how you can go free:

First you need to set the implementation addresses you want by creating a SetImplementationBatchProposal by calling the **submitSetImplementationBatchProposal** function of Manager Adapter with the proper parameters. After required amount of members vote for this proposal with the given proposalId, voting period has passed and grace period has passed, any member of the dao can call the **processSetImplementationBatchProposal** function of Manager Adapter to make the proposed changes. This will only set up the implementation addresses prior to using them and will not change your used implementations directly since the delegated source of your dao still points to Foundance.sol address.

Secondly you need to set the delegated source for your dao to your DaoRegistry address by calling the **submitSetDelegatedSourceProposal** function of Manager Adapter with the proper parameters. Make sure to give the address of your DaoRegistry for the parameter \_delegatedSource here. After required amount of members vote for this proposal with the given proposalId, voting period has passed and grace period has passed, any member of the dao can call the **processSetDelegatedSourceProposal** function of Manager Adapter to make the proposed changes. After completing this step, your dao will have the control of implementation addresses of your dao.

By doing these you will have the access to set the implementation addresses of your dao with same proposal any time. You can update and reverse the implementation addresses as you wish. You can even add new adapters or extensions to your dao. However, if you wish your contracts to be in control of foundance admins again, you can use the **SetDelegatedSourceProposal** steps again and give the Foundance.sol contract address as \_delegatedSource parameter. This will return you back to be track with most recent versions of our contracts.

**submitSetImplementationBatchProposal Parameters:**

- IDaoRegistry dao : Your DaoRegistry address
- bytes32 proposalId : A random bytes32 proposal id
- bytes calldata data : A message that explains the reasons for proposal. This is optional.(Web3.utils.hexToBytes(Web3.utils.asciiToHex(message)))
- address \_lighthouse : Lighthouse contract address
- address[] memory \_implementationAddresses : Implementation addresses you want to use with matching order of \_implementationIds
- bytes32[] memory \_implementationIds : Implementation id of each contract that is used by Foundance with matching order of \_implementationAddresses

**Implementation Ids to be Used:**

- MANAGER_ADPT: "manager-adpt"
- VOTING_ADPT: "voting-adpt"
- MEMBER_ADPT: "member-adpt"
- DYNAMIC_EQUITY_ADPT: "dynamic-equity-adpt"
- VESTED_EQUITY_ADPT: "vested-equity-adpt"
- COMMUNITY_EQUITY_ADPT: "community-equity-adpt"
- DAO_EXT: "dao-ext"
- BANK_EXT: "bank-ext"
- ERC20_EXT: "erc20-ext"
- MEMBER_EXT: "member-ext"
- DYNAMIC_EQUITY_EXT: "dynamic-equity-ext"
- VESTED_EQUITY_EXT: "vested-equity-ext"
- COMMUNITY_EQUITY_EXT: "community-equity-ext"
- DAO_EXT_FACTORY: "dao-ext-factory"
- BANK_EXT_FACTORY: "bank-ext-factory"
- ERC20_EXT_FACTORY: "erc20-ext-factory"
- MEMBER_EXT_FACTORY: "member-ext-factory"
- DYNAMIC_EQUITY_EXT_FACTORY: "dynamic-equity-ext-factory"
- VESTED_EQUITY_EXT_FACTORY: "vested-equity-ext-factory"
- COMMUNITY_EQUITY_EXT_FACTORY: "community-equity-ext-factory"

All strings provided here should be converted to bytes32 with sha3.
