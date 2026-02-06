# Full-Stack App Template

A modern full-stack application template with a Haskell backend and Next.js frontend.

## Project Structure

```
.
├── backend/          # Haskell server application
│   ├── app/         # Application entry point
│   ├── src/         # Source code
│   └── test/        # Test files
└── frontend/        # Next.js React application
    ├── app/         # Next.js app directory
    ├── components/  # React components
    ├── stores/      # State management
    └── public/      # Static assets
```

## Prerequisites

### Backend
- [GHC](https://www.haskell.org/ghc/) (Glasgow Haskell Compiler)
- [Stack](https://docs.haskellstack.org/) or [Cabal](https://www.haskell.org/cabal/)

### Frontend
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup

### Backend Setup

```bash
cd backend
stack build
# or using cabal
cabal build
```

### Frontend Setup

```bash
cd frontend
npm install
# or
yarn install
```

## Running the Application

### Start the Backend Server

```bash
cd backend
stack run
# or
cabal run
```

### Start the Frontend Development Server

```bash
cd frontend
npm run dev
# or
yarn dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Development

### Backend Development
- Main application code is in `backend/src/Lib.hs`
- Entry point is in `backend/app/Main.hs`
- Tests are in `backend/test/`

### Frontend Development
- Page routes are in `frontend/app/`
- Reusable components are in `frontend/components/`
- State management stores are in `frontend/stores/`

## Testing

### Backend Tests
```bash
cd backend
stack test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Building for Production

### Backend
```bash
cd backend
stack build --copy-bins
```

### Frontend
```bash
cd frontend
npm run build
npm start
```

## License

See [LICENSE](LICENSE) file for details.
