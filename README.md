git clone git@github.com:umarmir/ruya-de-luxe.git && cd ruyadeluxe
# optional: update ADMIN_TOKEN in docker-compose.yml
# seed sample products after first up

docker compose up -d --build

# seed
docker compose exec server node src/seed.js