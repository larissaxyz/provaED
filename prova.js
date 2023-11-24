"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var readlineSync = require("readline-sync");

function lerArquivo(nomeArquivo) {
    try {
        var conteudo = fs.readFileSync(nomeArquivo, 'utf-8');
        var palavras = conteudo.split(/\s+/);
        return palavras;
    } catch (error) {
        console.error("Erro ao ler o arquivo " + nomeArquivo + ": " + error);
        return null;
    }
}

function buscaSequencial(palavras, alvo) {
    for (var i = 0; i < palavras.length; i++) {
        if (palavras[i] === alvo) {
            return i;
        }
    }
    return -1;
}

function main() {
    var nomeArquivo = 'paragrafo.txt'; // Alterado para 'paragrafo.txt'
    var palavras = lerArquivo(nomeArquivo);

    if (palavras) {
        var palavraAlvo = readlineSync.question("Digite a palavra a ser buscada: ");

        if (palavraAlvo !== null) {
            var posicao = buscaSequencial(palavras, palavraAlvo);

            if (posicao !== -1) {
                console.log("A palavra '" + palavraAlvo + "' foi encontrada na posição " + posicao + ".");
            } else {
                console.log("A palavra '" + palavraAlvo + "' não foi encontrada no arquivo.");
            }
        } else {
            console.log("Entrada inválida. Você pressionou Cancelar ou a entrada é nula.");
        }
    }
}

main();
