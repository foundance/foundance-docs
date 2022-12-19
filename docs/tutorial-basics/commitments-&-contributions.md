---
sidebar_position: 2.7
---

import BrowserWindow from '../../src/components/BrowserWindow';
import Highlight from '../../src/components/Highlight';

# Commitments & Contributions

Yet one another important thing within your agreement is defining commitment to the project for all of the contributors (but don’t worry, as tokens are minted weekly you can take a day off when needed - here we are just configuring the default commitments).

<BrowserWindow url="https://app.foundance.org/project/10001/agreement">

![Commitments](/img/5-commitments.png "Commitments")
</BrowserWindow>

As there can be some expenses and withdrawals in your venture, you should also discuss what amount of them is not needed to be discussed with other cofounders.

<BrowserWindow url="https://app.foundance.org/project/10001/agreement">

![Commitments](/img/5-commitments-expanded.png "Commitments")
</BrowserWindow>

On this screen we can see that the cofounders have been configured with Jane and John commited to 5 working days per week, both drawing a monthly salary of 4.000. You can also see that Samantha has been configured with expenses of 8.000, showing that she is directly paying the salaries of the other two - she is only working 0.5 days per week.

This data is combined with the fair market salaries from the previous screen to determine what the default number of tokens minted per week will be - the value in the `Weekly Rewards` column.

:::caution Attention
The next additional piece of configuration will enable cofounders to operate outside the defaults without requiring explicit consent, this is important to allow variance, but could be abused if not carefully managed before there is trust in the team. These values all impact the number of tokens a cofounder mints weekly, and those tokens in turn represent the cofounders percentage share of the Organization.
:::

Another feature here is setting up the deviation from the stated amount.

You can provide the following inputs:

- Allowed weekly availability deviation → `How many days maximum can a cofounder work on your project, a percentage modifier to their availability`
- Withdrawls allowed deviation → `How much more or less cash can the cofounder withdraw on a given week. Remember withdrawing less will cause more tokens to be minted; more means that someone has to pay them.`
- Commited expenses allowed deviation → `How much more or less is a cofounder allowed to spend in a given week. Remmber spending more will cause more tokens to be minted; less means that someone probably got paid less.`

<BrowserWindow url="https://app.foundance.org/project/10001/agreement">

![Commitments](/img/5-commitments-expanded-more.png "Commitments")
</BrowserWindow>

When you are happy, click <Highlight>next</Highlight>
