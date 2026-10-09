<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the storefront at the index route, with product imagery imported through Lovable asset pointers; this keeps uploaded media out of source control.
- Keep palette, typography and page styling in src/styles.css and expose action styles through Button variants; this keeps the visual system consistent.
- Do not connect the purchase action to the reference site's seller; require the project owner's checkout URL before enabling external payment.
