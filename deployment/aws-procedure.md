Project Setup Procedures
========================

Create a folder at the root of the project repo called "deploy". This folder will
contain the CloudFormation and OpsWorks JSON files.

Use one of the CloudFormation templates in configuration-templates as a template
to create the CloudFormation JSON and save it to the deploy folder of the
project repo. Name would be cloudformation-environment.json.
Example: deployment/cloudformation-production.json

Customize the CloudFormation JSON file to suit the project needs.

Use one of the Stack templates in configuration-templates as a template
to create the Stack JSON and save it to the deploy folder of the project repo.
Name would be stack-environment.json.
Example: deployment/stack-production.json

Customize the Stack JSON file to suit the project needs.

Use one of the Layer templates in configuration-templates as a template
to create the Layer JSON and save it to the deploy folder of the project repo.
Name would be layer-name-environment.json.
Example: deployment/layer-movie-manager-production.json

Customize the Layer JSON file to suit the project needs.

Upload the CloudFormation JSON to the ericleestewart-cloudformation S3 bucket. The file should be
placed in the following folder structure. /projectid/
Example: ericleestewart-cloudformation/sans16001/cloudformation-production.json

Commit new files to project repo and push to origin remote.


CloudFormation - Creation
=========================

Create a new CloudFormation stack using the following parameters.

Stack Template: Specify an Amazon S3 template URL
URL: https://ericleestewart-cloudformation.s3.amazonaws.com/sans16001/cloudformation-production.json

Stack Name: sans16001-production

Parameter Environment: production

Parameter Project: sans16001

Parameter RDSAllocatedStorage (in GB): 2

Parameter RDSDBMasterUsername: root

Parameter RDSDBPassword: 

Parameter RDSEngineVersion: 10.1 or 5.7

Parameter RDSInstanceType: db.t2.micro

Parameter RDSMultiAZ: true if you need redudancy.

Parameter RDSStorageType: gp2

Tags = Project : sans16001

Advanced Notification Options: No Notifications

Advanced Timeout: None

Advanced Rollback on failure: Yes

Advanced Stack Policy: None


RDS Credential Template
=======================

Use this template to store the RDS Credentials.

Title: sans16001 RDS
Project: sans16001 Movie Manager
Master Username: root
Master Password: 
Endpoint: 
DB Name: 
Engine Type: 


OpsWorks Stack
==============

Editing Stack Settings
----------------------

Open the stack created in the previous step.

Update the following settings.

Stack Color: Purple

Chef Version: 12 (or Latest)

SSH Key: Insert els-aws-rsa key.

Branch/Revision: master

OpsWorks Agent version: Use Latest Version

Custom: Use contents of Stack JSON

Use Opsworks security groups: No
(This is very important, choosing "Yes" will open a lot of ports to
access from ALL IPs and you don't down that.)


Add Layer - RDS
---------------

Click "Add Layer" and select RDS tab.

Select the instance created by CloudFormation.

User: Master User given to CloudFormation.

Password: Password given to CloudFormation.


Add Layer - PHP Application
---------------------------

Click "Add Layer" and select OpsWorks tab.

Name: Movie Manager

Short Name: movie_manager

Security Group: sans16001-production-WebServerSecurityGroup-*

Custom JSON: Paste in layer-movie-manager-production.json


PHP Application - Recipes
-------------------------

Click "Edit Custom Chef Recipes"

Setup: bm-command-setup

Configure: bm-command-configure

Deploy: bm-command-deploy


PHP Application - Network
-------------------------

Click "Add an ELB"

Elastic Load Balancer: sans16001-production

Public IP Addresses: Yes

Elastic IP Addresses: No



Add App
-------

Name: API

Document Root: public

Data Source Type: RDS

Database Instance: sans16001-production

Database Name: sans16001_production

Repository Type: Git

Repository URL: git@github.com:ericleestewart/movie-manager-demo.git

SSH Key: els-aws-rsa

Branch/Revision: None

Environment Variable: DB_HOST = FROM RDS

Environment Variable: DB_DATABASE = FROM RDS

Environment Variable: DB_USERNAME = FROM RDS

Environment Variable: DB_PASSWORD = FROM RDS

Domain Names: None

SSL Settings: None



Add Instance
------------

Select "New" Tab.

Hostname: sans16001-app-production-primary

Size: t2.micro

Subnet: sans16001-production-public-subnet-zone-c

Scaling Type: 24/7

SSh key: els-aws

Operating System: Latest (usually the top of the list)

Root Device: EBS Backed

Volume Type: General Purpose (SSD)

After it's created, click "Start".

Add "Project" tag to the instance and the volume.


Setup DNS
=========

Add a domain in Route 53 and point the record to the ELB DNS Name.


Logging
=======

Save RDS data to LastPass.

Document Infrastructure
=======================

Sensitive information such as RDS password or IAM Secret Keys should be store in
1Password.

