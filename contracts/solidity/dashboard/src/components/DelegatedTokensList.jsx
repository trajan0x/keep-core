import React from 'react'
import { displayAmount } from '../utils'
import AddressShortcut from './AddressShortcut'
import UndelegateStakeButton from './UndelegateStakeButton'

const DelegatedTokensList = ({ delegatedTokens, successDelegationCallback }) => {
  const renderDelegatedTokensItem = (item) =>
    <DelegatedTokensListItem
      key={item.operatorAddress}
      delegation={item}
      successDelegationCallback={successDelegationCallback}
    />

  return (
    <section className="tile">
      <h5>Delageted Tokens</h5>
      <div className="flex flex-row-center mt-1">
        <div className="flex-1 text-label">
          CREATED AT
        </div>
        <div className="flex-1 text-label">
          BENEFICIARY ADDRESS
        </div>
        <div className="flex-1 text-label">
          OPERATOR ADDRESS
        </div>
        <div className="flex-1 text-label">
          AMOUNT
        </div>
        <div className="flex-1"/>
      </div>
      <ul className="flex flex-column">
        {delegatedTokens && delegatedTokens.map(renderDelegatedTokensItem)}
      </ul>
    </section>
  )
}

const DelegatedTokensListItem = React.memo(({ delegation, successDelegationCallback }) => {
  return (
    <li className="flex flex-row text-darker-grey flex-row-center flex-row-space-between" style={{ marginBottom: `0.5rem` }}>
      <div className="flex-1">{delegation.createdAt}</div>
      <div className="flex-1"><AddressShortcut address={delegation.beneficiary} /></div>
      <div className="flex-1"><AddressShortcut address={delegation.operatorAddress} /></div>
      <div className="flex-1">{displayAmount(delegation.amount)} KEEP</div>
      <div className="flex-1">
        <UndelegateStakeButton
          isInInitializationPeriod={delegation.isInInitializationPeriod}
          btnClassName="btn btn-sm btn-default"
          operator={delegation.operatorAddress}
          successCallback={successDelegationCallback}
        />
      </div>
    </li>
  )
})

export default DelegatedTokensList
