FROM python:3.10-slim

WORKDIR /app

# Install dependencies and Poetry in one RUN command to minimize layers
RUN apt-get update && \
    apt-get install -y gcc g++ curl build-essential postgresql-server-dev-all && \
    curl -sSL https://install.python-poetry.org | python3 - && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Add Poetry to PATH
ENV PATH="${PATH}:/root/.local/bin"

# Copy the pyproject.toml and poetry.lock files
COPY poetry.lock pyproject.toml ./

# Copy the rest of the application code
COPY ./ ./

# Debug: List all files to verify the directory structure
RUN ls -R /app

# Install dependencies
RUN poetry config virtualenvs.create false && poetry install --no-interaction --no-ansi

# Specify the command to run the application
CMD ["uvicorn", "--factory", "langflow.main:create_app", "--host", "0.0.0.0", "--port", "7860", "--reload", "--log-level", "debug", "--loop", "asyncio"]
