import * as core from '@actions/core';
import * as fs from 'fs';
import * as path from 'path';

async function run() {
  try {
    // Obtenha o caminho do arquivo a partir dos inputs
    const filePath = core.getInput('path');
    const fileExists = fs.existsSync(path.resolve(filePath));

    // Verifique se o arquivo existe
    if (!fileExists) {
      core.setFailed(`O arquivo ${filePath} não foi encontrado no repositório. É necessário para o build.`);
    } else {
      core.info(`O arquivo ${filePath} foi encontrado. A validação foi bem-sucedida.`);
    }
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(`Erro ao validar o arquivo: ${error.message}`);
    }
  }
}

run();
