---
sidebar_position: 3
---

import BrowserWindow from '../../src/components/BrowserWindow';
import Highlight from '../../src/components/Highlight';

# The entry point to our world

To create a DAO with Tribute contracts, you need to deploy many contracts on the chain you want and go through a lot of interactions to set up the required ACL flags. With Foundance we eliminate this complexity by making all of the contract interactions you would need to create a Foundance DAO in one function.

Your journey on creating a Foundance DAO starts with registering your foundance with Foundance.sol contract. registerFoundance function basically takes all of the configs you decide with your team and stores it in the contract. The EOA that calls the registerFoundance function becomes the creator of that project and has some privilages and responsibilities later.

After registering your foundance, all of the team members except the creator of the project should approve the registered foundance and configs by calling approveFoundance function with the correct daoName you provided. This interaction works as a approval signature for all members in that foundance.

After all of the approvals are completed, creator of the project can call the function createFoundance to actually create and deploy your Foundance DAO contracts. This function creates cloned extension contracts, your DaoRegistry and gives necessary ACL flags to proper contracts.

After the creation of your DAO you dont need to interact with Foundance.sol contract and choose the direction of your DAO with your members.

## Parameters you can provide to create your foundance

### foundanceName (string)

The name of your foundance. It should be a unique name which shouldnt be used before. It is checked by used names in DaoFactory contract and Foundance contract.

### tokenConfig (struct)

- **tokenName (string)** : The name of your foundance's token. There is no restrictions in tokenName. It is the name property of ERC-20 contract.
- **tokenSymbol (string)** : The symbol of your foundance's token. There is no restrictions in tokenSymbol. It is the symbol property of ERC-20 contract.
- **maxExternalTokens (uint256)** : Defines the number of external ERC-20 tokens that can be registered to your daoRegistry. We currently only use UNIT token defined in Tribute contracts. For future development this number is set to 100 by default in our UI.
- **decimals (uint256)** : Represents the number of decimals after comma. It is used by external services like Metamask or any other web3 app to convert your balance in ERC20 contract to number of tokens. It is set to 8 by default in our UI.

### votingConfig (struct)

- **votingType (enum)** :
- **votingPeriod (uint256)** :
- **gracePeriod (uint256)** :
- **disputePeriod (uint256)** :
- **passRateMember (uint256)** :
- **passRateToken (uint256)** :
- **supportRequired (uint256)** :

### epochConfig (struct)

- **epochDuration (uint256)** :
- **epochReview (uint256)** :
- **epochStart (uint256)** :
- **epochLast (uint256)** :

### dynamicEquityConfig (struct)

- **riskMultiplier (uint256)** :
- **timeMultiplier (uint256)** :

### vestedEquityConfig (struct)

- **vestingCadenceInS (uint256)** :

### communityEquityConfig (struct)

- **allocationType (enum)** :
- **allocationTokenAmount (uint256)** :
- **tokenAmount (uint256)** :

### factoryMemberConfigArray (struct array)

- **memberAddress (address)** :
- **foundanceApproved (boolean)** :
- **memberConfig (struct)**

  - **memberAddress (address)** :
  - **initialAmount (uint256)** :
  - **initialPeriod (uint256)** :
  - **appreciationRight (boolean)** :

- **dynamicEquityMemberConfig (struct)**

  - **memberAddress (address)** :
  - **suspendedUntil (uint256)** :
  - **availability (uint256)** :
  - **availabilityThreshold (uint256)** :
  - **salary (uint256)** :
  - **salaryYear (uint256)** :
  - **withdrawal (uint256)** :
  - **withdrawalThreshold (uint256)** :
  - **expense (uint256)** :
  - **expenseThreshold (uint256)** :
  - **expenseCommitted (uint256)** :
  - **expenseCommittedThreshold (uint256)** :

- **vestedEquityMemberConfig (struct)**

  - **memberAddress (address)** :
  - **tokenAmount (uint256)** :
  - **duration (uint256)** :
  - **start (uint256)** :
  - **cliff (uint256)** :

- **communityEquityMemberConfig (struct)**

  - **memberAddress (address)** :
  - **singlePaymentAmountThreshold (uint256)** :
  - **totalPaymentAmountThreshold (uint256)** :
  - **totalPaymentAmount (uint256)** :
