---
layout: post
title: Using Meteor Offline	
sub-title: Tips and tricks to workaround package management offline
posted-on: June 12th, 2016
post-img: post-using-meteor-offline.jpg
---

Most modern web frameworks use package managers. It's almost unavoidable when building larger projects or projects that use modern concepts or components. They allow for easier development where dependency trees are managed along with versions and updates. Unless of course you're working offline. Then they're a pain in the arse.

A lot of package managers allow you to download a mirror of the central repository for offline dependency management, such as [npm](https://www.npmjs.com/). And despite npm being encompassed within Meteor, the Meteor framework doesn't allow for an offline mirror. At least not cleanly. I've recently been required to use Meteor in an offline environment with no access to the Internet, so my Meteor journey stopped and started at `meteor add <package>`. Errors. Errors everywhere. _"Are you behind a proxy?"_,  _"Are you offline?"_,  _"Cannot connect"_. It took a little while to figure out but here is how I install packages and their dependencies to a Meteor project that has no access to the Internet.

### What you need ###

1. An online machine with the Meteor framework installed
2. A removable storage device

### What to do ###

1. On your machine with online access and the Meteor framework installed, take an existing project or create a new meteor project:

	`meteor create sample-app`

2. Add the package (and implicit dependencies) that you want to add to your offline project. For example d3.js

	`meteor add d3js:d3`

3. At this point you need to head over to your Meteor installation directory e.g. `C:/Users/smittey/AppData/Local/.meteor/packages` and select the newly added packages (hint: sort by date descending to see most recently added). Take these packages and copy them to your removable storage device. 

4. Make a note of the dependency additions to `<project>/.meteor/packages` e.g. `d3js:d3`. 

5. Move the removable storage device to your offline machine and copy the packages into your local `C:/Users/.../AppData/Local/.meteor/packages` directory. 

6. Create an `imports` folder in root of your project i.e. `<project>/imports` and copy in those same dependencies. 

7. Take your packages file at `<project>/.meteor/packages` and add in the dependencies noted from _step 4_. 

8. Run `meteor` and you should be good to go. The dependencies should be installed and final ties to the project should be created correctly.

Happy dependency managing!

