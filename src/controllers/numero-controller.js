function Number() {

}

Number.prototype.somar = async (req, res) => {
  let a = req.body.a;
  let b = req.body.b;

  let soma = a + b;
  res.status(200).send({message: `A soma dos valores: ${soma}`, value: soma});
}

Number.prototype.media = async (req, res) => {
  let a = req.body.a;
  let b = req.body.b;

  let divisao = a / b;
  res.status(200).send({message: `A divisão dos valores: ${divisao}`, value: divisao});
}

module.exports = Number;