### @micro-frontend application

A micro frontend application to showcase Webpack 5 Module Federation plugin, and handle multiple modules with share dependencies.

<div style="text-align: center;">
  <img src="docs/screenshot.png" width="700" alt="screenshot" style="margin-top: 35px"/>
</div>

### Table of contents

- [App Architecture](#app-architecture)
- [Technical Resources](#technical-resources)
- [Getting Started](#getting-started)

## App Architecture

The project has three sub-applications using the concept of micro frontend, moreover, we've another application shell named `container` for handling whether we should or not show other apps, all these modules are managed by `Module Federation` plugin, from `Webpack 5`. As you can see below:

```
  .
  |
  |__ packages
    |
    |__ container
    |__ auth
    |__ dashboard
    |__ marketing
```

We use a generic mount function for custom rendering micro apps to get agnostic behavior for any frameworks that going used
down the road. Also, the communication between apps is made by the callbacks functions.

## Technical Resources

- Micro-frontend architecture with mono-repo
- `Github Actions` workflows for automatically deploying each MFE (Micro-frontend)
- Use of `Module Federation` plugin for managing applications
- Use of `Amazon S3` and `Cloud Front` (CDN)
- Callback communication between apps
- Lazy load app modules
- React and Vue based applications
- `React Router DOM` for handling browser and memory routers

## Getting Started

1. First of all, you need to clone this repository:

```shell
git clone
```

2. Go to each application directory and install dependencies:

```shell
npm install
```

3. Finally, runs each one with:

```shell
npm run dev
```
