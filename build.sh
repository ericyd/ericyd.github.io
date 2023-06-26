#!/bin/zsh

# really simple "build" script for now.
# Mostly for finer control over what Wrangler publishes

# stole from https://unix.stackexchange.com/questions/295033/loop-over-a-string-in-zsh-and-bash
FILES_TO_COPY=(
index.html
style.css
favicon.ico
assets
_redirects
)

mkdir -p build

for filename in ${FILES_TO_COPY[@]}; do
  cp -R $filename build
done
