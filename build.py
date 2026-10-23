#!/usr/bin/env python3
"""AbbadiTech LLC - Static Site & Astro Synchronizer
AbbadiTech focuses strictly on TWO services:
1. ELECTRICAL TECHNICAL WORK
2. PLUMBING TECHNICAL WORK
"""
import subprocess
import sys
import os

SITE_DIR = os.path.dirname(os.path.abspath(__file__))

def main():
    print("=" * 60)
    print("AbbadiTech LLC - Electrical & Plumbing Technical Services")
    print("Building Astro production site...")
    print("=" * 60)
    
    # Run Astro build
    try:
        subprocess.run(["npm", "run", "build"], cwd=SITE_DIR, check=True, shell=True)
        print("\n[SUCCESS] Astro static build complete! Output is in dist/ and synced to root.")
    except Exception as e:
        print(f"\n[ERROR] Build failed: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
