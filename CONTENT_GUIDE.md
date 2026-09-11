# Adding news, writing, and photos

Your site is a Jekyll/al-folio site hosted through GitHub Pages. News, blog posts, and book reviews are separate collections of Markdown files. Templates in `_content_templates` are source-only and never appear on the website.

## Add news or an announcement

1. Copy `_content_templates/news.md` into `_news`.
2. Name the file `YYYY-MM-DD-short-title.md`, for example `2026-09-10-conference.md`.
3. Replace the title, date, description, permalink, and body. Use a unique permalink such as `/news/conference-2026/`.
4. Set `published: true` when ready. For a draft, keep `published: false`.
5. Commit on a branch and open a pull request. Merging into the default branch triggers publication.

Fellowships, joining a lab, completing a degree, presentations, and other career milestones belong in News. The homepage shows the three newest announcements; every published announcement appears on News.

Use `date_precision: month` or `year` when the exact day is unknown. Use `01` for missing month/day components in the filename and `date` field as a sorting convention; only the known month or year is displayed. Do not substitute a guessed date for an unknown announcement date.

## Add an actual blog post

Copy `_content_templates/blog-post.md` into `_posts`, name it `YYYY-MM-DD-short-title.md`, and fill in the title, date, description, and text. Set `published: true` when ready. Essays and reflections appear on Blog and in its RSS feed, independently of News. Blog has an empty state until you publish your first post. Books remains a separate section for reviews.

## Add photos to news or blog posts

You can send photos in chat and identify the announcement each belongs to, along with any captions. To add them yourself through GitHub:

1. Open `assets/img` in the repository. Choose **Add file → Upload files**, upload your JPG, PNG, or WebP files, and commit them to your working branch. Use short filenames without spaces. Images around 1600 pixels across are usually sufficient.
2. Open the announcement in `_news` (or the blog post in `_posts`) and choose the pencil icon to edit.
3. Replace `gallery: []` in the front matter between the `---` lines with your actual image paths, descriptions, and captions:

```yaml
gallery_title: From the celebration
gallery:
  - path: /assets/img/defense.jpg
    alt: "Evan standing beside his dissertation presentation"
    caption: "After the defense at CU Anschutz."
```

4. Add more `- path` entries for more photos. To show a photo beside the announcement on the News listing (or a post on Blog), add:

```yaml
thumbnail: /assets/img/defense.jpg
```

5. Commit your edits to the same branch and open a pull request.

Only use these examples after uploading your actual photo and writing an accurate description. Captions display below the photos; clicking opens the full-size file. Announcements without photos have no empty image boxes. Gallery support works for both News and Blog.

## Change the homepage photo

Upload the new portrait into `assets/img` with a new filename, for example `evan-portrait-2026.jpg`. Edit `_pages/about.md` and update the image and alt text under `profile`:

```yaml
profile:
  align: right
  image: evan-portrait-2026.jpg
  alt: Evan J. Morrison
  image_circular: false
```

Keep the other existing profile fields, including `more_info`. The `image` value is just the filename inside `assets/img`; gallery paths use the full `/assets/img/...` path. A new filename prevents an older cached portrait from being shown. A clear portrait with room around your face works well. You can also send the replacement photo in chat and label it “homepage.”

## Add a book review

1. Copy `_content_templates/book-review.md` into `_books`.
2. Name it `short-book-title.md`.
3. Supply the real title, author, publication year (`released`), review date (`date`), status, and your review.
4. Set `published: true` when finished. Optional fields include `stars` (1–5, including halves), `finished`, and a local `cover` path. ISBN or Open Library ID can supply a remote cover instead.
5. Commit it with the same branch-and-review process. It appears on Books and receives its own `/books/short-book-title/` page.

## Update your CV

The downloadable public CV is `assets/pdf/EJM_curriculum_vitae.pdf`. The web summary is `_data/cv.yml`; update both when your record changes. Publications are managed separately in `_bibliography/papers.bib`.

The public PDF uses a general description of the current research project, consistent with the research page and web CV. Keep unpublished project details out of future public CV uploads too. The original uploaded attachment has not been edited. Earlier repository versions are not changed by this update.

The Validate CV workflow checks that the PDF is readable, belongs to the named CV owner, and matches the links used by the site. It runs on pull requests and updates to the default branch. The web CV YAML is not input to RenderCV. The validation workflow does not generate or overwrite the PDF.

## Sources and dates for the existing announcements

The announcement texts are based on the supplied CV and use a contemporaneous voice. June 2021 and September 2022 are the fellowship support start months listed in the CV; confirm or adjust them if your award notifications came earlier. The October 24, 2025 PhD announcement date comes from the original site. The postdoc entry displays only 2026 because the CV does not specify a month.

The program description is based on [HHMI's Gilliam Fellows Program page](https://www.hhmi.org/programs/gilliam-fellows), which describes PhD support, professional development, advisor mentorship training, and an application for four further years of postdoctoral support.

`_news/hhmi-gilliam-postdoctoral-pilot.md` is a completed draft based on your account of four years of personal postdoctoral funding. It stays unpublished until the original pilot announcement date is supplied. Add its date and appropriate date precision, then set `published: true`. The current HHMI page confirms the postdoctoral phase but does not establish the original pilot announcement date.

Old milestone URLs under `/blog/` redirect to their corresponding News pages so existing links still work.
