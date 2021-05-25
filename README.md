# Seazone Code Challenge

# Rotas

Utilizei o `React-router-dom` para gerenciar as rotas da aplicação, começando a navbar por fora para que esta esteja presente em todas as rotas da aplicação, cada link da navbar tem uma rota própria e ao digitar uma rota que não existe no sistema o usuário automaticamente é redirecionado a rota padrão `"/"`

## Rota propriedade

A rota de propriedades `/properties` junto da rota de detalhes de cada propriedade `/details` ambas possuem o elemento `InfoBar.jsx` em comum.

### Rota details

Na rota de detalhes é mostrado os detalhes de cada casa no sistema, porém como a imagem é gerada do unsplash ela não muda de acordo com a imagem de cada card, é sempre fixa e sempre igual a imagem do primeiro card apenas.

## Cards

Na rota de propriedades foram geradas vários cards que representam as casas, para cria-los foi utilizada a `api do unsplash` na qual se pode gerar imagens randômicas através de um link, também se pode filtrar por termos específicos, como nos cards o termo filtrado é `house` o que permite a criação de várias imagens com o tema house.

Os links ficam dentro de um `for loop` cujo limite pode ser controlado pelo programador através da constante `limit` encontrada em `components/proprieties/Properties`, para que as imagens geradas fossem diferentes umas das outras, foi necessário adicionar +1 no tamanho delas para cada passagem do loop, pois o comportamento padrão do unsplash geraria todas as imagens iguais se não houvesse esse acréscimo no seu tamanho.

O número de casas geradas também varia dinamicamente, portanto cada vez que a página é recarregada ele gera um novo número de cards, variando de 1 a 50 

### Lógica dos cards

A função random() é responsável por definir os valores tanto de preço como de tamanho aleatório, variando entre 1 - 500, e caso o parâmetro passado para a função seja 0, o valor varia apenas de 1 - 20, essa condição especial foi introduzida para definir número de cards que é gerado quando a página é carregada, sendo assim toda vez que é recarregada um número de cards diferentes vai aparecer juntamente com valores diferentes.

Todos esses valores gerados pela função são passados como props para o component Cards, que os recebe e implementa dentro do componente

Uma variável `let nCards` representa o array de cards, e serve apenas para exibi-los dentro
do container apropriado, no caso `card-container`

## Detail page

A página de detalhes nada mais é do que uma rota na aplicação, que é acessada por um link na imagem de cada card na rota de propriedades 

Assim como os cards a detail page também utiliza valores randômicos e gera novos cada vez que a página é recarregada

Por conta de uma limitação da api do unsplash e da lógica que utilizei para os Cards, não foi possível gerar a mesma imagem ao clicar no card na rota principal, porém o index do card é passado como parâmetro na rota, onde o mesmo é capturado e colocado no source da imagem, porém ainda assim as imagens não coincidiram

# css 

O css do site está todo dentro da pasta style `/assets/style/ ` dividido em componentes como na aplicação principal porém ao invés de ser importado diretamente dentro de cada componente, eles todos ficam dentro do arquivo `index.css` na raiz da aplicação, que é importado dentro de `index.js` que é o único lugar do sistema onde o css é importado, escolhi essa organização pois é uma forma mais simples de manter além de separar bem o que css dos componentes. 

# Como rodar a aplicação

### Teste simples 

 A aplicação pode ser facilmente testada pelo link 

[Seazone-code-challenge](https://seazone.vercel.app/)

### Rodando pelo terminal 

Para rodar a aplicação basta digitar os seguintes comandos no terminal

```shell
git clone https://github.com/4ly-a/seazone-code-challenge
```

E depois


```shell
npm install && npm start
```




[readme automático gerado pelo create-react-app](src/assets/react.md)
