---
A website based on a Jekyll Hyde theme.  
See: https://github.com/poole/hyde  

It is only slightly modified -- mostly with a few patches (mostly with the _config.yml) on deprecated stuff; formatting (/public/../hyde.css); and link references now tend to be absolute rather than relative links.  

---
**Making stuff work**  
To add a page to the sidebar, create a file.md in the main directory and add this stuff to the beginning of the file:  

```
---
layout: page
title: This is my page's title
---
```
<p />
To add a blog post (as seen from the main page), create a file.md in the _posts directory. To help navigate, name the file using this format ( 2019-02-25-This-is-my-posts-title.md ). More important, start that file's contents with:
```
---
layout: post
title: This is my post's title!
---
```
