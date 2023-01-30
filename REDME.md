# Test ticket

It is a test task where we have a web endpoint "\GET", create an API, and input data (input an integer number).

- If the integer is a multiple of 3, it should return "G",

- If the integer is a multiple of 5, it should return "N",

- If the integer is a multiple of 3 and 5, then both "GN" should be displayed.

- Otherwise, the provided integer should be returned

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Make a request [http://localhost:5000](http://localhost:5000) with your Postman or Insomnia to see the result.

You have API route `/api/get-letter` to get some info.
You need to use query params. In this case, it is `?number=` (`http://localhost:5000/api/get-letter?number=`) and pass number.

`http://localhost:5000/api/get-letter?number=15)`

## Usage

- If the integer is a multiple of 3, it should return "G",
  `http://localhost:5000/api/get-letter?number=9)`
  the result should be `G`

- If the integer is a multiple of 5, it should return "N",
  `http://localhost:5000/api/get-letter?number=20)`
  the result should be `N`

- If the integer is a multiple of 3 and 5, then both "GN" should be displayed.
  `http://localhost:5000/api/get-letter?number=15)`
  the result should be `GN`

- Otherwise, the provided integer should be returned.singularize('phenomena')
  `http://localhost:5000/api/get-letter?number=8)`
  the result should be `8`

## Tests

For running tests please use `npm run test`

```

```
