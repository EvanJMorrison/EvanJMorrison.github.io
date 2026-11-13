---
layout: page
title: N-terminal proteoform diversity
description: How different beginnings of a protein arise, and why those differences matter for protein fate.
importance: 1
category: research
stage: PhD research · Rissland Lab · CU Anschutz
related_publications: true
_styles: |
  .figure-gallery {
    margin: 1.5rem 0;
    padding: clamp(0.75rem, 2.5vw, 1.25rem);
    border: 1px solid var(--global-divider-color);
    border-radius: 0.5rem;
  }
  .figure-gallery-controls:not([hidden]) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  .figure-gallery-controls button {
    min-height: 44px;
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 0.35rem;
    background: var(--global-card-bg-color);
    color: var(--global-text-color);
  }
  .figure-gallery-controls button:hover {
    border-color: var(--global-theme-color);
  }
  .figure-gallery-status {
    font-variant-numeric: tabular-nums;
  }
  .figure-gallery-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    border: 0;
    border-radius: 0.25rem;
    background: #fff;
  }
  .figure-gallery-image:not(:disabled) {
    height: clamp(13rem, 57vw, 26rem);
    cursor: pointer;
    touch-action: pan-y pinch-zoom;
  }
  .figure-gallery-image img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
  .figure-gallery-slide {
    margin-bottom: 0;
  }
  .figure-gallery-slide + .figure-gallery-slide:not([hidden]) {
    margin-top: 1.25rem;
  }
  .figure-gallery[data-enhanced] .figure-gallery-slide {
    margin-top: 0;
  }
  .figure-gallery-caption {
    margin-top: 0.75rem;
  }
  .figure-gallery-caption p {
    margin: 0.35rem 0;
  }
  .figure-gallery-caption a {
    font-size: 0.875rem;
  }
---

A single gene can give rise to proteins with different N-termini through alternative translation initiation, processing, and modification. These differences can affect a protein's stability and function.

My work with Olivia S. Rissland examines the generation and consequences of this diversity. Our 2025 article in _Cell Reports_ brings together these questions about how proteins acquire different beginnings and what those differences mean for the cell {% cite morrison2025proteoform %}.

## Figures from the review

<div class="figure-gallery" data-figure-gallery role="region" aria-label="Figures from the review">
  <div class="figure-gallery-controls" data-figure-controls hidden>
    <button type="button" data-figure-previous aria-label="Previous figure">‹ Previous</button>
    <span class="figure-gallery-status" data-figure-status role="status"></span>
    <button type="button" data-figure-next aria-label="Next figure">Next ›</button>
  </div>

  <figure class="figure-gallery-slide" data-figure-slide data-figure-number="1">
    <button type="button" class="figure-gallery-image" data-figure-advance aria-label="Show next figure" disabled>
      <img src="{{ '/assets/img/research/proteoform-diversity-figure-1.png' | relative_url }}" alt="Diagram showing alternative first exons, splicing, and translation initiation generating different N termini." width="1140" height="1300" decoding="async">
    </button>
    <figcaption class="figure-gallery-caption">
      <strong>Figure 1. How one gene can produce different N termini</strong>
      <p>There are three places where a protein can end up with a different N terminus. The cell can use a different promoter when it transcribes the gene, splice the RNA differently, or start translating it at a different codon. Starting translation upstream can add amino acids; starting downstream can remove them from the beginning of the protein.</p>
      <a href="{{ '/assets/img/research/proteoform-diversity-figure-1.png' | relative_url }}" aria-label="View full-size Figure 1">View full-size figure</a>
    </figcaption>
  </figure>

  <figure class="figure-gallery-slide" data-figure-slide data-figure-number="2">
    <button type="button" class="figure-gallery-image" data-figure-advance aria-label="Show next figure" disabled>
      <img src="{{ '/assets/img/research/proteoform-diversity-figure-2.png' | relative_url }}" alt="Schematic of N-terminal processing and recognition across four N-degron pathways." width="2130" height="2000" decoding="async">
    </button>
    <figcaption class="figure-gallery-caption">
      <strong>Figure 2. How the N terminus affects protein stability</strong>
      <p>Making a protein is only part of the story. As it is made or afterward, removing the first methionine or adding a chemical group can change what the cell sees at the N terminus. Those changes can expose or create an N-degron, a signal that marks a protein for degradation. Which pathway recognizes that signal depends on the sequence and how it was processed.</p>
      <a href="{{ '/assets/img/research/proteoform-diversity-figure-2.png' | relative_url }}" aria-label="View full-size Figure 2">View full-size figure</a>
    </figcaption>
  </figure>

  <figure class="figure-gallery-slide" data-figure-slide data-figure-number="3">
    <button type="button" class="figure-gallery-image" data-figure-advance aria-label="Show next figure" disabled>
      <img src="{{ '/assets/img/research/proteoform-diversity-figure-3.png' | relative_url }}" alt="Histogram of differences in reporter stability, boxplots for PLEC, RABGAP1L, and TCF4, and a comparison of protein turnover times for two translation start sites." width="1670" height="705" decoding="async">
    </button>
    <figcaption class="figure-gallery-caption">
      <strong>Figure 3. Small changes at the N terminus can change protein stability</strong>
      <p>How much difference can a few amino acids make? When we reanalyzed reporter data, we found that different N termini from the same gene could confer very different stabilities. Panel B shows that range for PLEC, RABGAP1L, and TCF4. In the example in panel C, starting translation just two codons downstream shortened the time for half the protein to turn over from about 29 hours to 3 hours.</p>
      <a href="{{ '/assets/img/research/proteoform-diversity-figure-3.png' | relative_url }}" aria-label="View full-size Figure 3">View full-size figure</a>
    </figcaption>
  </figure>

  <figure class="figure-gallery-slide" data-figure-slide data-figure-number="4">
    <button type="button" class="figure-gallery-image" data-figure-advance aria-label="Show next figure" disabled>
      <img src="{{ '/assets/img/research/proteoform-diversity-figure-4.png' | relative_url }}" alt="Model comparing canonical eIF5A with an extended form that has a predicted Arg/N-degron and an eIF5A-sensitive ribosome pause site." width="1650" height="505" decoding="async">
    </button>
    <figcaption class="figure-gallery-caption">
      <strong>Figure 4. Could eIF5A help regulate its own levels?</strong>
      <p>eIF5A has two possible translation starts. The upstream start adds an extension whose N terminus made reporter proteins less stable; reporters with the canonical N terminus were stable. The extension also contains a site where ribosomes may pause when eIF5A activity is low. We propose that this pause could affect which start codon is used, linking how much eIF5A is made to how quickly it is degraded. That feedback model still needs to be tested.</p>
      <a href="{{ '/assets/img/research/proteoform-diversity-figure-4.png' | relative_url }}" aria-label="View full-size Figure 4">View full-size figure</a>
    </figcaption>
  </figure>

</div>

<script defer src="{{ '/assets/js/figure-gallery.js' | relative_url }}"></script>

Figures from Morrison, E. J. and Rissland, O. S. (2025), [_The generation and consequences of N-terminal proteoform diversity_](https://doi.org/10.1016/j.celrep.2025.116275), _Cell Reports_ 44, 116275. © 2025 The Authors. Reproduced under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Figures 1, 2, and 3 retain the original artwork; Figure 4 contains the label correction noted above. The summaries draw on the review text.
