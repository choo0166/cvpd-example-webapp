## Setup

### Flask backend
- All scripts related to the backend is contained in the `api` subfolder.
- The `apis` folder contains code for the various endpoints.
- The `utils` folder contains code for various utility functions.

#### Setup Python environment
- Create a Python virtualenv in the project folder with the command `python3 -m venv .venv`. This project is tested on Python 3.10.13.
- Source the virtualenv with `source .venv/bin/activate`.
- Install the modules from requirements.txt with `pip install -r requirements.txt`.

#### Start the Flask backend server
- The file `app.py` is the entrypoint of the Flask server, execute it with `python app.py`.
- Navigate to `127.0.0.1:8080` to test the endpoints.

### React frontend
- All scripts related to the frontend is contained in the `frontend/src` subfolder.
- Redux is used for state management throughout the components, with all states contained within a single file `store.js`.
- The `components` folder contains the code for various React components.
- The `reducers` folder contains code for handling updates to the state according to Redux.

#### Setup Node.js environment
- Install [Node.js](https://nodejs.org/en/download). This project is tested on Node `v20.5.1`.
- `cd frontend` and install dependencies with `npm install`.

#### Start the App server
- Run `npm start` to begin the build process.
- Navigate to `127.0.0.1:3000` to test the app.



