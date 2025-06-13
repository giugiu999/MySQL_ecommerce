# 🛒 MySQL E-Commerce Order Management System

This project is a practical implementation of an e-commerce backend system designed to help learners master the core concepts required for the MySQL. It includes real-world practices such as **backup & restore**, **replication**, **read-write splitting**, **security**, and **monitoring**, along with a future **Angular frontend** and **RESTful API** support.

---

## 🚀 Features

- ✅ Master-Slave replication with GTID
- ✅ Read/Write separation across nodes
- ✅ Initial support for Docker-based deployment
- ✅ Custom user privileges and authentication
- ✅ Slow query analysis and performance schema setup
- ✅ Data backup and recovery simulation
- ✅ Frontend built with Angular (in progress)

---

## 📚 Learning Objectives

This project is aligned with the **MySQL 1Z0-922 Certification** curriculum and covers:

- **MySQL Architecture & Storage Engines**
  - InnoDB internals, binlogs, buffer pool, B-tree indexing
- **Replication with GTID**
  - Commands: `CHANGE MASTER TO`, `START SLAVE`, `SHOW SLAVE STATUS`
- **Security Configuration**
  - Privileges, roles, authentication plugins, firewall, auditing
- **Backup & Recovery**
  - Logical dumps with `mysqldump`, and MySQL Enterprise Backup (MEB)
- **Monitoring Techniques**
  - `Performance Schema`, `Slow Query Log`, `mysqladmin`, and Healthchecks
- **HeatWave Introduction** *(Advanced Phase)*
  - AutoML, Lakehouse, Autopilot features on Oracle Cloud

---

## 🧱 Project Structure

```bash
MySQL_ecommerce/
├── docker-compose.yml       # Defines the master-slave cluster and volumes
├── master-init/             # Initialization SQL scripts for the master node
├── slave1-init/             # Initialization SQL for slave 1
├── slave2-init/             # Initialization SQL for slave 2
├── mysql-master/            # Master data volume
├── mysql-slave1/            # Slave 1 data volume
├── mysql-slave2/            # Slave 2 data volume
├── frontend-angular/        # Angular frontend for order management (under development)
└── README.md                # Project documentation
```
## 🖥️ System Architecture
```bash

Browser
   ↓
Angular UI
   ↓
REST API (Node.js / Express)
   ↓
Read Replica 1 ────▶
              ◀──── Master (Read + Write)
Read Replica 2 ────▶
       ↳ MySQL Replication using GTID
```
## ⚙️ Tech Stack
```bash
Frontend (UI)	Angular
API Layer	Node.js + Express
Database	MySQL 8.0 (GTID enabled)
Orchestration	Docker + Docker Compose
Monitoring	Performance Schema, Logs
Security	MySQL Enterprise Plugins
Backup Tools	mysqldump, MEB 
Cloud Optional	Oracle Cloud HeatWave
```




