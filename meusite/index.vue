<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>Bruno Henrique</title>

    <!-- Importando o Vuetify e Vue.js -->
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@3.0.0-beta.13/styles.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vuetify@3.0.0-beta.13/dist/vuetify.min.js"></script>

    <style>
        /* Estilos personalizados */
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f4;
        }
        .caixa {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    </style>
</head>
<body>
    <div id="app">
        <v-app>
            <!-- Cabeçalho -->
            <v-app-bar app color="indigo" dark>
                <div class="caixa">
                    <v-img src="logo.png" max-width="100" alt="Logo"></v-img>
                    <v-spacer></v-spacer>
                    <v-btn text to="indice.html">Páginas Inicial</v-btn>
                    <v-btn text to="codigos-e-teste.html">Códigos e Testes</v-btn>
                    <v-btn text to="cursos.html">Cursos concluídos</v-btn>
                    <v-btn text to="contatos.html">Contato</v-btn>
                </div>
            </v-app-bar>
        </v-app>
    </div>

    <script>
        // Inicializando o Vue e Vuetify
        const app = Vue.createApp({});
        app.use(Vuetify);
        app.mount('#app');
    </script>
</body>
</html>

