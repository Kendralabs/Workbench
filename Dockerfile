FROM python:3.10-slim

# Install necessary packages
RUN apt-get update && apt-get install -y \
    gcc g++ git make curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Create a new user
RUN useradd -m -u 1000 user

# Switch to the new user
USER user

# Set environment variables
ENV HOME=/home/user \
    POETRY_VERSION=1.8.3 \
    POETRY_HOME=/home/user/.poetry

# Add Poetry to PATH
ENV PATH=$POETRY_HOME/bin:$PATH

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python -

# Set the working directory
WORKDIR $HOME/app

# Copy the current directory contents into the container
COPY --chown=user . $HOME/app

# Install Python dependencies using Poetry
RUN poetry config virtualenvs.create false && poetry install --no-interaction --no-ansi

# Install Langflow
RUN pip install langflow>=0.5.0 -U --user

# Command to run the application
CMD ["python", "-m", "langflow", "run", "--host", "0.0.0.0", "--port", "7860"]
