# Dog-test

This repo is purely runnable as a static html website. Simply open index.html from your browser.

It was done in 2h beginning at the initial commit.

I chose to not do any CSS at all. Most of the repo is really light on JS, as it was deemed not needed until the "showing previously displayed" part.

## Kanban Board

This board is ordered in term of priority and complexity. The goal is to implement as much as possible in the easiest way to change so that the site is always releasable and to get features easier to turn around first. It is highly probably we will never reach the history part.

Task may get broken down into multiple task at any time. In particular we expect the history one to be broken down multiple time

| todo                                  | WIP | Done                 |
| ------------------------------------- | --- | -------------------- |
|                                       |     | index.html, one pic  |
|                                       |     | refresh image button |
|                                       |     | Other breeds page    |
|                                       |     | shiba -> shiba.html  |
|                                       |     | index list breeds    |
|                                       |     | breed list get pic   |
|                                       |     |                      |
| create history page                   |     |                      |
| each random click store to IndexedDB  |     |                      |
| get data from IndexedDb               |     |                      |
| display a list of element from the db |     |                      |
| nicer breed index                     |     |                      |

## Notes

This will record my notes in a stream of consciousness style as i go. The objective is to reproduce what could be possible if i was working with a team.

### Initial

I am not a strong Vanilla JS dev. And this test does not test anything about the backend. Definitely not my forte. I think i can do nearly everything in this without JS outside of the history part and getting the image. I will put this one at last, because i am going to have to learn a lot to do it. Better offer value upfront, especially knowing the time limitation.

I am going to use <https://dog.ceo/dog-api/documentation/random> extensively

Also it is not obvious from the webpage at dogs.ceo what is the license for these so uh... Maybe copyright violation. Will have a look if that is a problem later, definitely worth flagging.

I am also leaving all thinking for CSP and security to later. I would love to tackle it now, but i don't know enough yet and 2h is short.

Would be nice to serve is as gh pages, may do that instead of the history part.

### Random image

I keep forgetting how painful promises and fetch is. Really, Promise are such a broken API. Whyyyyyy

### Breeds

Yeah i am bruteforcing. Don't care :D Though not touching the subreeds, it was not talked about in the thingy and it is complex enough for 2h. Not so hard if we wanted.

Also no, no js on the fly generation, it is simple enough to do this way

Also time to get a site folder instead of putting it all together.

## breed index

Editor shortcuts to save the day

## images on breed

I could probably do something nicer with a dataset value and looping through the children element with an onload on the body but that is too much DOM manipulation for me today
Would be nice to get rid of the quotes so it is on the kanban board
Also would be nice to add a way to know which breed it is, like keeping a name. Would probably be something i would do if i was doing css, with a nice pice per line and all, but i am not doing any CSS today.

Also it is obvious some of these images are copyrighted (watermarked).... there is a real problem here

## History

Ok reaching the end of my time here.
Two solutions for history

  1. use WebStorage. That would work but limited. Maybe if we limit to a 10 pic history ?
  2. use IndexedDB. Far more involved but still doable. I think it is a better long term solution. Maybe with a "load more" to avoid long term problem when it grows but that is for later.

Only 2min left, not going to try doing more.
