# FixMyRoad 🚧
### A Road Maintenance and Feedback Portal

**FixMyRoad** is a full-stack web application designed for submitting and viewing feedback related to road maintenance. The backend is built using **FastAPI**, while the frontend is crafted with **React.js**. This application aims to streamline the process of reporting road issues and enhancing community engagement in road maintenance.
<br>

## 🛠️ Technologies Used
- **Frontend:**
  - React.js
  - CSS (for styling)
  - Axios (for making HTTP requests)

- **Backend:**
  - FastAPI
  - Pydantic (for data validation)
  - Uvicorn (as the ASGI server)
  - SQLAlchemy (for database interactions)

- **Database:**
  - SQLite (for local development)
<br>

## 🚀 Getting Started

Follow these steps to set up the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/Aradhya-005/FixMyRoad.git
```
### 2. Create a Virtual Environment
Navigate to the project directory and create a virtual environment:
```
python -m venv venv
venv\Scripts\activate
```
### 3. Install Required Dependencies
Install the necessary packages:
```
pip install -r requirements.txt
```
###  4. Run the Backend Server

Start the backend server from the root directory of the project:
```
uvicorn main:app --reload
```
###   5. Navigate to the Frontend Directory
```
cd front_end
```
###  6. Install Node Modules
```
npm install
```
###  7.Start the Frontend Server
```
npm start
