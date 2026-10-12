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
- Use Radix Dialog primitives for the catalog lightbox with focus restoration and arrow-key navigation; this keeps modal keyboard handling and background isolation accessible.
- Keep Meta Pixel initialization exclusively in the root's guarded client effect; this avoids duplicated tracking when the storefront renders or hot-reloads.
- Do not separately export route component functions; TanStack's automatic route splitting removes their declarations from the route module.
