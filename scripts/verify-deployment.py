#!/usr/bin/env python3
"""Verify the published commit and entrypoints against the local build."""
import hashlib
import json
from pathlib import Path
import sys
import time
import urllib.request


def verify(commit):
    root = Path("build")
    manifest = json.loads((root / "asset-manifest.json").read_text())
    paths = ["deployment.json", "index.html", "asset-manifest.json", *manifest["entrypoints"]]
    for path in paths:
        request = urllib.request.Request(
            f"https://ximatai.net/{path}?deploy={commit}",
            headers={"Cache-Control": "no-cache", "Accept-Encoding": "identity"},
        )
        with urllib.request.urlopen(request, timeout=20) as response:
            published = response.read()
        if path == "deployment.json":
            if json.loads(published).get("commit") != commit:
                raise ValueError("Published commit does not match this deployment")
        if hashlib.sha256(published).digest() != hashlib.sha256((root / path).read_bytes()).digest():
            raise ValueError(f"Published file differs: {path}")


if __name__ == "__main__":
    for attempt in range(3):
        try:
            verify(sys.argv[1])
            print(f"Verified https://ximatai.net at {sys.argv[1]}")
            break
        except Exception:
            if attempt == 2:
                raise
            time.sleep(5)
