#!/bin/bash
#branch name

export stack_config

branchName=${GITHUB_REF##*/}

if [ "$branchName" == 'master' ]
then
  stack_config="prod"
  echo  $stack_config
  echo "🎯🎯 Branch name is: $branchName"
 exit
 else
   stack_config="dev"
   echo  $stack_config
   echo "🎯🎯 Branch not found, retry"
   exit
fi



