-- CREATE USER 'user-app'@'%' IDENTIFIED BY '1234';
GRANT ALL ON *.* TO 'user-app'@'%';
FLUSH PRIVILEGES;
