const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Escolha a porta que deseja usar

// Middleware para analisar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para receber os dados do GPS
app.post('/gps-data', (req, res) => {
    const data = req.body; // Os dados enviados pelo GPS

    console.log('Dados recebidos:', data);

    // Aqui você pode processar os dados, salvar em um banco de dados, etc.

    // Responda ao dispositivo GPS
    res.status(200).send('Dados recebidos com sucesso!');
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});