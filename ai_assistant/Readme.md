AI Assistant Chat Widget

A React-based floating AI assistant chat widget that can be integrated into any web page. It communicates with a FastAPI backend connected to MongoDB to store chat history.

Features

Floating robotic icon that pulses and glows to attract attention.

Expandable chat window on icon click.

Messages: user messages on right, AI messages on left.

Chat history stored in MongoDB.

Auto-scroll to latest message.

Clears chat when closed.

Fully inline-styled—no external CSS required.

Easily integrable on multiple pages.

Tech Stack

Frontend: React, JavaScript

Backend: FastAPI, Python

Database: MongoDB

Environment Variables: .env file

Setup Instructions
1. Clone the repository
git clone <your-repo-url>
cd ai_assistant

2. Backend Setup (FastAPI + MongoDB)

Create a virtual environment:

python -m venv myenv
source myenv/bin/activate   # Linux/Mac
myenv\Scripts\activate      # Windows


Install dependencies:

pip install fastapi uvicorn pymongo python-dotenv


Create .env in backend:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ai_assistant?retryWrites=true&w=majority


Run backend:

uvicorn fastapi_app:app --reload

3. Frontend Setup (React)

Navigate to frontend:

cd frontend


Install dependencies:

npm install


Start the frontend:

npm start


The chat widget icon should appear at the bottom-right corner. Click to open the chat.

4. Folder Structure
ai_assistant/
│
├─ backend/
│  ├─ fastapi_app.py
│  ├─ ai_assistant.py  
│  ├─ requirememts.txt
│  └─ .env
│   
├─ frontend/
│  ├─ src/
│  │  ├─ ChatWidget.js
│  │  ├─ App.js
│  │  └─ index.js
│  │
│  ├─ public/
│  │  └─ index.html
│  ├─ package.json
│  └─ package-lock.json
│
├─ Readme.md
├─ .gitignore
├─ licence
└─ myenv

5. How to Use

Add <ChatWidget /> component in any React page to integrate the widget.

The widget shows a bright blue robotic icon.

User messages appear on the right, AI responses on the left.

Chat history is cleared on close.

6. Customization

Icon color: Change backgroundColor in ChatWidget.js.

Animations: Modify inline animation property (pulse, glow, bounce, etc.).

AI response: Connect to your own AI in ai_assistant.py.

7. Screenshots


Floating AI icon


Chat window opened with AI and user messages

8. License

MIT License © 2025
