### Installation
1.  Install firebase tools node module globally
    ```bash
    npm install -g firebase-tools.
    ```
1.  Login to firebase account
    ```bash
    firebase login
    ```
1.  Clone this repository.
1.  Install dependencies before your first run:

    ```bash
    cd functions
    npm install
    cd ..
    ```
1. Deploy function to your firebase project in cloud
    ```bash
    firebase deploy —project <projectId>
    ```

### If you want to create project from scratch

1. npm install -g firebase-tools.  
1. firebase login	
1. firebase init	
1. cd functions		 
1. npm install express —save
1. Edit your functions/index.js like we did in this repo.
1. cd ..
1. firebase deploy —project <projectId>   