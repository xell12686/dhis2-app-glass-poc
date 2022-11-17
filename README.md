# GLASS APP initial components

## Setup

Install dependencies:

```
$ yarn install
```

## Development

Start development server:

```
$ yarn start
```

And then access the development server of the app: http://localhost:8081

## Linting:

```
$ yarn lint
```

## Tests

Run unit tests:

```
$ yarn test
```

## Build app ZIP

```
$ yarn build-webapp
```

## Some development tips

### Structure

-   `i18n/`: Contains literal translations (gettext format)
-   `public/`: Main app folder with a `index.html`, exposes the APP, contains the feedback-tool.
-   `src/index.ts`: Connection with DHIS2 and React entrypoint.
-   `src/CompositionRoot.ts`: Composition root of the app (clean architecture)
-   `src/domain`: Domain layer of the app (clean architecture)
-   `src/data`: Data of the app (clean architecture)
-   `src/webapp/pages`: Router and pages to be rendered.
-   `src/webapp/components`: Reusable React components to be used in pages.
-   `src/webapp/contexts`: React context used as global state management.
-   `src/types`: `.d.ts` file types for modules without TS definitions.
-   `src/utils`: Misc utilities.
-   `src/locales`: Auto-generated, do not update or add to the version control.
