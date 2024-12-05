FROM --platform=linux/amd64 python:3.10-slim

WORKDIR /app

# Install Poetry
RUN apt-get update && apt-get install gcc g++ curl build-essential postgresql-server-dev-all -y
RUN curl -sSL https://install.python-poetry.org | python3 -
# Add Poetry to PATH
ENV PATH="${PATH}:/root/.local/bin"

# Copy Poetry files
COPY poetry.lock pyproject.toml ./
COPY ./ ./

# Install dependencies
RUN poetry config virtualenvs.create false && poetry install --no-interaction --no-ansi

# Explicitly pin compatible versions
RUN poetry add "botocore@1.34.51" "langchain-aws@0.1.6" pymysql

CMD ["sh", "./container-cmd-cdk.sh"]
