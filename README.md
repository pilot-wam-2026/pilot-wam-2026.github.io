# PILOT Project Website

Project page for **Motion Chain of Thought** and PILOT, an anonymous
ICLR 2027 submission currently under review.

## Resources

- [Live project page](https://pilot-wam-2026.github.io/)
- [Training and evaluation code](https://github.com/pilot-wam-2026/pilot-code)
- [Original 340000 model and RoboCasa assets](https://huggingface.co/mxk1998/WM4A) (public; no login required)
- [Checkpoint files](https://huggingface.co/mxk1998/WM4A/tree/main/checkpoints)
- [Simulator archive](https://huggingface.co/mxk1998/WM4A/tree/main/archives)
- [Download and installation](https://github.com/pilot-wam-2026/pilot-code/blob/main/docs/DOWNLOAD.md)
- [Evaluation guide](https://github.com/pilot-wam-2026/pilot-code/blob/main/docs/EVALUATION.md)
- [Training and resume](https://github.com/pilot-wam-2026/pilot-code/blob/main/docs/TRAINING.md)
- [Recorded evaluation logs and provenance](https://github.com/pilot-wam-2026/pilot-code/blob/main/docs/LOGS.md)
- [Validation limits](https://github.com/pilot-wam-2026/pilot-code/blob/main/docs/VALIDATION.md)

The manuscript's 58.3% RoboCasa result and the original 340000 checkpoint's
repaired-protocol source evaluation (717/1200, 59.75%) are separate
measurements. The resource section makes that distinction explicit.
Repository visibility, historical Git authorship and account ownership
are not anonymized by editing the current page.

## Local Preview

Public Hugging Face access was verified on September 30, 2026. The repository
is ungated, and anonymous range downloads of both the checkpoint and simulator
archive matched the verified local artifacts. This access check did not
re-download the entire large-file bundle.

```bash
git clone https://github.com/pilot-wam-2026/pilot-wam-2026.github.io.git
cd pilot-wam-2026.github.io
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8000`. There is no build step or package installation.
Check desktop/mobile layouts, both themes, internal anchors and resource
links before publishing. Preserve the distinction between qualitative
demo videos, manuscript experiments, and released checkpoint evidence.

## Deployment

GitHub Pages is configured for the root of `main`; `.nojekyll` is retained.
Review and push a normal commit to publish. Do not reinitialize this
existing repository or rewrite its history to update resource links.
Use a credential manager or authenticated GitHub CLI, never tokens in
source files or command arguments.

## Source Map

```text
index.html            Scientific content and resource links
static/css/style.css  Responsive styling and light/dark themes
static/js/main.js     Theme, lazy-loaded videos and interactions
media/figures/        Existing manuscript illustrations
media/videos/         Existing robot/simulation demonstrations
```

No weights, training datasets, credentials, or private execution logs
belong in this website repository. Keep first-party identities out of
HTML comments as well as visible text; retain third-party legal attribution.
New or edited publication figures must have editable SVG sources, with
PDF/PNG deliverables exported from those SVGs.
