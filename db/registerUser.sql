
INSERT INTO USERS2(
  username,
  bcrypt_password
)VALUES(
  $1,
  $2
)
returning *;