# Challenge PenseApp 📱

Uma loja com uma listagem dos produtos, com função de cadastrar um novo produto, ou deletar.

# Requerimentos

### Back-end

1. Iniciar o serviço de banco da dados do PostgreSQL através do docker, por exemplo
2. Criar o banco de dados "postgres", conforme o arquivo de configuração do typeorm
3. Fazer o clone do repositório na máquina
4. Executar o comando "yarn" para instalar todas as dependências do projeto
5. Executar o comando yarn typeorm migration:run para criar as tabelas no banco de dados
6. Executar o comando yarn dev:server. A aplicação irá iniciar a após alguns segundos será exibida no terminal a mensagem "Server started on port 3333!" Então é possível acessar a aplicação através do endereço http://localhost:3333/{rota}"
7. Para fazer o teste é possível utilizar um sistema como o Insomnia, acessando o endereço e passando as informações e analisando os resultados retornados.

### Front-end

1. Executar um `yarn`
2. Se for usar um dispositivo físico, coloque o seu IP aqui `http://{ip}:3333/{rota}`
3. Execute um `expo start`, e se estiver tudo certo, é só abrir o projeto

# O que pode ser feito no App ✏️

- Adicionar Yup
- Usar ScrollView ao ínves de uma FlatList
- Resolver o problema do teclado sobrepondo o form
- Limpar o form quando cadastrar algo
- Wishlist
- Caso não tenha produtos, mostre uma mensagem "Sem produtos cadastrado"

### Observação

Não deu para fazer esses outros itens por causa do tempo, tive 3 dias para fazer, mas no primeiro dia, na parte da noite, estava entendendo a parte do Back-end, então demorei algumas horas pra entender como funcionava, todo o app foi feito em 2 dias, então foi quase um simples MVP, com mais tempo, talvez desse para implementar essas outras features

# Feedback

Se você tiver algum feedback, favor enviar um email dolan.3@hotmail.com
