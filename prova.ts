import * as fs from 'fs';
import * as readlineSync from 'readline-sync';

function lerArquivo(nomeArquivo: string): string[] | null {
    try {
        const conteudo = fs.readFileSync(nomeArquivo, 'utf-8');
        const palavras = conteudo.split(/\s+/);
        return palavras;
    } catch (error) {
        console.error(`Erro ao ler o arquivo ${nomeArquivo}: ${error}`);
        return null;
    }
}

function buscaSequencial(palavras: string[], alvo: string): number {
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] === alvo) {
            return i;
        }
    }
    return -1;
}

function main() {
    const nomeArquivo = 'seuarquivo.txt';  // Substitua pelo seu nome de arquivo real

    const palavras = lerArquivo(nomeArquivo);

    if (palavras) {
        const palavraAlvo = readlineSync.question("Digite a palavra a ser buscada: ");

        if (palavraAlvo !== null) {
            const posicao = buscaSequencial(palavras, palavraAlvo);

            if (posicao !== -1) {
                console.log(`A palavra '${palavraAlvo}' foi encontrada na posição ${posicao}.`);
            } else {
                console.log(`A palavra '${palavraAlvo}' não foi encontrada no arquivo.`);
            }
        } else {
            console.log("Entrada inválida. Você pressionou Cancelar ou a entrada é nula.");
        }
    }
}

main();
