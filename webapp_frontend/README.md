## Development Cycle

### To start a server

```
npm install
# to start a server locally
npm run dev
```

### Linting and Formatting

TODO: move this to a git commit hook or something so it's not manual

When making changes to the codebase, run the following commands

```
# runs the linter using eslint and typescript-eslint. Also fixes linting rules that it can fix
npm run lint:fix

# runs the prettier formatter
npm run format:fix


# As a shortcut, you can run the following command to run both
npm run fix
```

### Git commits

When making commit messages please follow [conventional commits](conventionalcommits.org/en/v1.0.0-beta.4/#specification)

As a general rule, commits should start with a noun followed by an optional scope, and a required terminal colon and space. For example:

```
feat(webapp): add footer to home page
```

Generally, I follow one of [these types](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#type) of commit messages.

## Documentation

This application is built using the NextJS framework. We use NextJS with typescript and utilize Material UI as the core react UI components.

### NextJS

Next.js is a flexible React framework that gives you building blocks to create fast web applications. It is built on top on React. If you are not familiar with React I would reccomend starting there. I would also reccomend following this [guide on building a NextJS application](https://nextjs.org/learn/basics/create-nextjs-app) provided by the NextJS team. This will go through the basics on building an application in NextJS.

For documentation on NextJS take a look at their [documentation](https://nextjs.org/docs/getting-started)

### React

React is a javascript framework created by Facebook and released for general use by the public in 2013. React functional which makes it a great framework to work in. If you are not familiar with functional programming I would reccomend diving into it, but knowing functional programming is not necessary to understand react.

To get started on building a react application I would follow this official [guide on building a tik tac toe React Application](https://react.dev/learn/tutorial-tic-tac-toe).

This guide is also utilizing functional components which is the modern and reccomended approach. Functional components is a lot easier to maintain than class components. We should never be using class components. This is because [composition is a lot easier to maintain than inheritance](https://legacy.reactjs.org/docs/composition-vs-inheritance.html) in react.

React relies on hierarchy which is documented [here](https://react.dev/learn/thinking-in-react). A core part of react is to pass in properties from the parent to the child. React also supports global contexes for properties that should generally be known by all components.

Despite being functional and being as side affect agnostic as possible, we still need states. A large part of utilizing react is using the various hooks to maintain state in the application. Here are some [build in react hooks](https://react.dev/reference/react) which is important in building an interactive react application.

### Typescript

TypeScript is a programming language that is a superset of JavaScript, which means that it adds additional features to the language without breaking backward compatibility. TypeScript was first released in 2012 and has been growing in popularity ever since. It is developed and maintained by Microsoft.

The main feature of TypeScript is its strong typing system. This means that variables, parameters, and functions can have explicit types that are checked at compile time. TypeScript also supports object-oriented programming concepts such as classes, interfaces, and inheritance. To start learning typescript you can start [here](https://www.typescriptlang.org/docs/handbook/2/basic-types.html).

### UI Components

Material UI is a popular React component library that is based on Google's Material Design principles. It provides a wide range of customizable components that you can use to build user interfaces.
Atom Zombie Smasher
## Notes

### Package.json

```
//required for nextJS typescript
    "next": "latest",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
    "@types/node": "^12.12.21",
    "@types/react": "^17.0.2",
    "@types/react-dom": "^17.0.1",
    "typescript": "^4.8.3"

// required for material UI
    "@emotion/react": "^11.10.8",
    "@emotion/styled": "^11.10.8",
    "@fontsource/roboto": "^4.5.8",
    "@mui/material": "^5.12.2",
```

### File structure

every single page should have it's own modules subfolder
