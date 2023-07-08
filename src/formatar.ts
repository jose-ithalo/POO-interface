export function formartarNum(num: number): string {

    const numeroFormatado: number = num / 100;

    return numeroFormatado.toFixed(2).replace('.', ',');

}