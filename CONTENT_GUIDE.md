# Adding writing and photos

Your site remains a Jekyll/al-folio site hosted through the existing GitHub Pages workflow. Posts and reviews are Markdown files. The templates in `_content_templates` are source-only and never appear on the website.

## Add a milestone or blog post

1. Copy `_content_templates/milestone.md` or `blog-post.md` into `_posts`.
2. Name the file `YYYY-MM-DD-short-title.md`, for example `2026-09-10-conference.md`.
3. Replace the title, date, description, and body. Change `published: false` to `published: true` when ready.
4. Use `date_precision: month` or `year` when only that much is known. The filename must still contain a day for Jekyll sorting; use `01` as a sorting convention, not an asserted event date.
5. Commit the file on a branch and open a pull request. Merging into the default branch triggers the existing publishing workflow.

Milestone posts are automatically listed in Blog and the milestones archive. Ordinary posts can use `categories: [essays]`. The home page displays the three newest posts.

## Add photos to any post

Upload JPEG, PNG, or WebP images to `assets/img/milestones/`. Use short filenames without spaces. Resize large originals to roughly 1600 pixels across before uploading when possible.

Add a gallery in the post's front matter:

```yaml
gallery_title: From the celebration
gallery:
  - path: /assets/img/milestones/defense.jpg
    alt: "Evan standing beside his dissertation presentation"
    caption: "After the defense at CU Anschutz."
```

Only use this example after uploading your actual photo and writing a matching description. Add more `- path` entries for more images. Captions display below the photos; clicking a photo opens its full-size file. An optional `thumbnail: /assets/img/milestones/defense.jpg` adds a photo to the Blog listing. Without photos, the post displays cleanly with no empty image boxes.

## Add a book review

1. Copy `_content_templates/book-review.md` into `_books`, creating that directory if needed.
2. Name it `short-book-title.md`.
3. Supply the real title, author, publication year (`released`), review date (`date`), status, and your review.
4. Set `published: true` when finished. Optional fields include `stars` (1–5, including halves), `finished`, and a local `cover` path. ISBN or Open Library ID can supply a remote cover instead.
5. Commit it with the same branch-and-review process. It appears automatically on Books and receives its own `/books/short-book-title/` page.

No review content, ratings, or reading dates have been invented. The Books page stays in a clean empty state until the first review is published.

## Update your CV

The complete downloadable CV is `assets/pdf/EJM_curriculum_vitae.pdf`. The web summary is `_data/cv.yml`; update both when your record changes. Publications are managed separately in `_bibliography/papers.bib`.

The Validate CV workflow checks that the PDF is readable, belongs to the named CV owner, and matches the links used by the site. It runs on pull requests as well as updates to the default branch. The web CV YAML follows the website layout’s schema; it is not an input to the standalone RenderCV PDF generator. Your supplied PDF is never regenerated or overwritten by this workflow.

## Content sources and dates

The new milestone texts are factual starter posts based on the CV supplied in September 2026. Personal reflections and photographs still need your input. June 2021 and September 2022 are the fellowship support start months listed in that CV, not independently verified award-notification dates. The October 24, 2025 PhD announcement date is retained from your existing post. The 2026 postdoc entry shows only the year because the CV does not specify a month.

The site uses a general research description rather than claiming new unpublished results. The original CV PDF is included unchanged.
