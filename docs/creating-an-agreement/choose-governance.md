---
sidebar_position: 6
---

import BrowserWindow from '../../src/components/BrowserWindow';
import Highlight from '../../src/components/Highlight';

# Choose a governance method

<BrowserWindow url="https://app.foundance.org/project/10001/agreement">

![Governance Model](/img/5-voting.png "Governance Model")
</BrowserWindow>

The final step before your agreement overview is setting up your governance model. You can read more about each of the proposed models on our [blog](https://foundance.org/).

This will set how your voting system will look like We offer three different voting mechanisms:

- **Proportional**: 1 share 1 vote
- **Quadratic**: Your share-ratio squared will be your voting power.
- **Cooperative**: 1 person 1 vote

There are three types of governance offered by foundance.

## Proportional (One share - one vote)

This governance method is the usual governance method in todays limited or stock companies. The more stocks or shares you own as a co-founder, advisor or freelancer, the more votes you get in the governance of your project.

### Proportional Voting Example:

- Andrea owns 40% of the token
- Tom owns 30% of the token
- Sophia owns 15% of the token
- Rick owns 15% of the token

In an election, Andreas vote is worth `40%` of all votes, so Andrea and Rick together would hold a majority of `55%` i.e. `(40+15)%`

## Quadratic Voting

In the quadratic voting system the token share will be squared to get the respective vote in the election.

- Andreas quadratic vote is `0, 4*0, 4=0, 16=16%`
- Tom quadratic vote is `0, 3*0, 3=0, 09=9%`
- Sophias quardratic vote is `0, 15*0, 15=2, 25%`
- Ricks quadratic vote is also `2, 25%`

### Quadratic Voting Example:

Adding these numbers would only result in `29`, `5%` token cast for a vote. So the result has to be multiplied by `100/29`,`5%=3`,`x`

- Andreas governance share: `16%*3`, `x=50+%`
- Tom governance share: `9%*3`, `x=30%`
- Sophias governance share is `7%` …

:::info
Quadratic voting favors higher shares over lower shares
:::

## Cooperative (One Person - One Vote)

This governance method is the usual governance method for associations or cooperatives. Here each shareholder has a single vote, no matter how many shares they own.

### Cooperative Voting Example:

following our above examples, you would need three people (among Andreas, Tom, Sophias, Ricks) to get to a majority vote.

:::info
In this voting method, you would need more than half of the people to get to a majority vote.
:::

When you are happy, click <Highlight>next</Highlight>
