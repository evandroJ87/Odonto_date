function calcularDataRetorno() {
    const nomePaciente = document.getElementById('nomePaciente').value;
    const dataManutencaoInput = document.getElementById('dataManutencao').value;
    const resultadoDiv = document.getElementById('resultado');

    if (!nomePaciente || !dataManutencaoInput) {
        resultadoDiv.textContent = "Por favor, preencha o nome do paciente e a data da manutenção.";
        return;
    }

    const dataManutencao = new Date(dataManutencaoInput);
    const dataRetorno = new Date(dataManutencao);

    // Adiciona 30 dias em milissegundos (30 * 24 * 60 * 60 * 1000)
    dataRetorno.setDate(dataRetorno.getDate() + 30);

    // Verifica se a data de retorno cai em um sábado (6) ou domingo (0)
    const diaSemana = dataRetorno.getDay();
    if (diaSemana === 6) { // Sábado
        dataRetorno.setDate(dataRetorno.getDate() + 2); // Adiciona 2 dias para segunda-feira
    } else if (diaSemana === 0) { // Domingo
        dataRetorno.setDate(dataRetorno.getDate() + 1); // Adiciona 1 dia para segunda-feira
    }

    const dia = String(dataRetorno.getDate()).padStart(2, '0');
    const mes = String(dataRetorno.getMonth() + 1).padStart(2, '0'); // Meses em JS começam em 0
    const ano = dataRetorno.getFullYear();

    const mensagem = `Olá ${nomePaciente}, que bom te ter por aqui! A data da sua volta para a manutenção é ${dia}/${mes}/${ano}! OBS: Caso essa data caia em um sáb ou dom, venha na segunda-feira!`;

    resultadoDiv.textContent = mensagem;
}