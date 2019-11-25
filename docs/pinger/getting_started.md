# Getting Started


::: warning

The pinger is a small program that will act as a bridge between the core and your server.
Its entire purpose it to allow you to have one port for the worker to get the statusses if you are running a isolated cluster with one IP.

:::


The pinger pings the server just like the worker does once a minute.
Upon every boot it will request the core to give it a list with server that it needs to ping. 
It will also reping the core once per 15 minutes (Although this will be configurable)
