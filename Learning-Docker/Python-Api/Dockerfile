FROM python

WORKDIR /myapp

COPY ./api_demo.py .

RUN pip install requests
# RUN pip install pymysql
# RUN pip install cryptography

CMD ["python", "api_demo.py"]

