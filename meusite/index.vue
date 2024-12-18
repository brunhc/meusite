<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>Bruno Henrique</title>

    <!-- Importando Vue 3 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.global.js"></script>
    
    <!-- Importando Vuetify -->
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@3.0.0-beta.13/styles.min.css" rel="stylesheet">
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
                    <v-btn text href="indice.html">Páginas Inicial</v-btn>
                    <v-btn text href="codigos-e-teste.html">Códigos e Testes</v-btn>
                    <v-btn text href="cursos.html">Cursos concluídos</v-btn>
                    <v-btn text href="contatos.html">Contato</v-btn>
                </div>
            </v-app-bar>
        </v-app>
    </div>

    <!-- Inicializando Vue 3 e Vuetify -->
    <script>
        const app = Vue.createApp({});
        app.use(Vuetify);
        app.mount('#app');
    </script>
</body>
</html>
