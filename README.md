-------------------  

**Welcome to Adventure!**  

This is Alan's website based on a Jekyll Poole/Hyde theme.  
See: https://github.com/poole/hyde  

It is only slightly modified from the Poole/Hyde authors' original, but with with a few patches (mostly with the _config.yml) on deprecated stuff; minor formatting (/public/../hyde.css); and link references now tend to be absolute rather than relative links.  

--------------------

**Making stuff work**  
To add a page to the sidebar, create a file.md in the main directory and add this stuff to the beginning of the file:  

```markdown
---
layout: page
title: This is my page's title
---
```
<p />
To add a blog post (as seen from the main page), create a file.md in the _posts directory. To help navigate, name the file using this format ( 2019-02-25-This-is-my-posts-title.md ). More important, start that file's contents with:

```markdown
---
layout: post
title: This is my post's title!
---
```

<p />
If you want to make a page, but exclude it from the side bar, add a `note: exclude` tag. Such as:

```markdown
---
layout: post
title: This is my post's title!
note: exclude
---
```
