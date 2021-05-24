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
### Lógica dos cards

A função random() é responsável por definir os valores tanto de preço como de tamanho aleatório, variando entre 1 - 500, e caso o parâmetro passado para a função seja 0, o valor varia apenas de 1 - 20, essa condição especial foi introduzida para definir número de cards que é gerado quando a página é carregada, sendo assim toda vez que é recarregada um número de cards diferentes vai aparecer juntamente com valores diferentes.

Todos esses valores gerados pela função são passados como props para o component Cards, que os recebe e implementa dentro do componente

Uma variável `let nCards` representa o array de cards, e serve apenas para exibi-los dentro
do container apropriado, no caso `card-container`


[readme automático gerado pelo create-react-app](src/assets/react.md)
