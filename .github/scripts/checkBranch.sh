#!/bin/bash
#branch name

branchName=${GITHUB_REF##*/}

if [ "$branchName" == 'master' ]
then
 echo "🎯🎯 Branch name is: $branchName"
 else
   echo "🎯🎯 Branch not found, retry"
fi


