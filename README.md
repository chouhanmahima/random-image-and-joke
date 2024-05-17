# Express API with Unsplash and Dad Jokes Integration

This project is an Express.js application that provides two main features: fetching and resizing random images from Unsplash, and fetching random dad jokes from the API Ninjas service.

## Features

1. **Random Image Fetch and Resize**: Fetches a random image from Unsplash and resizes it to a width of 300 pixels before returning it to the client.
2. **Random Dad Joke**: Fetches a random dad joke from the API Ninjas service.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have an Unsplash Developer account and have obtained an access key.
- You have an API Ninjas account and have obtained an API key for dad jokes.

## Getting Started

1. Clone the repository:

    ```sh
    git clone https://github.com/chouhanmahima/random-image-and-joke.git
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root of your project and add your Unsplash and API Ninjas keys:

    ```plaintext
    UNSPLASH_ACCESS_KEY=your_unsplash_access_key
    API_NINJA_X_API_KEY=your_api_ninja_x_api_key
    PORT=5000 # optional, default is 5000
    ```

4. Start the server:

    ```sh
    npm start
    ```

## API Endpoints

### Get Random Image

Fetches a random image from Unsplash, resizes it to a width of 300 pixels, and returns it.

- **URL**: `/random-image`
- **Method**: `GET`
- **Response**: `image/png`

### Get Random Dad Joke

Fetches a random dad joke from the API Ninjas service.

- **URL**: `/dad-joke`
- **Method**: `GET`
- **Response**: `application/json`
  ```json
  {
      "joke": "Your dad joke here"
  }
  ```
  ## Error Handling

- If an internal server error occurs, a 500 status with a message will be returned.

- For any other routes not defined, a 404 status with a "PAGE NOT FOUND" message will be returned.


