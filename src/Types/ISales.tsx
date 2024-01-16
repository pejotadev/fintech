export type ISales = {
  id: string;
  nome: string;
  data: string;
  preco: number;
  parcelas: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
}