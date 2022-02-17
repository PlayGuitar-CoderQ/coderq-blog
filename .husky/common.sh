#!/bin/sh
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# win10 git bash  和 yarn的解决方案
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
