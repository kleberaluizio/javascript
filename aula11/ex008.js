var vel = 78.2
console.log(`A velocidade do seu carro é ${vel} km/h`)

var message;
if(vel > 60){
    message = 'Você ultrapassou a velocidade máxima permitida'
} else {
    message = 'Dirija sempre usando cinto de segurança'
}
console.log(message)