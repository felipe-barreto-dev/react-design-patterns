# Design Patterns no React
### O que é?
Design Patterns são soluções efetivas para problemas comuns no desenvolvimento de aplicações.

### Objetivo
O objetivo dessa documentação é apresentar as principais soluções para problemas comuns no React.js

### Temas abordados
- Criar layouts reutilizáveis;
- Reutilizar lógicas complexas entre vários componentes;
- Trabalhar com formulários;
- Incorporar conceitos funcionais;

## 1 - Layout Components

### O que são Layout Components?
Componentes react que lidam principalmente com a organização de outros componentes na página.
Alguns exemplos são: 
- Split Screens;
- List and Items;
- Modals;

### A principal idéia dos Layout Components
Nossos componentes NÂO devem saber onde estão sendo chamados/exibido.
Caso tenhamos uma barra de navegação, por exemplo, e ela está sendo usada da seguinte forma:
 ```html
 <div>
    <a>Home</a>
    <a>Login</a>
    ...
 </div>
```
Isso pode ser abstraído para um componente reutilizável, usando a props children.
 ```html
 const SideDrawer = ({children}) => {
     return  <div>{children}</div>
 }
 
<SideDrawer>
    <a>Home</a>
    <a>Login</a>
    ...
</SideDrawer>
```
Dessa forma, o componente é separado do lugar onde ele está sendo exibido, trazendo mais flexibilidade no seu uso futuro e aproveitando uma das principais vantagens do React.js.

## 2 - Controlled vs Uncontrolled Components

### O que são Uncontrolled Components?
Componentes que rastreiam seus próprios estados e liberam dados somente quando algum evento ocorre, como o submit dos forms, por exemplo.

```jsx
    const Component = ({onSubmit}) => {
        const [state, setState] = useState()

        return ...
    }

    <Component onSubmit={data => ...} />
```

### O que são Controlled Components?
Componentes que NÃO rastreiam seus próprios estados. Todos os estados são passados como props, como quando usamos o useState para controlar inputs

```jsx
    const Component = ({onSubmit, data, changeData}) => {
        return ...
    }

    <Component 
        onSubmit={() => ...} 
        data={...} 
        changeData={() => ...} 
    />
```

### Os Controlled Components são mais utilizados por várias razões, uma delas é a facilidade de reutilização desse componente

