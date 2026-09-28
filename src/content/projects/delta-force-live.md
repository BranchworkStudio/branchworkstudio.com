---
title: Delta Force Live
tagline: A squad tracker for Delta Force that is minutes behind, not days.
branch: games
kind: Web app
status: live
order: 2
cover: ../../assets/projects/delta-force-live-cover.png
cover_alt: The Delta Force Live connect page, dark with faint topographic contour lines.
made_with: [Supabase, Edge Functions, Static site]
---

The official stats page for Delta Force runs a day or two behind. After some
digging, it turned out the data underneath it is close to live, so I built a
tracker that shows my squad's raids within about a minute of extraction.

It has a match feed with expandable rosters, K/D and time-alive tiles,
breakdowns by map and operator, and a feed of red drops.

## Where it is now

Live and in use by me and a few friends. It is invite-only: a small server-side
poller feeds a Supabase database, and the site itself is static.
