
# rss-feed-backend

## Banco:
- Criação da tabela personal_feed: Salva os feeds dos usuários. 

>   CREATE TABLE IF NOT EXISTS personal_feed ( 
>
>   id_feed int NOT NULL primary key auto_increment, 
>
>   id_user int NOT NULL,
>
>   title varchar(100) NOT NULL,
>
>   link varchar(200) NOT NULL,
>
>   author varchar (80) NULL,
>
>   description varchar (500) NOT NULL,
>
>   image varchar (250) NULL
>
>   ) ENGINE=InnoDB DEFAULT CHARSET=latin1;




- Criação da tabela user: Salva os usuários.

>   CREATE TABLE IF NOT EXISTS user (
>
>   id_user int NOT NULL primary key auto_increment,
>
>   name varchar(100) NOT NULL
>
>   ) ENGINE=InnoDB DEFAULT CHARSET=latin1;




## Endpoints (Personal_Feed):
| Descrição |   Método  |  Endpoing |
| --------- | --------- | --------- |
|Buscar feeds por usuário (Passar id do usuário na URL) | GET | https://rss-reader-backend.herokuapp.com/PersonalFeeds/{id_user} |
| Salvar feed (Passar objeto no corpo da requisição) | POST   | https://rss-reader-backend.herokuapp.com/PersonalFeeds/ |
| Atualizar feed (Passar objeto no corpo da requisição) | PUT    | https://rss-reader-backend.herokuapp.com/PersonalFeeds/ |
| Deletar feed (Passar objeto no corpo da requisição)  | DELETE | https://rss-reader-backend.herokuapp.com/PersonalFeeds/ |

```sh
> Exemplo de Objeto PersonalFeed para enviar no corpo (body) dos métodos POST / PUT / DELETE:
{
    "id_feed": 1,
    "id_user": 1,
    "title": "titulo do feed",
    "link": "link do feed",
    "author": "Autor da noticía do feed",
    "description": "DEscrição da noticía.",
    "image": "link imagem noticía"
}
```
OBS1: Id do feed é gerado automaticamente quando criado no Banco de dados.

OBS2: Atualização é feita pelo id do usuário e id do feed.

OBS3: Deleção feita pelo id do feed.

## Endpoints (User):
| Descrição |   Método  |  Endpoing |
| --------- | --------- | --------- |
|Buscar todos usuários  | GET | https://rss-reader-backend.herokuapp.com/Users/ |
|Buscar usuário pelo seu id (Passar id do usuário na URL) | GET | https://rss-reader-backend.herokuapp.com/Users/{id_user} |
| Salvar usuário (Passar objeto no corpo da requisição) | POST   | https://rss-reader-backend.herokuapp.com/Users/ |
| Atualizar usuário (Passar objeto no corpo da requisição) | PUT    | https://rss-reader-backend.herokuapp.com/Users/ |
| Deletar usuário (Passar objeto no corpo da requisição)  | DELETE | https://rss-reader-backend.herokuapp.com/Users/ |
```sh
> Exemplo de Objeto Usuário para enviar no corpo (body) dos métodos POST / PUT / DELETE:
{
    "id_user": 0,
    "name": "Usuário",
    "password": "123456"
}
```
OBS1: Id do usuário é gerado automaticamente quando criado no Banco de dados.

OBS2: Atualização é feita pelo id do usuário.

OBS3: Deleção feita pelo id do usuário.
