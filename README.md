# web3-react-app

This package is the basic react template for any single-page applications.

This package supplies a yml file to automatically deploy to a firebase project

## Initialising the Repo

After cloning this template you must run the following steps

### Node Setup

The first step is to install dependencies

`npm install`

### Firebase Setup

Initialise firebase just for hosting using the following command. Keep the project id that use as you will need this next

`firebase init`

this will create some firebase files and a firebase index.html file in build. Commit and push these files to your main branch before continuing

You will now need to create a service account for this project id, and get a json key from it. The service account you create must have these gcp permissions:

1. Visit the [GCP Service Accounts page](https://console.cloud.google.com/iam-admin/serviceaccounts) and make sure the correct project (same name as your Firebase project) is selected in the top blue bar
1. Click the "+ CREATE SERVICE ACCOUNT" button
1. Give the service account a name, id, description. We recommend something like `github-action-<my repository name>`
1. At the "Grant this service account access to project" step, choose the following [roles](https://firebase.google.com/docs/projects/iam/roles-predefined-product) that the service account will need to deploy on your behalf:
   - **Firebase Authentication Admin** (Required to add preview URLs to Auth authorized domains)
     - `roles/firebaseauth.admin`
   - **Firebase Hosting Admin** (Required to deploy preview channels)
     - `roles/firebasehosting.admin`
   - **Cloud Run Viewer** (Required for projects that [use Hosting rewrites to Cloud Run or Cloud Functions](https://firebase.google.com/docs/hosting/serverless-overview))
     - `roles/run.viewer`
   - **API Keys Viewer** (Required for CLI deploys)
     - `roles/serviceusage.apiKeysViewer`

Finish the service account creation flow

### Adding projectid and service account secrets

Navigate to your repo settings and go to secrets

create 2 new secrets:

`FIREBASE_PROJECT_ID`: your firebase project id

`FIREBASE_SERVICE_ACCOUNT_APP`: paste your json service account key

### Setup is now complete



# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing.](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

This package takes concepts from the default app built with [Create React App](https://github.com/facebook/create-react-app).
