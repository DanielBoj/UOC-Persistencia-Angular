export interface PedidoModel {
    id?: number,
    displayName: string,
    dateOrder: Date,
    company: string,
    partner: string,
    amountUntaxerd: number,
    amountTotal: number,
    taxGroupName: string,
}
