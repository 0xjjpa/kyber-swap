import {
  ExecuteTrade as ExecuteTradeEvent,
  KyberNetworkSet as KyberNetworkSetEvent,
  TokenWithdraw as TokenWithdrawEvent,
  EtherWithdraw as EtherWithdrawEvent,
  TransferAdminPending as TransferAdminPendingEvent,
  AdminClaimed as AdminClaimedEvent,
  AlerterAdded as AlerterAddedEvent,
  OperatorAdded as OperatorAddedEvent
} from "../generated/Contract/Contract"
import {
  ExecuteTrade,
  KyberNetworkSet,
  TokenWithdraw,
  EtherWithdraw,
  TransferAdminPending,
  AdminClaimed,
  AlerterAdded,
  OperatorAdded
} from "../generated/schema"

export function handleExecuteTrade(event: ExecuteTradeEvent): void {
  let entity = new ExecuteTrade(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.trader = event.params.trader
  entity.src = event.params.src
  entity.dest = event.params.dest
  entity.actualSrcAmount = event.params.actualSrcAmount
  entity.actualDestAmount = event.params.actualDestAmount
  entity.save()
}

export function handleKyberNetworkSet(event: KyberNetworkSetEvent): void {
  let entity = new KyberNetworkSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newNetworkContract = event.params.newNetworkContract
  entity.oldNetworkContract = event.params.oldNetworkContract
  entity.save()
}

export function handleTokenWithdraw(event: TokenWithdrawEvent): void {
  let entity = new TokenWithdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.sendTo = event.params.sendTo
  entity.save()
}

export function handleEtherWithdraw(event: EtherWithdrawEvent): void {
  let entity = new EtherWithdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.amount = event.params.amount
  entity.sendTo = event.params.sendTo
  entity.save()
}

export function handleTransferAdminPending(
  event: TransferAdminPendingEvent
): void {
  let entity = new TransferAdminPending(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.pendingAdmin = event.params.pendingAdmin
  entity.save()
}

export function handleAdminClaimed(event: AdminClaimedEvent): void {
  let entity = new AdminClaimed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newAdmin = event.params.newAdmin
  entity.previousAdmin = event.params.previousAdmin
  entity.save()
}

export function handleAlerterAdded(event: AlerterAddedEvent): void {
  let entity = new AlerterAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newAlerter = event.params.newAlerter
  entity.isAdd = event.params.isAdd
  entity.save()
}

export function handleOperatorAdded(event: OperatorAddedEvent): void {
  let entity = new OperatorAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.newOperator = event.params.newOperator
  entity.isAdd = event.params.isAdd
  entity.save()
}
