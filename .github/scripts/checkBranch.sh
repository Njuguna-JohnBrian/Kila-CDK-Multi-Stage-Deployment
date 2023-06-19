#!/bin/bash
#branch name

stack_config

branchName=${GITHUB_REF##*/}

if [ "$branchName" == 'master' ]
then
  stack_config="prod"
  export  stack_config
 echo "🎯🎯 Branch name is: $branchName"
 exit
 else
   stack_config="dev"
   export  stack_config
   echo "🎯🎯 Branch not found, retry"
   exit
fi



