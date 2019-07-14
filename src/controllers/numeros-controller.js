function Numbers() {

}

Numbers.prototype.somar = async (req, res) => {
  let vetor = req.body.vetor;

  const reducer = vetor => vetor.reduce((a,b) => a + b, 0)
  let soma = reducer(vetor);

  res.status(200).send({message: `A soma do vetor: ${soma}`, value: soma});
}

Numbers.prototype.media = async (req, res) => {
  let vetor = req.body.vetor;

  const reducer = vetor => vetor.reduce((a,b) => a + b, 0) / vetor.length;
  let media = reducer(vetor)

  res.status(200).send({message: `A media do vetor: ${media}`, value: media});
}

module.exports = Numbers;