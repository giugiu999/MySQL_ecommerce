-- 仅配置主从关系，不自动启动复制
CHANGE MASTER TO
MASTER_HOST='mysql-master',
MASTER_USER='repl_user',
MASTER_PASSWORD='repl_pass',
MASTER_AUTO_POSITION=1;
