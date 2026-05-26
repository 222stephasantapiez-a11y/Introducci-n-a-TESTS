const { add, divide, restar, multiplicacion } = require('../mathHelper');

describe('mathHelper', () => {

  // describe() agrupa tests relacionados
  describe('add()', () => {
    it('suma dos números positivos correctamente', () => {
      // Arrange
      const a = 2, b = 3;

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(5);
    });

    it('suma números negativos', () => {
      expect(add(-1, -4)).toBe(-5);
    });
  });

  describe('divide()', () => {
    it('devuelve el cociente correcto', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    it('lanza error al dividir entre cero', () => {
      expect(() => divide(5, 0)).toThrow('No se puede dividir entre cero.');
    });
  });

  describe('restar()', () => {
    it('resta dos números positivos correctamente', () => {
      // Arrange
      const a = 10, b = 4;

      // Act
      const result = restar(a, b);

      // Assert
      expect(result).toBe(6);
    });

    it('resta con resultado negativo', () => {
      expect(restar(3, 7)).toBe(-4);
    });

    it('resta con números negativos', () => {
      expect(restar(-5, -3)).toBe(-2);
    });
  });

  describe('multiplicacion()', () => {
    it('multiplica dos números positivos correctamente', () => {
      // Arrange
      const a = 3, b = 4;

      // Act
      const result = multiplicacion(a, b);

      // Assert
      expect(result).toBe(12);
    });

    it('multiplica por cero', () => {
      expect(multiplicacion(5, 0)).toBe(0);
    });

    it('multiplica números negativos', () => {
      expect(multiplicacion(-2, 3)).toBe(-6);
    });
  });

});