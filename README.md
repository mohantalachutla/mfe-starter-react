# mfe-starter-react

The is a react mfe starter app


## Installation
```bash
npm install
```

## Usage

### Development
```bash
npm run start:dev
```

### Production
```bash
npm run build && npm run start
```

### Loading MF Modules directly from browser

```javascript
loadDangerously({
    products: [
      {
        name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
        description:
          'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
        price: 599,
        image: '',
        rating: 4,
      },
      {
        name: 'Apple Watch Series 8 GPS, Aluminium Case, Starlight Sport',
        description:
          'Apple Watch Series 8 GPS, Aluminium Case, Starlight Sport',
        price: 699,
        image: '',
        rating: 5,
      },
    ],
    loginInfo: {
      token: "d83323d2ddd8",
      username: "John",
      email: "john@gmail.com"
    }
  });
```

