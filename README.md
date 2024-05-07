# Laravel Resource Pagination TypeScript Definitions

This npm package provides TypeScript definitions for Laravel pagination resources. It includes interfaces for paginated resource data, pagination links, and pagination meta information.

## Installation

You can install this package via npm:

```bash
npm install laravel-resource-pagination-type
```

## Usage
### Importing the TypeScript Definitions
```typescript
import { LaravelPaginatedResource } from 'laravel-resource-pagination-type';
```
### Example Usage
```typescript
// Define paginated resource data
interface User {
  id: number;
  name: string;
  email: string;
}

// Sample paginated resource containing users
const paginatedUsers: LaravelPaginatedResource<User> = {
  data: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more user objects as needed
  ],
  links: {
    first: '/users?page=1',
    last: '/users?page=10',
    prev: '/users?page=2',
    next: '/users?page=4'
  },
  meta: {
    current_page: 3,
    from: 21,
    last_page: 10,
    path: '/users',
    per_page: 10,
    to: 30,
    total: 100
  }
};
```
## License
This package is open-sourced software licensed uner the [MIT License](https://opensource.org/licenses/MIT)

