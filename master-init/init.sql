-- 创建复制用户
CREATE USER 'repl_user'@'%' IDENTIFIED WITH mysql_native_password BY 'repl_pass';
GRANT REPLICATION SLAVE ON *.* TO 'repl_user'@'%';
FLUSH PRIVILEGES;

-- 创建业务数据库（必须放在授权操作之后）
CREATE DATABASE ecommerce;
