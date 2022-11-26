#!/bin/bash
for i in $(docker ps --format '{{.Names}}'); do
  echo "$i"
  docker logs $i > logs/"$i".log
done