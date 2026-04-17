# URL Shortener

A full-stack URL shortener application built with React and Express. Paste in a long URL, get a short redirect link back.

## Tech Stack

**Frontend:** React, TypeScript, Tailwind CSS, Axios

**Backend:** Express, Node.js, ShortID, Valid-URL

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- npm or yarn

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/LaTrp/url-shortener.git
   cd url-shortener
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

### Running the App

1. **Start the backend** (runs on port 5000)

   ```bash
   cd backend
   node server.js
   ```

2. **Start the frontend** (runs on port 3000)

   ```bash
   cd frontend
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

| Method | Endpoint                  | Description                       |
| ------ | ------------------------- | --------------------------------- |
| POST   | `/urls/shortUrl`          | Shorten a long URL                |
| GET    | `/urls/longUrl/:shortUrl` | Redirect to the original long URL |

### Example

**Request**

```bash
curl -X POST http://localhost:5000/urls/shortUrl \
  -H "Content-Type: application/json" \
  -d '{"longUrl": "https://example.com/some/very/long/path"}'
```

**Response**

```json
{
  "shortUrl": "abc123"
}
```

## License

MIT
