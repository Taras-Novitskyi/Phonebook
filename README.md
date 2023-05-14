
# Phonebook App
This is a simple Phonebook application built using React with React Router for the frontend and Node.js for the backend. The app allows users to sign in, receive an authentication token, and perform various operations such as adding and deleting contacts. Users can also search for contacts based on their name. The application utilizes a mock API for data storage.

This project was created with [Create React App](https://github.com/facebook/create-react-app).
To get acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Features

- User Authentication: Users can sign in to the app and receive an authentication token.
- Add Contacts: Authenticated users can add new contacts to their phonebook.
- Delete Contacts: Users can delete existing contacts from their phonebook.
- Search Contacts: The app provides a search functionality to filter contacts by name.
- Mock API: Data is stored and retrieved from a mock API.
- Create routing using React Router.
- The application should have the following routes. If the user enters a non-existent route, they should be redirected to the home page. '/' - Home component, the home page. 



## Usage

Upon launching the app, you will be directed to the sign-in page. If you don't have an account, you can create one by clicking on the "Sign Up" link.

Once you are signed in, you will receive an authentication token. This token will be used for subsequent API calls to authenticate your requests.

In the main dashboard, you can add new contacts by clicking on the add icon button. Fill in the required information such as name and phone number, and click button "Add contact" to add the contact to your phonebook.

To delete a contact, locate the contact in the list and click on the delete icon button associated with that contact.

To search for a specific contact, enter the name in the search bar, and the app will filter the contacts based on your input.


## Installation

To run the Phonebook app locally, follow these steps:

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd Phonebook
```
Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Go to [http://localhost:3000](http://localhost:3000) in your browser.
This page will automatically reload after saving changes to the project files.

## Demo

https://taras-novitskyi.github.io/Phonebook/

