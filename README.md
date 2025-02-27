# Projeto de Teste - ACT Digital 🚀

Este projeto é um **projeto de teste** para a empresa **ACT Digital**. Abaixo seguem as informações sobre como o projeto está estruturado:

---

## 🔧 CI (Integração Contínua)
A parte de **CI** está neste repositório. Você pode conferir as configurações de integração contínua aqui.

## 🚀 CD (Entrega Contínua) - ArgoCD 🦑
A parte de **CD** está configurada no **ArgoCD** e pode ser acessada através do seguinte endereço:

[ArgoCD - Acesso via IP](http://82.25.79.79:31295)

- **usr:** admin
- **pwd:** 2K-IZkZ80UEpYBmR

> **Nota:** O acesso ao ArgoCD está sendo feito via IP devido a problemas na configuração do Ingress do servidor.

## 📦 GitOps
Este projeto foi desenvolvido com o conceito de **GitOps**, o que significa que ele é composto por **dois repositórios**:

1. Este repositório, que contém o código da **aplicação**.
2. Outro repositório "https://github.com/tiago-linhares-learning/infra-node", que contém as informações sobre a **infraestrutura**.

---

## 🛠️ Realizando o Deploy
### 🔄 Realizar o deploy da aplicação e da infraestrutura
Para realizar o **deploy** da **aplicação** e também fazer alterações na **infraestrutura**, basta editar o arquivo: /infra/infra.yaml


### ⚙️ Realizar o deploy apenas alterando a infraestrutura
Caso queira realizar o **deploy** alterando apenas a **infraestrutura**, sem atualizar a aplicação, basta modificar o arquivo: charts/my-node-app/values.yaml

Ambos repósitórios estão com gatilho para iniciar a pipeline a partir de um commit na branch main

OBS: a pipeline está configurada para rodar em um runner self-hosted, confira se o mesmo está ativo antes de iniciar os testes

---

## 📊 SonarQube
O **SonarQube** está rodando no seguinte endereço:

[SonarQube - Acesso via IP](http://82.25.79.79:30289)

- **usr:** admin
- **pwd:** 2K-IZkZ80UEpYBmR

**Projeto criado por Tiago Linhares**  
📱 **Telefone:** (11)95780-9554  
🔗 **LinkedIn:** [Tiago Linhares](https://www.linkedin.com/in/tiago-m-linhares/)  
📧 **Email:** [tiago.linhares@live.com](mailto:tiago.linhares@live.com)




