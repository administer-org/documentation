# Official AOS Nodes

## What is an AOS node?

An AOS node is a server running AOS using the official database. They are able to be connected to from Administer and the Administer Web Frontend. Official AOS nodes contain some web plugins which are useful for us but may not offer any value for you on your own server.

## Can I make my own?

Yes! See the [Installation]() guide.

## On my own instance, can I use the production database?

No, the production database is private and may not be accessed by your own server. 

----

# Database Nodes
## db-us-1
> Runs on `aos-us-1` 

> Primary Mongo node, hosts the ReplicaSet

> Connected to by `aos-us-1`, `aos-us-3`, `aos-canary`

## db-us-2
> Runs on `aos-us-2` 

> During prolonged outages, other nodes may manually be set to contact this instance. 

> Connected to by `aos-us-2`.

## db-eur-1
> Runs on `aos-eur-1` 

> Connected to by `aos-eur-1`

# AOS Nodes

## aos-us-1
> High availability production server

> ~98.9% uptime

> Region: US/MS

## aos-us-2
> Region: US/GA

# aos-us-3
> Generally used if all other US servers are down or busy

> Bare metal server, rare downtime

> Region: US/FL

# aos-eur-1
> Recommended home server for Europe/Asia game instances

> Cloud server, rare downtime

> Region: EU/UK

# aos-canary
> Exists for public testing

> Runs latest AOS software, generally unstable

> Sometimes operates separately from production database

> Region: US/FL

# Good 3rd party nodes

If you operate an AOS node with good uptime and a lot of apps and want it displayed here, please [reach out.](https://to.admsoftware.org/discord)

