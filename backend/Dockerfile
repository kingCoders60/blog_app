FROM node:18

# Install Python and pip
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

WORKDIR /app

# Copy and install Node dependencies
COPY package*.json ./
RUN npm install

# Copy everything including Soham_ML
COPY . .

# Create and activate Python virtual environment
RUN python3 -m venv /venv
ENV PATH="/venv/bin:$PATH"

# Upgrade pip and install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r Soham_ML/requirements.txt

EXPOSE 5000
EXPOSE 8000

CMD ["npm", "run", "dev"]