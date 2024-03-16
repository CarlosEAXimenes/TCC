export default function(valor){
    // Formatar o valor para Reais (BRL)
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}