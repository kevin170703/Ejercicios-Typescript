function findingValueInArray(array: number[], numero: number): boolean {
  // funcion para saber si dos numeros de un array sumados da por resultado un valor pasado por parametros
  return array
    .map((valor, indice) => valor + array[indice + 1] === numero)
    .includes(true);
}

function sunAll(numOne: number, numTwo: number): number {
  // funcion para sumar EJ: sunAll(1,4) = 1 + 2 + 3 + 4 = 10
  let array: number[] = [];
  while (!array.includes(numTwo)) {
    array.push(numOne++);
  }
  return array.reduce((a, b) => a + b);
}

const sumMultidimensionalArray = (arr: Array<number>): number => {
  // sumar array de numeros multidimensional
  return arr.flat(Infinity).reduce((a, b) => a + b);
};

const sumMultidimensionalArrayNotFlat = (arr: Array<number>): number => {
  // sumar array multidimensional sin el metodo flat
  let contador = 0;
  arr.forEach((value: Array<number> | number) => {
    if (Array.isArray(value))
      return (contador += sumMultidimensionalArray(value));
    else contador += value;
  });
  return contador;
};

const countSting = (str: string): object => {
  // funcion para contar la cantidad de palabras de un string con la mayor conpatibilidad
  let obj: { [key: string]: number } = {};
  let strArr = str
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase()
    .split(" ");

  strArr.forEach((valor) => {
    if (!obj[valor]) obj[valor] = 1;
    else obj[valor]++;
  });

  return obj;
};

const objectToArrayOfObjects = (obj: object): Array<object> => {
  return Object.keys(obj).map((key) => {
    const value = obj[key];
    return { [key]: value };
  });
};
