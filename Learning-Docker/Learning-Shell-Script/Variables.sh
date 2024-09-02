#!/bin/bash

<< comment 
This is 
multiline comment 
comment

name="Jetha lal"

echo "Your name is : $name"

echo "Enter name for Bapuji : "
read BapuName
echo "Name of Bapuji Is : $BapuName"

#another way to take input from user as Prompt -p
read -p "Enter name of $name son :" SonName
echo "Name of $name son is : $SonName"

