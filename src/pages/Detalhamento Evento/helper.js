function formatarData(dataISO) {
    const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    const data = new Date(dataISO);
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();
  
    return `${dia}/${mes}/${ano} • ${horas}:${minutos.toString().padStart(2, '0')}`;
}

export {
    formatarData,
}