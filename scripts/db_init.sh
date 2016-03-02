echo "--- droping database if exsists"
mysql -u root -e 'DROP DATABASE IF EXISTS hlab'
echo "--- creating database"
mysql -u root -e 'CREATE DATABASE hlab DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci'