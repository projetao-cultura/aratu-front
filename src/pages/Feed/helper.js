function formatarNomeCategoria(nomeCategoria) {
    const palavras = nomeCategoria[0].split('_');
    const palavrasFormatadas = palavras.map((palavra, index) => {
      // Capitaliza a primeira letra de cada palavra
      return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    });
  
    // Se houver mais de duas palavras, inserir vírgulas entre elas, exceto antes da última
    if (palavrasFormatadas.length > 2) {
      const ultimaPalavra = palavrasFormatadas.pop();
      return palavrasFormatadas.join(', ') + ' e ' + ultimaPalavra;
    }
  
    // Juntar as palavras formatadas com espaço
    return palavrasFormatadas.join(' ');
}

export {
    formatarNomeCategoria
}