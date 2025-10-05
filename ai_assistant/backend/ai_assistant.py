# ai_assistant.py

import os
from dotenv import load_dotenv
import google.generativeai as genai


# Load environment variables from .env
load_dotenv()

# Get API key
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("❌ GEMINI_API_KEY not found in .env file")

# Configure Gemini
genai.configure(api_key=api_key)

# Initialize the model once (faster than re-creating each call)
MODEL_NAME = "gemini-2.5-flash"
model = genai.GenerativeModel(MODEL_NAME)


def get_response(user_input: str) -> str:
    """
    Generate a response from the Gemini model for the given user input.
    """
    try:
        response = model.generate_content(user_input)
        return response.text.strip()
    except Exception as e:
        return f"⚠️ Error: {e}"


if __name__ == "__main__":
    print("🤖 Gemini AI Assistant (type 'exit' to quit)")
    while True:
        user_input = input("You: ").strip()
        if user_input.lower() in {"exit", "quit"}:
            print("Goodbye 👋")
            break
        reply = get_response(user_input)
        print("AI:", reply)
