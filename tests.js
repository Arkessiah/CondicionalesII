// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Operadores I', () => {
  it('Las variables niloLenght - tamesisLenght existen y isNiloLargest', () => {
    expect(niloLenght).to.not.be.an('undefined');
    expect(tamesisLenght).to.not.be.an('undefined');
    expect(isNiloLargest).to.not.be.an('undefined');
  });


  it('La variable isNiloLargest cambia su valor a true', () => {
    expect(isNiloLargest).to.equal(true);
  });
});
