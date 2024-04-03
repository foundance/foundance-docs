---
sidebar_position: 1
---

import BrowserWindow from '../../src/components/BrowserWindow';
import Highlight from '../../src/components/Highlight';

# Make an Agreement

In order to create your on-chain agreement, every co-founder is going to have to sign the co-founder agreement to indicate that they agree with the parameters that have been set. As a project creator, you will do the initial configuration and commit it to the chain. From this point, the other co-founders can come and give their thumbs up.

:::caution Attention
Many of the parameters in the agreement can be changed (via a vote) once the Organization is up and running - however the settings on this page cannot!
:::

# Let's get Started

You've started your project and got the team to work on it! However, there are still some things to do. 

The foundation of our platform is to ensure all of the people involved in the project are secure. We ensure that with the agreement between them. Since there are multiple ways and parameters to set up the initial agreement, We'll walk you step by step.

:::caution Attention 
Remember that all of the steps have to be discussed in detail with all of the cofounders, you must agree on the terms before you will put them on-chain!

The first thing to do is to go to your project page and check the agreement tab. 

<BrowserWindow>

![Create an Agreement](/img/5-create-agreement-step-1.png "Create and Agreement")
</BrowserWindow>

 [!IMPORTANT] Prerequisites to start an agreement

 1. your project has at least two people occupying co-founder roles
 2. each co-founder has a wallet associated to their account

**Agreement Types**

Depending on your experience as a founder and your business model, you may choose bewteen three agreement types:
- basic: recommended for first time founders and people new to web3
- intermediate: recommended to those who have some experience with traditional equity allocation models
- advanced: recommended to seasoned founders, who want to take into account each member's contribution.

<BrowserWindow>

![Select Agreement Type](/img/5-create-agreement-select-type.png "Select Agreement Type")
</BrowserWindow>

## Basic Agreement

The basic agreement is recommended to first time founders and people new to the web3 world. You can only configure fixed eqity allocation for each co-founder. 

### Organization Setup
<BrowserWindow>

![Basic Agreement Step 1](/img/5-create-basicagreement-step1.png "Basic Agreement Step 1")
</BrowserWindow>

This screen signifies the start of your project's journey to an on chain entity, so we need two things from you:

- Origanization Name → `You had a Project, and now it will grow into a organization. The name may be the same, except for technical reasons we cannot support any white space. The name can also be completely different as you and the team may have evolved it! The only thing is, the name must be unique amongst all Foundance.`
- Token Name → `Your organization will rely on tokens to distribute the equity generated and to incentivise external contributors. The token will be unique by the address that it has on blockchain, so the name does not have to be - but you should go for something that represents your Organization well.`

:::caution Attention
These tokens are for internal use only and are not externally tradable. In technical terms they are ERC20 tokens but with restricted transfer semantics. They can be allocated to new collaborators making them defacto members of the Organization and eligible to partake in governance processes such as voting.
:::

When you are happy, click <Highlight>Continue</Highlight>.

### Equity

This is where you set up the equity allocation of each co-founder. The basic agreement supports only a fixed allocation, with no vesting possibilities. If you are interested in adding vesting conditions, please see the Intermediate or the Advanced agreement types. 

<BrowserWindow>

![Basic Agreement Step 2](/img/5-create-basicagreement-step2.png "Basic Agreement Step 2")
</BrowserWindow>

You start off with 1 million tokens. 

By default, each co-founder will have an equal amount of tokens. You can change the amount of tokens each co-founder will get. If the total number is lower or more than 1 million, the total number of tokens will get updated.

[!IMPORTANT] 
If you want the total amount of tokens to be fixed, check the box below the field

When you are ready, click <Highlight>Continue</Highlight>.

### Summary

You will be presented with a summary of all your inputs. If something is wrong, click on Edit and rectify the problem. 

If everything is all right, click <Highlight>Continue</Highlight>.

### Register

<BrowserWindow>

![Register Basic Agreement](/img/5-create-basicagreement-step4.png "Register Basic Agreement")
</BrowserWindow>

The final step is to read the final pdf file and Register the agreement. 

Once you register the agreement, all the other co-founders will be notified to sign it.

Click on <Highlight>Register</Highlight> to finalize the agreement.

[!IMPORTANT]

This is an operation requiring a connected wallet and MATIC. In order to get MATIC in your wallet, you can use [this faucet](https://www.alchemy.com/faucets/polygon-mumbai).

## Intermediate Agreement

The intermediate agreement is recommended to those who have some experience with traditional equity allocation models, but still want to keep it simple. 

The differences from the basic agreement:
- you can create dedicated pools, such as community or investor pools, to avoid co-founder dilution
- you can setup voting models for your Organization

### Organization Setup
<BrowserWindow>

![Intermediate Agreement Step 1](/img/5-intermediateagreement-step1.png "Intermediate Agreement Step 1")
</BrowserWindow>

This screen signifies the start of your project's journey to an on chain entity, so we need two things from you:

- Origanization Name → `You had a Project, and now it will grow into a organization. The name may be the same, except for technical reasons we cannot support any white space. The name can also be completely different as you and the team may have evolved it! The only thing is, the name must be unique amongst all Foundance.`
- Token Name → `Your organization will rely on tokens to distribute the equity generated and to incentivise external contributors. The token will be unique by the address that it has on blockchain, so the name does not have to be - but you should go for something that represents your Organization well.`
- Token Symbol → `The short form of your token name, make it representative and cool.`

:::caution Attention
These tokens are for internal use only and are not externally tradable. In technical terms they are ERC20 tokens but with restricted transfer semantics. They can be allocated to new collaborators making them defacto members of the Organization and eligible to partake in governance processes such as voting.
:::

When you are happy, click <Highlight>Continue</Highlight>.

### Equity

This is where you set up the equity allocation of each co-founder. The intermediate agreement only supports fixed equity allocation, with the possbility to add vesting conditions. 


Same as for the basic agreement, you start off with 1 million tokens. 

By default, each co-founder will have an equal amount of tokens. You can change the amount of tokens each co-founder will get. If the total number is lower or more than 1 million, the total number of tokens will get updated.

**Adding pools**
Generally, pools are created when co-founders know they will need to allocate equity or tokens to other parties and want to avoid dillution. The most common pools are for investors and for the community which contributes to the development of the venture. 

In order to create a pool, click on <Highlight>New Pool</Highlight>. Specify a name for the pool and a number of tokens. You can always adjust the values after creating the pool. 
When you're ready, click on <Highlight>Save</Highlight>

<BrowserWindow>

![Add Pool Step 1](/img/5-intermediateagreement-step1-addpool1.png "Add Pool Step 1")
</BrowserWindow>

<BrowserWindow>

![Add Pool Step 2](/img/5-intermediateagreement-step1-addpool2.png "Add Pool Step 2")
</BrowserWindow>

The new pool will be displayed in the equity allocation table and in the donut chart. 

**Vesting**

Vesting is a mechanism where co-founders earn ownership of their equity/tokens in a company over a period of time. For example, 90000 tokens with a vesting period of 3 years means the co-founder will get the 90000 tokens over a period of 3 years, 30000 tokens each year. 

Vesting is optional. If enabled, you are able to set the period for each co-founder. It's important to notice that pools don't have a vesting period. 

<BrowserWindow>

![Add Vesting](/img/5-intermediateagreement-step1-vesting.png "Add Vesting")
</BrowserWindow>

### Governance

Governance refers to the set of rules guiding all decisions related to the venture. By embracing good governance practices, startups can establish trust with investors, mitigate the risk of fraud and corruption, and champion transparency and accountability

The Intermediate Agreement allows you to choose one of the three models:
1. **Proportional**: voting power is proportional to token ownership (1 token = 1 vote). Let's say the vote passes if 51% of "tokens" agree with the vote. A person with a majority of 60% of tokens will rule this vote.
2. **Quadratic**: the voting power is proportional to the square root of the token amount (1 sqrt = 1 vote). This vote type mitigates the danger of the proportional vote where the majority of token holders takes control of all the votes
3. **Cooperative**: each person gets one vote; all people are equal, regardless of their token holding

When you are ready, click <Highlight>Continue</Highlight>.

### Summary

You will be presented with a summary of all your inputs. If something is wrong, click on Edit and rectify the problem. 

If everything is all right, click <Highlight>Continue</Highlight>.

### Register

<BrowserWindow>

![Register Basic Agreement](/img/5-create-basicagreement-step4.png "Register Basic Agreement")
</BrowserWindow>

The final step is to read the final pdf file and Register the agreement. 

Once you register the agreement, all the other co-founders will be notified to sign it.

Click on <Highlight>Register</Highlight> to finalize the agreement.


[!IMPORTANT] This is an operation requiring a connected wallet and MATIC. In order to get MATIC in your wallet, you can use [this faucet](https://www.alchemy.com/faucets/polygon-mumbai).

## Advanced Agreement

The advanced agreement is recommended to seasoned founders who either want to be in control of more parameters or want to set up a dynamic equity allocation system.

The differences from the intermediate agreement:
- in addition to setting up a vesting period, you can also specify a cliff. 
- besides a fixed equity allocation model, you can also choose to setup a dynamic allocation of tokens based on each co-founder's contribution.
- you are in control of more governance parameters. 

### Organization Setup

Please read the instructions from the Intermediate Agreement.

### Fixed Equity

Please read the instructions from the Intermediate Agreement.

The only difference is, you can also specify a *cliff* when setting up vesting. A cliff means the co-founder will start getting tokens only after the cliff period has passed. 
For example, John will receive 30 000 tokens with a vesting period of 3 years and a cliff of 1 year. This means in the first year John will get no tokens. They will start being distributed in the second year, 15 000 each year. 

### Dynamic Equity

Sometimes, in the start-up world, the traditional model of fixed equity does not fairly take into account all the contributions from a co-founder or investor. 

The dynamic model takes into account the investment and the effort a co-founder dedicates to a new venture and then recalculates the equity shares for that person every week. This model is ideal for bootstrapped start-ups where time is the main contribution and ventures are not cash-rich. 

By default, this option is disabled. If enabled, you will be able to setup of each co-founder:
- the amount of tokens they get each day
- the default number of days each person will work per week
- the maximum number of days each person can work per week

[!IMPORTANT] Setting up a dynamic equity model means that every week, each co-founder will be asked to update their contribution. If a co-founder's contribution exceeds the default number of days (let's say Mary worked 5 days instead of 3) a vote will be opened for the other co-founders to agree or disagree with this update. 

Below the contribution table you will see a chart with expected token allocation over time. If you have also set up fixed equity allocation with or without vesting, this will also be included. 

<BrowserWindow>

![Advanced Agreement](/img/5-advancedagreement-step3.png "Advanced Agreement")
</BrowserWindow>

When you are ready, click <Highlight>Continue</Highlight>.

### Governance

In addition to the options described in the Intermediate Agreement, the advanced one has a few extra parameters you can customize based on your team's needs:

**Vote Duration**

How much time will the vote be open for the co-founders to express their opinion? 

The default value is set to 3 days. Depending on your team's size and your co-founders general availability, you can select lower or greater values. 

**Support Required**

Percentage of tokens needed for the vote to pass. Default value is set to 51%

**Min Voting Tokens**

How many tokens need to participate to validate the vote? Default value is set to 51%

**Min Voting Members**
How many members need to participate to validate the vote? 

When you are ready, click <Highlight>Continue</Highlight>.

### Summary

You will be presented with a summary of all your inputs. If something is wrong, click on Edit and rectify the problem. 

If everything is all right, click <Highlight>Continue</Highlight>.

### Register

<BrowserWindow>

![Register Basic Agreement](/img/5-create-basicagreement-step4.png "Register Basic Agreement")
</BrowserWindow>

The final step is to read the final pdf file and Register the agreement. 

Once you register the agreement, all the other co-founders will be notified to sign it.

Click on <Highlight>Register</Highlight> to finalize the agreement.


[!IMPORTANT] This is an operation requiring a connected wallet and MATIC. In order to get MATIC in your wallet, you can use [this faucet](https://www.alchemy.com/faucets/polygon-mumbai).




