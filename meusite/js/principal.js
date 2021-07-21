var botaoAdicionar = document.querySelector("#adicionar-curso");
botaoAdicionar.addEventListener("click", function(){

    var form = document.querySelector("#form-adiciona");

    //Extraindo informações do curso do formulário
    var curso = obtemCursoDoForm(form);
    var linhacurso = montaTr(curso);

    var tabelacursos = document.querySelector("#tabelacursos");

    tabelacursos.appendChild(linhacurso);

    form.reset();
});


function obtemCursoDoForm(form){
    var curso = {
        nome:         form.curso.value,
        formacao:     form.formacao.value,
        data:         form.dataconclusao.value,
        certificado:  form.certificado.value,
        cargahoraria: form.cargahoraria.value
    }
    return curso;
}


function montaTr(curso){
    var linhacurso = document.createElement("tr");

    var cursoTd        = document.createElement("td");
    var formacaoTd     = document.createElement("td");
    var dataTd         = document.createElement("td");
    var certificadoTd  = document.createElement("td");
    var cargahorariaTd = document.createElement("td");

    dataTd.classList.add("data");
    cargahorariaTd.classList.add("CH");

    cursoTd.textContent        = curso.nome;
    formacaoTd.textContent     = curso.formacao;
    dataTd.textContent         = curso.data;
    certificadoTd.textContent  = curso.certificado;
    cargahorariaTd.textContent = curso.cargahoraria;

    linhacurso.appendChild(cursoTd);
    linhacurso.appendChild(formacaoTd);
    linhacurso.appendChild(dataTd);
    linhacurso.appendChild(certificadoTd);
    linhacurso.appendChild(cargahorariaTd);

    return linhacurso;
}
