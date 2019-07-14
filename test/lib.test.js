const request = require('supertest')

const app = require('../src/app')

test('Deve somar os numeros', () => {
    let soma = 15
    return request(app).post('/lib/somarNumeros')
        .send({a: 10, b: 5})
        .then((res)=> {
            expect(res.status).toBe(200)
            expect(res.body.message).toBe(`A soma dos valores: ${soma}`)
            expect(res.body.value).toBe(soma)
        })
})

test('Deve dividir os numeros', () => {
    let divisao = 2
    return request(app).post('/lib/dividir')
        .send({a: 10, b: 5})
        .then((res)=> {
            expect(res.status).toBe(200)
            expect(res.body.message).toBe(`A divisão dos valores: ${divisao}`)
            expect(res.body.value).toBe(divisao)
        })
})

test('Deve trazer a soma do vetor', () => {
    let soma = 6
    return request(app).post('/lib/somarVetor')
        .send({vetor: [1,2,3]})
        .then((res)=> {
            expect(res.status).toBe(200)
            expect(res.body.message).toBe(`A soma do vetor: ${soma}`)
            expect(res.body.value).toBe(soma)
        })
})

test('Deve trazer a media do vetor', () => {
    let media = 2
    return request(app).post('/lib/media')
        .send({vetor: [1,2,3]})
        .then((res)=> {
            expect(res.status).toBe(200)
            expect(res.body.message).toBe(`A media do vetor: ${media}`)
            expect(res.body.value).toBe(media)
        })
})