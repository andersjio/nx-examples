#!/bin/bash
SKIP="FALSE"
MAINLINE_BRANCHES="master develop release mainline feature"
for BRANCH in $(echo ${MAINLINE_BRANCHES})
do
	if [[ "$BRANCH_NAME" =~ "${BRANCH}".* ]]; then
		SKIP="TRUE"
	fi
done
for GIT_HASH in $(git log -200  --grep 'Merge pull request #.* in' --merges --format="%H")
do
	if [[ "${SKIP}" == "TRUE" ]]; then
		SKIP="FALSE"
		continue
	fi
	for GIT_BRANCH_NAME in $(git branch -r --contains ${GIT_HASH})
	do
		if [[ "${GIT_BRANCH_NAME}" == "origin/develop" ]]; then
			echo "${GIT_HASH}"
			exit 0
		elif [[ "${GIT_BRANCH_NAME}" =~ ^origin\/release\/.* ]]; then
			echo "${GIT_HASH}"
			exit 0
		fi
	done
done
