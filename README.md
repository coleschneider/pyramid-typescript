### Full Stack Pyramid + Typescript & React

### Installation

**Installing the backend dependencies:**

To use this repository, start by running:
```
python -m venv env
```
This command creates the virtual environment for python.
Next, install the project in development mode by running:
```
pip install -e .
```
Or alternatively:
```
env/bin/pip install -e .
```
**Installing the frontend dependencies:**

To install the frontend dependencies needed for the client application run:
```
npm install
```
### Running the application

**Frontend:**

Open a terminal window and run the command:
```
npm run start
```
This will set up a development server with hot reloading enabled. I used the templating engine to conditionally check the environment and include the correct scripts.

**Backend:**

Open a terminal window and run:
```
./env/bin/pserve development.ini --reload
```
This will start the python server and watch for any changes

### Production

**Build the Frontend**

Run the command:
```
npm run build
```
This will create a new folder called ```dist/``` with our bundle included.

**Start the server:**

Run the following command:
```
./env/bin/pserve production.ini
```
This start the server and serves static assets from the ```dist/``` directory
