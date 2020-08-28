curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "password": {
      "old": "'"${OLDPASSWORD}"'",
      "new": "'"${NEWPASSWORD}"'",
    }
  }'
echo