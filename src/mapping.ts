import {
  ExecuteTrade as ExecuteTradeEvent
} from "../generated/Contract/Contract"
import {
  ExecuteTrade
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