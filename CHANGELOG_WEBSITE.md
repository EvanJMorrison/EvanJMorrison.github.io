# Website update prepared September 10, 2026

This update preserves the existing Jekyll/al-folio site and GitHub Pages workflow.

## What changed

- Updated the homepage and research pages for ribosome quality control in the Kostova lab at Stowers.
- Replaced placeholder CV information with the supplied CV's dates, degrees, research, fellowships, skills, teaching, mentoring, service, and selected talks.
- Added the original, unchanged CV PDF as a working download.
- Simplified navigation to About, Research, Publications, Blog, Books, CV, and Contact.
- Removed template instructions from the Repositories page and hid the template submenu from navigation.
- Added factual milestone posts for the NSF Graduate Research Fellowship, HHMI Gilliam Fellowship, the SACNAS research presentation award, Rising Stars in Biomedical Sciences, and joining the Kostova lab. Expanded the existing PhD completion post.
- Added optional photo galleries with captions, alternative text, and links to full-size images. No personal photographs were fabricated.
- Built a Books page and dedicated review layout supporting reading status, optional covers, fractional ratings, and full reviews. No books, opinions, or ratings were attributed to Evan without his input.
- Added reusable source templates and CONTENT_GUIDE.md for future posts, photographs, and reviews.
- Improved spacing, typography, mobile navigation, light/dark colors, keyboard focus, and the CV download label.
- Removed the publication abstract placeholder and added short descriptions to three featured papers.
- Corrected the 2A paper's author list and added the equal-contribution note, checked against the published article: https://pmc.ncbi.nlm.nih.gov/articles/PMC12338488/.
- Fixed invalid structured metadata caused by multiline descriptions and empty social links.

## Validation

- Production Jekyll build passed using the repository's existing Gemfile and lockfile.
- Checked 30 generated HTML pages; no broken local links or asset references found.
- Checked JSON metadata, six milestone posts, date precision, key routes, and web CV facts.
- Confirmed the downloadable PDF is byte-for-byte identical to the supplied CV.
- Verified a temporary book review renders on both Books and its own page, with an optional cover omitted, a 4.5 rating, and quoted description text handled correctly.
- Verified a temporary photo gallery renders alternative text, captions, and the original-image link.
- Removed all temporary content after validation.
- Browser visual testing was not performed.

## Still needed from Evan

- Actual milestone photos and captions.
- Book titles and personal notes or reviews; optional ratings.

These changes are prepared for pull request review. The public website remains unchanged until the update is merged and deployed.

## Applying the update package manually

The update ZIP contains new and modified files only, using their original relative paths. Extract it, then copy its contents into a checkout of EvanJMorrison/EvanJMorrison.github.io, preserving the folders and replacing matching files. Use a new branch and review the changes before merging. No source-file deletions are required. Merging into the default branch triggers the repository's existing deployment workflow.
