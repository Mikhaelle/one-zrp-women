# Sobre a aplicação

![image1](https://github.com/Mikhaelle/one-zrp-women/blob/master/Captura%20de%20tela%20de%202020-09-28%2001-16-00.png)
 
Para o projeto foi utilizada a stack MERN, 

- MongoDB
- Express
- React.js
- Node.js

O React.js foi utilizado pra criar o frontend, disponível na pasta client. O Node.js e o express foram utilizados para criar a api do backend e integrados com o banco de dados MongoDB, disponível na pasta server.
O client se comunica com o server através de requisições HTTP. Todas as tecnologias estão integradas e foram utilizadas para proporcionar um projeto escalável.

Ao entrar na pagina, é possível perceber os dados carregando e logo em seguida uma aba com os herois, ameaças e ameaças derrotadas aparece.

# Rodando a aplicação no local

Na pasta client quanto na server rode:
```
npm install
npm start 
```

A aplicação do client roda na porta 3000:
http://localhost:3000/

A aplicação do client roda na porta 5000:
http://localhost:5000/

## rotas implemenadas:

http://localhost:5000/api/heroes

http://localhost:5000/api/threats

http://localhost:5000/api/threatsEnd

## metodos suportados
 
GET, POST, PATCH, DELETE


