import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("❌ GEMINI_API_KEY not found in .env file")

# Configure Gemini
genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-2.5-flash")  # fast and simple


def get_response(user_input: str) -> str:
    """
    Generate a clean, structured response for any question.
    - Main points are numbered.
    - Subpoints use dashes (-).
    - No *, **, or markdown symbols.
    """
    prompt = f"""
You are a helpful AI assistant. Answer the following question clearly.
- Use numbered lists for main points.
- Use dashes (-) for subpoints.
- Keep explanations simple and easy to understand.
- Do NOT use *, **, or any markdown symbols.
- Make the answer self-contained and readable.

Question: {user_input}
"""

    try:
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        return f"⚠️ Error: {e}"


if __name__ == "__main__":
    print("🤖 Simple Bullet/Numbered AI Bot (type 'exit' to quit)")
    while True:
        user_input = input("You: ").strip()
        if user_input.lower() in {"exit", "quit"}:
            print("Goodbye 👋")
            break
        reply = get_response(user_input)
        print("\nAI:\n")
        print(reply)
        print("\n" + "-" * 60 + "\n")
