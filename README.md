# Customers-API
> API Restful em NodeJS

CRUD desenvolvido em NodeJS para cadastro, consulta, edição e exclusão de clientes.

O projeto utliza uma base _mockada_ através de um arquivo JSON

## Dependências
* body-parser: 1.19.0
* config: 3.2.5
* consign: 0.1.6
* express: 4.17.1
* nodemon: 2.0.2
* uuid: 3.4.0

## URL para testar a API através do Postman ou Insomnia 

* **GET** https://customers-api-gustavolarsen.herokuapp.com/api/v1/customers

* **POST** https://customers-api-gustavolarsen.herokuapp.com/api/v1/customers

* **PUT** https://customers-api-gustavolarsen.herokuapp.com/api/v1/customers/:customerId

* **DELETE** https://customers-api-gustavolarsen.herokuapp.com/api/v1/customers/:customerId

> **body** para as requisições POST e PUT

```
{
 "name": "Nome do cliente",
 "birthDate": "1989-11-11T03:00:00Z",
 "cellphone": "(32)11111111",
 "phone": "(32)11111111",
 "email": "email@email.com.br",
 "occupation": "Desenvolvedor",
 "state": "SP"
}
```
### Exemplo de uso no Insomnia
<img src="https://i.imgur.com/cGY5eaO.png">

## Recomendações
Recomendo o uso do `YARN` para instalação de pacotes. [yarnpkg.com](https://yarnpkg.com)

## Autor
Gustavo Larsen – [@gustavoslarsen](https://twitter.com/gustavoslarsen)

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

[https://github.com/gustavolarsen](https://github.com/gustavolarsen)
