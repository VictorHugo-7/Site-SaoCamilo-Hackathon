let bd = {}


function pegarDadosLembretes() {
    let inputNomeFisioterapeuta = document.querySelector("#fisioterapeuta")
    let inputNomePaciente = document.querySelector("#paciente")
    let inputExercicio = document.querySelector("#exercicio")
    let inputSessoesSemana = document.querySelector("#sessoesSemana")
    let inputSessoesDia  = document.querySelector("#sessoesDia")
    let inputSeries  = document.querySelector("#series")
    let inputRepeticoes  = document.querySelector("#repeticoes")
    let inputTempoPorSerie  = document.querySelector("#tempoPorSerie")
    let inputUrlVideo  = document.querySelector("#urlVideo")
    let inputObservacoes  = document.querySelector("#observacoes")

    let nomeFisioterapeuta = inputNomeFisioterapeuta.value
    let nomePaciente = inputNomePaciente.value
    let exercicio = inputExercicio.value
    let sessoesSemana = inputSessoesSemana.value
    let sessoesDia = inputSessoesDia.value
    let series = inputSeries.value
    let repeticoes = inputRepeticoes.value
    let tempoPorSerie = inputTempoPorSerie.value
    let urlVideo = inputUrlVideo.value
    let observacoes = inputObservacoes.value

    let novoExercicio = {
        fisioterapeuta: nomeFisioterapeuta,
        exercicio: exercicio,
        sessoesSemana: sessoesSemana,
        sessoesDia: sessoesDia,
        series: series,
        repeticoes: repeticoes,
        tempoPorSerie: tempoPorSerie,
        urlVideo: urlVideo,
        observacoes: observacoes
    };

    if (!bd[nomePaciente]) {
        bd[nomePaciente] = []
    }

    bd[nomePaciente].push(novoExercicio)

    console.log(bd)
}

