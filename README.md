# Seazone Code Challenge

# Rotas

Utilizei o `React-router-dom` para gerenciar as rotas da aplicação, começando a navbar por fora para que esta esteja presente em todas as rotas da aplicação, cada link da navbar tem uma rota própria e ao digitar uma rota que não existe no sistema o usuário automáticamente é redirecionado a rota padrão `"/"`

## Rota propriedade

A rota de propriedades `/properties` junto da rota de detalhes de cada propriedade `/details` ambas possuem o elemento `InfoBar.jsx` em comum.

### Rota details

Na rota de detalhes é mostrado os detalhes de cada casa no sistema, porém como a imagem é gerada do unsplash ela não muda de acordo com a imagem de cada card, é sempre fixa e sempre igual a imagem do primeiro card apenas.

## Cards

Na rota de propriedades foram gerados varios cards que representam as casas, para cria-los foi utilizada a `api do unsplash` na qual se pode gerar imagens randomicas atrasves de um link, também se pode filtrar por termos especifícos, como nos cards o termo filtrado é `house` o que permite a criação de varias imagens com o tema house.

Os links ficam dentro de um `for loop` cujo limite pode ser controlado pelo programador atraves da constante `limit` encontrada em `components/proprieties/Properties`, para que as imagems geradas fossem diferentes umas das outras, foi necessário adicionar +1 no tamanho delas para cada passagem do loop, pois o comportamento padrão do unsplash geraria todas as imagens iguais se não houvesse esse acressimo no seu tamanho.

### Logica dos cards

A função random() é responsável por definir os valores tanto de preço como de tamanho aleatórios, variando entre 1 - 500, e caso o parametro passado para a função seja 0, o valor varia apenas de 1 - 20, essa condição especial foi introduzida para definir número de cards que é gerado quando a pagina é carregada, sendo assim toda vez que é recarregada um numero de cards diferentes vai aparecer juntamente com valores diferentes.

Todos esses valores gerados pela função são passados como props para o component Cards, que os recebe e implementa dentro do componente

Uma variavel `let nCards` representa o array de cards, e serve apenas para exibi-los dentro
do container apropriado, no caso `card-container`

# Abaixo o readme automático gerado pelo create-react-app

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
