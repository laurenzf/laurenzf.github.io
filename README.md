# Laurenz Felix portfolio

A static site with no build step. Open `index.html` in a browser to see it.

## What each file is

| Path | What it is | Do you edit it? |
|---|---|---|
| `content.js` | Every word, number, link, photo, and drawing on the site | **Yes. This is the only file you normally touch.** |
| `index.html` | The engine: layout, Moon, rocket, Earth, project viewer | Rarely |
| `images/` | Photos, figures, the Moon and Earth maps | Add files here |
| `images/drawings/` | Your CAD and GD&T drawing exports (PNG or JPG) | Add files here |
| `files/` | PDFs people can open: resume, paper, drawing PDFs | Add files here |
| `source/Laurenz_Felix_Resume.tex` | LaTeX source of the resume (Jake's template). Paste into Overleaf to edit, then export the PDF to `files/` | When the resume changes |

## Common edits (all in `content.js`)

**Change any text.** Find the sentence and change it. Keep the `"double quotes"` around it.

**Add a photo to a project.** Put `gimbal.jpg` in `images/`. In that project's `images: [ ... ]` list add:
```js
{ src: "images/gimbal.jpg", alt: "what the photo shows", caption: "short caption" },
```
The first photo in the list becomes the project's card cover. Each photo you add replaces one dashed placeholder. Delete a line from that project's `slots` list once it's covered.

**Add a GD&T drawing.** Export the sheet from SolidWorks as PNG (File > Save As > PNG, 200 to 300 dpi). Optionally also save the PDF. Put the PNG in `images/drawings/` and the PDF in `files/`. In that project's `drawings: [ ... ]` list add:
```js
{ src: "images/drawings/nozzle.png", title: "Nozzle", number: "LF-001", rev: "A", pdf: "files/nozzle.pdf" },
```
`number`, `rev`, and `pdf` are optional. Visitors can click a drawing to see it full screen, zoom in on the dimensions, and open the PDF.

**Add a whole new project.** Copy one full `{ ... }` block in `FEATURED` (big project with a pop-up case study) or `CARDS` (small build), paste it after the previous block's closing `},`, and change the text. Give a featured project a new `id` in plain lowercase letters (it becomes a link like `yoursite/#nozzle`).

**Update "Currently".** `SITE.now`.

**Show the SEDS trade study results** once your lead approves: set `showTeamDetails: true`.

**Hide all dashed placeholders:** set `showPlaceholders: false`.

## If the page goes blank or shows a red bar

You broke the syntax in `content.js`, almost always near your last edit:
- a missing comma between two items in a list,
- a missing closing quote `"`,
- a quote mark inside text (write `\"` instead, or use a curly quote).

Undo the last change and try again.

## Number labels

Every stat ends with one of `"designed"`, `"simulated"`, `"estimated"`, `"tested"`, `"planned"`, or `null`. Keep using them. Recruiters trust labeled numbers.

## Putting it online (GitHub Pages)

1. Create a public repo named `laurenzf.github.io`.
2. Upload everything in this folder (keep the folders).
3. Repo Settings > Pages > Deploy from branch `main`, folder `/root`.
4. It goes live at `https://laurenzf.github.io` in a minute or two. Later you can point `laurenzfelix.com` at it under Pages > Custom domain.

Visitor stats: make a free GoatCounter account and paste its one script line just above `</body>` in `index.html`.

## Credits

Moon color map: NASA Goddard Scientific Visualization Studio, CGI Moon Kit (LRO data, public domain). Earth outlines: Natural Earth via world-atlas.


## The rocket game

On computers (not phones or tablets), a "Fly the rocket" button sits in the bottom-left corner. Pressing it or the G key starts a game: steer with the left and right arrows (or A and D), boost with up (or W), collect glowing cells for points (gold ones are worth 50), and avoid your own trail and the page edges. Esc quits. The best score is saved in each visitor's browser.

To remove it, set `game: false` in `SITE` in content.js.
