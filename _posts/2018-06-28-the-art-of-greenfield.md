---
layout: post
title: The Art of Greenfield
sub-title: What to think about when starting a brand new software project 
posted-on: June 28th, 2018
post-img: post-art-of-greenfield.jpg
---

> _"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilisation."_  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ Gerald Weinberg

Software is everywhere. Broadly speaking, successful companies are either technology-first that know how to market 'x' well, or currently sell 'y' and are learning how to utilise software to keep up with the market.

Where does this software come from? Applications are being created every day for the companies in both of the above categories. They will often require new features, upgrades, patches, and sometimes pivots. The lifespan of these applications from birth to maintenance means that they fit in one of the following categories: **Greenfield** or **Brownfield**. 

A projects long-term success can be aided by a well-thought-out project plan and solid ground-work.

> _"Before software can be reusable it first has to be usable."_  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ Ralph Johnson" 



______________

## What is Brownfield?

Brownfield projects is analogous to building on a brown field where work has already been done with building blocks or infrastructure already in place. It is much more common to find yourself joining a team on a Brownfield project rather than a Greenfield. 

Some examples of Brownfield software projects are:

1. Changing the functionality of the code to enhance the performance of an application
2. Adding a new feature to pre-existing software
3. Upgrading the codebase


______________

## What is Greenfield?
 
Greenfield, conversely, is analogous to building on a green field without previous buildings or infrastructure, are typically _more_ free of constraints. The term describes a situation where no other development has taken place, so normally there is a greater degree of freedom granted to the creators and founding members.

Some examples of Greenfield software projects are:

* Start-ups
* New tools
* Research projects
* Prototypes
* Proof of concepts

What does this mean for brand-new software projects? 

![Freedom](https://www.biography.com/.image/ar_16:9,c_fill,cs_srgb,fl_progressive,g_faces:center,q_auto:good,w_768/MTMwMjk0MzE2NzE0MjAyMzg2/braveheartjpg.jpg)

**Legacy Code, What?** - Perhaps the biggest impact this has on a project, for better or for worse, is there is no legacy code to deal with. Nobody can write clearer code (to you) than you can and trying to put yourself in the psychotic mindset of whoever wrote the previous implementation can often be difficult.

**Technologies, Languages, Frameworks** - New project means a blank slate. New language, new framework, new infrastructure! It isn't _always_ true that you'll have influence over these and in my experience it is sometimes pre-decided by the client or management. It is an exciting thought though, right? You obviously want be sensible with this and with great power comes great responsibility. You probably don't want to use a sledgehammer to crack a walnut. Make sensible decisions and considerations. At the very least use a current/supported version of whatever you choose.

**Programming and Management Techniques** - Techniques are constantly developing and being adapted to the ever-evolving tech landscape. The chances are that during your last brownfield project, the delivery and management of an agile project for example will have evolved from an ape to a _slightly_ more human ape. Similarly, programming techniques such as patterns and build pipelines are constantly being refined. In a greenfield landscape it is far easier to set a standard than change it in a late-stage brownfield. 

You can't teach an old project new tricks. Sometimes. Unless you're a wave-maker. And want to be disliked. It will be an uphill battle.

**Freedom to determine scope** - The early stages of any project are always crucial to determining and agreeing scope with stakeholders. Unless the project is being delivered in an agile way (it's 2018 - it _probably_ should be), over-promising and under-delivering can be a big source of pain with longer running Brownfield projects. Technical debt can be large.  

**Select the Founding Fathers** - Ok, so not everybody will have a say in this one. However, those chosen at the beginning of the project will play an important part in shaping and carving out best practise as well as the foundations. 


______________


## Your Greenfield Design

![Freedom](https://images.pexels.com/photos/374079/pexels-photo-374079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)

This is important. Shortcomings or lack of care and consideration in certain areas early in the project could linger or manifest into big hairy beasts. You have the control (and after this post: the knowledge) to shape the project and adopt best practise in many different areas. 

### Programming Approach
The first merge to the codebase is one of the most important. It sets the precedence and standard; a guide for how to move forward. Agree with your team the approach you're taking. 

**Process** - Are you doing BDD? TDD? ATDD? Follow and enforce it. An established way of working early on will stick better than an adapted way of working. 

**Branching Model** - Agree on it. Some teams prefer Master to be left **well** alone and contain only released versions. Some prefer to push little and often to Master with tagged releases. Decide that before the first merge. Your tree will be cleaner and easier to follow and track changes. 

**Best practise** - Style is important. Nobody likes looking at files with every permutation of inline vs new line braces, inline vs new line parameters, spaces vs tabs etc... Enforce a linter. Most come with (in addition to many analysis benefits) the ability to complain until you comply. Learn to love the linter, even if this is through Stockholm syndrome.

**Pull Requests** - Where possible, everything should be code-reviewed and pull requests should be created accordingly. This isn't always easy in the early stages of a project where resources may be sparse, but use best efforts.

**CI/CD** - Automation is key. There is always a time spike for this setup, but early automation could save you a lot of time in the long run. Your first build MVP should be HelloWorld deployed to your environment. Once this is known to work then it can be developed more rapidly from there.  

### Management Approach
How you manage your team and the project is just as important as the code that your team is producing. Set the standard early and stick with it. Effort should be made to mitigate against time lost for developers by good management and the facilitation of useful tools. 

**Delivery approach** -  How are you planning on delivering the project? Whether this is Waterfall, Agile, Scrum, Kanban or lean, one size certainly does not fit all and this should be selected accordingly. 

**Backlog** - A well-defined backlog with a broken down list of tasks that make sense to the developer should be in place. This can and should be created in collaboration with key members of the development team and actively maintained to reflect actuals and known time scales. 

### Shared Approach

**Documentation** - This is a shared ~~burden~~ responsibility between developers and management, but both parties need to ensure that the relevant information is available. From a management perspective, it should be clear from the beginning what the requirements are for the project/phase. From a technical standpoint, developers should ensure that documentation exists from the beginning with regards to project set up, code discovery, evolving architecture, and commented code. 

> _“Any code of your own that you haven't looked at for six or more months might as well have been written by someone else”_   
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~ Eagleson's law


______________

## Reflections

Greenfield projects are a brilliant thing to be involved with. They aren't as common as Brownfield and can be a White Whale for some developers. Your involvement in this kind of project requires discipline and a well-thought-out plan. With great power comes great responsibility but the reward of seeing a project grow from the ground up to its first deliverable is worth the effort.