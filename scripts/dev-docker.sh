#!/bin/sh

# Dev entrypoint for running Next.js inside Docker with reliable file watching.
# - On Windows/macOS bind mounts, inotify events can be unreliable.
# - Prefer polling and webpack mode for stable HMR on mounted project folders.

set -eu

HOSTNAME="${HOSTNAME:-0.0.0.0}"
PORT="${PORT:-3000}"

export WATCHPACK_POLLING="${WATCHPACK_POLLING:-true}"
export WATCHPACK_POLLING_INTERVAL="${WATCHPACK_POLLING_INTERVAL:-800}"
export CHOKIDAR_USEPOLLING="${CHOKIDAR_USEPOLLING:-true}"
export CHOKIDAR_INTERVAL="${CHOKIDAR_INTERVAL:-800}"

NEXT_BIN="./node_modules/.bin/next"
if [ ! -f "$NEXT_BIN" ]; then
  echo "[dev-docker] ERROR: next binary not found at $NEXT_BIN. Did npm install run?" >&2
  exit 1
fi

echo "[dev-docker] Starting Next dev on ${HOSTNAME}:${PORT}"
echo "[dev-docker] Polling: WATCHPACK_POLLING=${WATCHPACK_POLLING} (${WATCHPACK_POLLING_INTERVAL}ms), CHOKIDAR_USEPOLLING=${CHOKIDAR_USEPOLLING} (${CHOKIDAR_INTERVAL}ms)"

NEXT_HELP="$("$NEXT_BIN" dev --help 2>/dev/null || true)"
case "$NEXT_HELP" in
  *"--webpack"*)
    echo "[dev-docker] Using --webpack for more reliable hot reload."
    exec "$NEXT_BIN" dev --webpack -H "$HOSTNAME" -p "$PORT"
    ;;
  *"--no-turbo"*)
    echo "[dev-docker] Using --no-turbo for more reliable hot reload."
    exec "$NEXT_BIN" dev --no-turbo -H "$HOSTNAME" -p "$PORT"
    ;;
esac

echo "[dev-docker] Running default dev server."
exec "$NEXT_BIN" dev -H "$HOSTNAME" -p "$PORT"
