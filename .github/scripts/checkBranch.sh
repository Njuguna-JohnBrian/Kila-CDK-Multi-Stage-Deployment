#!/bin/bash
#branch name

export CDK_BUCKET_NAME="John Brian"

branchName=${GITHUB_REF##*/}

if [ "$branchName" == 'master' ]
then
 echo "🎯🎯 Branch name is: $branchName"
 else
   echo "🎯🎯 Branch not found, retry"
fi



