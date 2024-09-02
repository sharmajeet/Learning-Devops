#!/bin/bash

<< disclaimer
we are using this tag names just for documentation purpose
disclaimer

read -p "Enter Your Age : " age

if [[ $age -ge 18 && $age -le 74  ]];
then
	echo "You are eligible for Driving Licence"
elif [[ $age -ge 75 ]];
then
	echo "Your age is Exceed the limit for Driving"
else
	echo "You are not eleigible for Driving Licence"
fi

