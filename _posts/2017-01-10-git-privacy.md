---
layout: post
title: Git Privacy
sub-title: What does your git commit contain? Your data may be being harvested
posted-on: January 10th, 2017
date: 2017-01-10 00:00:00 -0000

post-img: post-git-privacy.jpg 
---

I am an avid [data nut and life-tracker](http://smittey.co.uk/datarize-my-life/){:target="_blank"}. Anybody who knows me and has spent time with me will have seen me track the types of beer that I'm drinking, analyze my sleeping habits, and much more. I do this for me, and often to crunch numbers. I have weird hobbies, what can I say. Despite appearing that I happily give apps and services my personal information, I do think carefully about who I trust having my private (and valuable) data. Second to this, I am very cautious about who has access to my contact information, namely phone number and email address. I received an email recently which got me slightly worried... It was an email from a company who wanted me to work for them (a blanket email no doubt). Why was this weird? It was delivered to my work email address.

The email read:

> Hello, we are [company x], and we have been impressed by you and your code. We would like to invite you to speak with us regarding some positions that we have open. etc...

Going back to my point about revealing contact information, I have several different email addresses that all serve different purposes. With regards to recruitment, I would never under any circumstance use my work email address. In fact, I never use it for external purposes. This gave me a bit of an itch that I just couldn't help but scratching; how did they get my email address?

**To Google!**

![git help](/{{ site.img }}/posts-git-privacy-img-binoculars.jpg "git help")


I bee lined straight for the companies website and started reading it. It occured to me that perhaps this was part of their plan all along; get their naturally curious demographic to spend their precious time reading about them. I for one barely even give LinkedIn recruiters the time of day unless they really stand out. I digress, this blog post isn't about recruitment; it's about privacy. I navigated to their F&Q page, and funny enough I read "_How did we find you?_". This is the answer that they gave:

>We thought you might be wondering this! We saw your well written code on your Github repository. We cloned the repository and viewed the metadata for the commit.

I immediately cloned one of the repos that I pushed to from work. This one in particular is code for an Outlook plugin that I wrote to help me and my peers with our jobs (I sometimes find some free/dead time to work on things). Sure enough...


```
$ git show --quiet HEAD
commit 18ec67741a486090b16d50aeaeb13a667a03dcbf
Author: Smith <my@work-email.com>
Date:   Fri Sep 16 17:12:52 2016 +0100

    Initial commit. Working

```

Let the record show that I'm not angry. This is a feature of git whereby the authors information (which was provided during git configuration) is placed in the commit object's metadata. I'm more annoyed at myself for not considering it, and also irritated that this was shamelessly exploited by recruiting to cause unscolicited emails.

![git help](/{{ site.img }}/posts-git-privacy-img-git.jpg "git help")

#### How do I fix this?

For the most part the damage is done. Unless you want to spend a lot of time and effort by fixing your commit history (accomplished using `git filter-branch` but could be dangerous with many implications for other contributors) then you will have to come to terms with the fact that your email is discoverable. However, it is easily fixed for future commits.

Change the privacy settings related to your github user.

1. Navigate to your profile settings
2. Click '_Emails_'
3. Tick '_Keep my email address private_'

Now to change the contact information used in all commits for all repositories on that machine.

1. Open a command-line prompt
2. Type `git config --global user.email "<username>@users.noreply.github.com"`
3. Confirm the email address is correct by typing `git config --global user.email` This will return the email address that you have just entered

Any new commits from now on will use this _noreply_ email address as part of the commit object instead of your precious personal address.

Most people will not care about this, but I thought that I would write this blog post to inform the privacy-focused bunch of you out there in case you were blind to this, as I was.