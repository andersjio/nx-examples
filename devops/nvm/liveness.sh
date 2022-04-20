#!/bin/bash

# We test that either a process named 'node' or 'ng-alias' is running.
# If neither of these are running, we exit 1.
# This is currently used by Kubernetes liveness probe,
# to check that the process is running as expected

oom=$(cat /sys/fs/cgroup/memory/memory.oom_control | grep "oom_kill ")
sentence="$(echo $oom)"
stringarray=($sentence)
if [[ $(echo ${stringarray[1]}) -ge 1 ]]; then
  echo "OOM killed!"
  echo "Max Memory usage:"
  awk '{print $1/1024/1024 " MB "}' /sys/fs/cgroup/memory/memory.max_usage_in_bytes
  echo "Memory Limit:"
  awk '{print $1/1024/1024 " MB "}' /sys/fs/cgroup/memory/memory.limit_in_bytes
  exit 1
fi
