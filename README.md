H-Database Microservice
=======================

The h-databsae is a microservice for your database. The project acts as a layer above your RDBMS database and deals with all aspects related to databse migrations, models, seeds, CRUD actions using a predefinded actions controllers.

It is built with senicajs librarby in nodejs, which listens on a specific port and accepts commands, these commands are basicly javascript objects, which is matched to registered service patterns. when matched, the related action is called and response is sent back to client.

Usually a command is related to RDMBS CRUD operations.
A typical command will be {role: database, model: post, cmd: queryRecords}.

The framework uses the concept of controllers. The controller defines a specific command pattern and it's actions, then it gets registered with Senica.
It ready comes shipped with a couple of predefined controllers set to acheive basic CRUD actions.
There are list of available controllers:


Controller                              Senica Patters
========================================================
- getRecordController                   {role: 'database', model: 'post', cmd: 'getRecord'}
- getRecordsController                  {role: 'database', model: 'post', cmd: 'getRecords'}

- queryRecordController                 {role: 'database', model: 'post', cmd: 'queryRecord'}
- queryRecordsController                {role: 'database', model: 'post', cmd: 'queryrecords'}

- deleteRecordController                {role: 'database', model: 'post', cmd: 'deleteRecord'}
- updateRecordController                {role: 'database', model: 'post', cmd: 'updateRecord'}
- insertRecordController                {role: 'database', model: 'post', cmd: 'insertRecord'}

- queryPagedRecordsController           {role: 'database', model: 'post', cmd: 'queryPagedRecords'}
- queryGroupedRecordsController         {role: 'database', model: 'post', cmd: 'queryGroupedRecords'}
- queryGroupedByDateRecordsController   {role: 'database', model: 'post', cmd: 'queryGroupedByDateRecords'}
- queryCrossTabRecordsController        {role: 'database', model: 'post', cmd: 'queryCrossTabRecords'}


Bookshelf & Knex
================
The project uses bookshelf.js and knex For managing and communicating to your databases.
It also uses knex-cli for managing migrations and seeds


Folders Structure:
==================
- config        general configuration using YAML format
- logs          all logs recorded here using winston
- migrations    migrations for defining your database schema 
- models        define your bookshelf models here
- scripts       scripts to manage your database
- pods          define your config and custom senica patterns here
- generators    generate and database records here
- seeds         seeds data for your database



you might want to install knex cli tools for migrations and seeding:
'''npm install knex -g'''

Topics:
=======
Installation
Defining Knex Migrations
Defining Knex Seeds
Defining Bookshelf Models
Defining Model Configuration
Adding Senica actions
Build In Controllers (Senica Actions)
    getRecordController
    getRecordsController
    queryRecordController
    queryRecordsController
    deleteRecordController
    updateRecordController
    insertRecordController
    queryPagedRecordsController
    queryGroupedRecordsController
    queryGroupedByDateRecordsController
    queryCrossTabRecordsController


Features:
=========
Adds these

[x] saveRecordController
  [x] filter unwanted keys from the payload by refering to the schema

[ ] deleteRecordController

[ ] queryRecordsController
  [ ] limit
  [ ] order by
  [ ] page and pagination
  [ ] keyword
  [ ] filters
    [ ] simple format: colName : operator : parameter
    [ ] complex format: colName : operator : parameter
  [ ] flags
