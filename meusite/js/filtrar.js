var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var cursos = document.querySelectorAll(".cursoconcluido");

    if (this.value.length > 0) {
        for (var i = 0; i < cursos.length; i++) {
            var curso = cursos[i];
            var tdCurso = curso.querySelector(".nomeCurso");
            var tdFormacao = curso.querySelector(".formacao");

            var nome = tdCurso.textContent;
            var formacao = tdFormacao.textContent;

            var expressao = new RegExp(this.value, "i");

            if(!expressao.test(nome) && !expressao.test(formacao)) {
                curso.classList.add("invisivel");
            }else{
                curso.classList.remove("invisivel");
            }
        }
    }else {
        for (var i = 0; i < cursos.length; i++) {
            var curso = cursos[i];
            curso.classList.remove("invisivel");
        }
    }


});
