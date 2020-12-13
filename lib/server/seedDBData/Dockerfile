FROM mongo
COPY users.json ./users.json

CMD mongoimport --host mongodb --db reach-engine --type json --file /users.json --jsonArray
