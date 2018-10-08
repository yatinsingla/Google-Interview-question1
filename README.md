# Google-Interview-question1
Find number of groups which contain more than one element of given emails - google interview question


Every address consists of a local name and a domain name, separated by the @ sign. For example, in the address "dublicate@example.com", "duplicate" is a local name and "example.com" is a domain name.

For the purpose of this task, let's define 2 ways of formatting an email address:

1) If you add dots ('.') between some characters in the local name part of an email address, it will be forwarded tot he equivalent address without dots. For instance, email address of the form "dupli.cate@emaple.com", "d.u.p.l.i.c.a.t.e@example.com" and "dupli...cate@emaple.com" will be forwarded to "duplicate@example.com". Note that this does not work for the domain names, so "duplicate@exa.mple.com.net" is different from "duplicate@example.com".

2) If you add a plus ('+') in the local name, everthing after the plus sign will be ignored. This allows certain emails to be filtered, for example, "duplicate+work@example.com" will be forwardded to "dunplicate@example.com".

It is possible to use both these formatting methods at the same time.

You are given a list of addresses. We collect them together into groups, with each group containing emails that areequivalent according to the above rules.

For example, given L = ["a.b@example.com", "x@example.com", "x@exa.mple.com", "ab+1@example.com","y@example.com", "y@example.com", "y@example.com"] there are 4 groups:
-> ["a.b@example.com", "ab+1@example.com"]
-> ["x@example.com"]
-> ["x@exa.mple.com"]
-> ["y@example.com","y@example.com", "y@example.com"]

So the task is to find the number of groups which contain more than one element in each group?

So here in above example the number of groups that contain more than one element in each group are 2 i.e. 
-> ["a.b@example.com", "ab+1@example.com"]
-> ["y@example.com","y@example.com", "y@example.com"]
