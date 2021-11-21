export class RequestConvertirModel{
  constructor(
    public monedaDestinoId: number,
    public monedaOrigenId: number,
    public monto: number
  ){}
}
