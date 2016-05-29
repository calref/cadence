#!/bin/bash

# make sure we're where we need to be if called from outside
cd "$( dirname "$0" )"

echo "Updating repository"
git pull
git submodule sync

echo "Purging temporary CDN files"
rm -rfv /tmp/cadence-cdn

echo "Configuring cadence"

./configure \
  --https \
  --domain="calref.net" \
  --session-auth="https://calref.net/xmpp-auth.php" \
  --chatbot="Ligrev" \
  --title="Calamity Refuge" \
  --mode=debug \
  --cdn-url="https://cdn.calref.net/chat" \
  --cdn-prefix="/tmp/cadence-cdn" \
  $*

echo "Building cadence"

make > /dev/null

echo "Installing cadence"

make install > /dev/null

echo "Deploying CDN"

aws s3 sync /tmp/cadence-cdn s3://cdn.calref.net/chat/ --delete


