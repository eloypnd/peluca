# 2. npm scoped package

Date: 2017-07-30

## Status

Accepted

## Context

At this moment this patterns library is meant to be used only in personal projects.

## Decision

Prefix `peluca` with `@eloypnd` [scope](https://docs.npmjs.com/misc/scope).

New full package name: `@eloypnd/peluca`.

## Consequences

To import UI patterns from any application using this patterns library we'll do it like this:

```javascript
import { UIpattern } from '@eloypnd/peluca'
```
