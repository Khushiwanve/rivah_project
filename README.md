# Rivah Studios website

Plain HTML, CSS and JavaScript. No framework, no npm, no build step. What you see in this folder is exactly what goes on the server.

## Pages
| File | Page |
|---|---|
| `index.html` | Home (hosting loads this automatically for yourdomain.com) |
| `services.html` | Services, process, FAQ |
| `work.html` | Creator showcase and case studies |
| `about.html` | Founder |
| `contact.html` | Contact form and FAQ |
| `404.html` | Page not found |

## Folders
```
css/
  base.css          brand colors (tokens), fonts, reset, headings   <- change colors/fonts here
  layout.css        navbar, panels, marquee, footer
  components.css    buttons, cards, creators, dialog, form, FAQ, testimonials
  effects.css       loader, scroll reveal, reduced motion
  responsive.css    tablet and mobile rules
  pages/            home.css, services.css, about.css (only loaded by that page)
js/
  core/             config.js (WhatsApp, email, Instagram), data.js (all content), utils.js
  components/       one file per feature: nav, loader, marquee, services, creators,
                    cases, testimonials, process, founder, contact-form, whatsapp,
                    effects (cursor, magnetic, tilt), reveal (scroll + counters)
  river/            river-shader.js (GLSL) and river.js (WebGL loop)
assets/
  logo/             logo files (dark + reversed lockup, mark, wordmark) and icons
  founder/, creators/, clients/   <- put your images here
```
Each page lists the scripts it needs at the bottom of its HTML. A component only runs if its section exists on that page.

## Brand (from the Brand Identity Kit)
- Colors in `css/base.css`: Parchment Cream #EFE6D4, Ink Black #161312, Warm Sand #D9C7A5, Terracotta #B5573A, Olive Sage #7A8266, Deep Umber #3B2A20. Buttons use a slightly deeper terracotta (#A24C31) so cream text stays readable (WCAG AA).
- Fonts: headings Rubik Medium, uppercase with wide spacing; body DM Sans. Only these two.
- Logo: `assets/logo/logo-lockup.png` (use on cream/sand), `logo-lockup-reversed.png` (use on Deep Umber/Ink Black). Also `logo-mark` and `logo-wordmark` in both versions. Keep clear space equal to the height of the R around it.
- The river uses Olive Sage tones on the cream background, with terracotta leaves.

## Reels
Reels live in `js/core/data.js` under `reels`. For each reel paste its Instagram link in `instagram` (open the reel on Instagram, tap Share, Copy link). Tapping the card, the play button or the Instagram icon opens that reel on Instagram. Update `likes` and `views` to the real numbers. Optional: add a short muted preview (`video`, mp4, 9:16, under 2 MB) and a cover (`poster`) in `assets/reels/`. Previews play only while on screen.

## FAQ and "Who we work with"
FAQ questions live in `js/core/data.js` under `faq` (each has `for`: all, small, big or creator, which controls the tabs). The "Who we work with" cards are in `index.html` and send a ready WhatsApp message for each type of client (messages in `js/core/config.js`).

## Everyday edits
- Colors, fonts: `css/base.css`
- Creators, services, case studies, testimonials, client names: `js/core/data.js`
- Page text: the HTML file of that page
- WhatsApp, email, Instagram: `js/core/config.js`
- Add a creator photo: copy it to `assets/creators/` and set `image: "assets/creators/name.jpg"` in `data.js`

## The navbar and footer repeat in every HTML file
That is normal for a plain site. If you change a menu item, change it in all 5 pages (search for `class="links"`).

## Add a new page
1. Copy `services.html` to `newpage.html`, change the title, description, canonical URL and content.
2. Add it to the menu and footer in every page.
3. Add it to `sitemap.xml`.

## Go live
- **cPanel / shared hosting (GoDaddy, Hostinger, BigRock):** upload everything in this folder into `public_html`, including the hidden `.htaccess`.
- **Vercel or Netlify:** push the folder to GitHub, import it, no build command, output folder is the root. Add your domain in their Domains settings.
- Replace `https://rivahstudios.in` with your real domain in all HTML files, `sitemap.xml` and `robots.txt` (use find and replace in your editor).

## Contact and WhatsApp
Everything points to the details in `js/core/config.js`: WhatsApp 917972096750 (+91 79720 96750), email rivahstudio@gmail.com, Instagram @rivahstudios.in.
- **Book A Call** (navbar) and the floating **WhatsApp** button open a WhatsApp chat with a ready message.
- **Contact form**: when a visitor presses "Send on WhatsApp", the site builds a message from the form (name, service, budget, phone, email, message) and opens WhatsApp chat with it ready to send. No server or email service needed.
- To change the number, edit `config.js` AND the `wa.me` links in the HTML files (find `917972096750`).

## Moving to React later
Plan it like this: `js/core/data.js` becomes `data/*.ts`, each file in `js/components/` becomes a React component, `css/base.css` tokens become the Tailwind theme, and the shader in `js/river/` becomes `RiverBackground.tsx` unchanged.
