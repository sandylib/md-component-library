# medirecod design system User Guide
## Commands


```bash
 yarn start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.


## Storybook

Run inside another terminal:

```bash
yarn storybook
```


### start a new component

```
  yarn gen component Card //Card is the component name
```
 then select component,

This generate a component with name Card for you:

```
✔  ++ /src/components/Card/Card.tsx
✔  ++ /src/components/Card/Card.test.tsx
✔  ++ /src/components/Card/Card.stories.tsx
✔  ++ /src/components/Card/Card.styled.ts
✔  ++ /src/components/Card/index.ts
✔  _+ /src/components/index.ts
✔  _+ /src/components/index.ts
```
