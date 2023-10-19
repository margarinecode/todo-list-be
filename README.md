# API Documentation

This is the documentation for the API that manages to-do items. The API allows you to perform various CRUD (Create, Read, Update, Delete) operations on to-do items.

## Endpoints

### Get All To-Do Items

- **URL**: `/api/todo`
- **Method**: `GET`
- **Description**: Retrieve a list of all to-do items.
- **Response**: Returns a JSON array of to-do items sorted by creation date in descending order.

### Create a To-Do Item

- **URL**: `/api/todo`
- **Method**: `POST`
- **Description**: Create a new to-do item.
- **Request Body**: JSON object with a `title` property for the new to-do item.
- **Response**: Returns the created to-do item as JSON.

### Update a To-Do Item

- **URL**: `/api/todo/:id`
- **Method**: `PUT`
- **Description**: Update an existing to-do item by its ID.
- **Parameters**: `id` (To-do item ID in the URL)
- **Request Body**: JSON object with properties to be updated.
- **Response**: Returns a success message upon successful update.

### Delete a To-Do Item

- **URL**: `/api/todo/:id`
- **Method**: `DELETE`
- **Description**: Delete an existing to-do item by its ID.
- **Parameters**: `id` (To-do item ID in the URL)
- **Response**: Returns a success message upon successful deletion.

## Usage

You can use the following HTTP methods and endpoints to interact with the API:

- `GET /api/todo`: Retrieve all to-do items.
- `POST /api/todo`: Create a new to-do item.
- `PUT /api/todo/:id`: Update a to-do item by ID.
- `DELETE /api/todo/:id`: Delete a to-do item by ID.

## Example

Here's an example of how you can use the API with `curl` to create a new to-do item:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"New Task"}' http://https://todo-list-be-production.up.railway.app/api/todo
