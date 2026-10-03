# Requirements Document

## Introduction

A fully responsive, premium-quality wedding invitation website for the wedding of Ashmi SS and Jeffrin J on 11 November 2026. The site adopts a modern Korean pastel aesthetic with cinematic animations, miniature chibi-style doll illustrations, glassmorphism UI, and smooth scrolling. It is built with Next.js, Tailwind CSS, and Framer Motion, optimized for mobile-first viewing (primarily via WhatsApp sharing) and deployment on Vercel.

## Glossary

- **Website**: The complete Next.js wedding invitation web application
- **Intro_Screen**: The full-screen cinematic opening overlay shown before the main content
- **Hero_Section**: The primary landing section displaying couple names, date, and Korean doll illustrations
- **Countdown_Timer**: The animated component counting down to the wedding date
- **Event_Card**: A glassmorphism-styled card displaying a single wedding event's details
- **Gallery**: The masonry-layout photo grid section
- **Navbar**: The sticky top navigation bar with smooth-scroll links
- **Lightbox**: The full-screen image preview overlay triggered from the gallery
- **Glassmorphism**: A UI style using frosted-glass effect (backdrop blur, semi-transparent background, soft border)
- **Chibi_Doll**: Korean miniature-style illustrated bride and groom characters used decoratively
- **Pastel_Palette**: The defined color set: Blush Pink (#f8d7e3), Lavender (#d8c8f2), Ivory (#fffaf2), Soft Peach (#ffd8c2), Light Gold (#f6d37a)
- **Framer_Motion**: The React animation library used for all transitions and motion effects
- **Tailwind**: The utility-first CSS framework used for all styling
- **Vercel**: The deployment platform target for the Website

---

## Requirements

### Requirement 1: Cinematic Intro Screen

**User Story:** As a guest opening the invitation link, I want to see a beautiful cinematic intro screen, so that I feel the premium and romantic mood of the wedding before entering the main content.

#### Acceptance Criteria

1. WHEN the Website first loads, THE Intro_Screen SHALL display as a full-viewport (100vw × 100vh) overlay with a z-index higher than all other page content.
2. THE Intro_Screen SHALL render an animated blurred pastel gradient background cycling through at least three colors from the Pastel_Palette on a continuous loop of 8 seconds or less.
3. THE Intro_Screen SHALL display a minimum of 8 floating animated flower petal elements and a minimum of 10 sparkle particle elements layered above the background and below the text content.
4. THE Intro_Screen SHALL display the text "Together with their families" and "invite you to celebrate their wedding" with opacity animating from 0 to 1, completing within 1500ms of page load.
5. THE Intro_Screen SHALL display a centered "Open Invitation" button with a backdrop-blur glassmorphism style and a border or background tint using Light Gold (#f6d37a).
6. WHEN the "Open Invitation" button is clicked, THE Intro_Screen SHALL begin a fade-out animation (opacity 1 → 0) over exactly 600ms, and THE Hero_Section SHALL not become visible or interactive until the fade-out animation has fully completed.
7. THE Intro_Screen SHALL include a music toggle button that, when clicked, activates soft instrumental background audio if inactive, or deactivates it if active, toggling an audible/muted icon state accordingly.
8. IF the user's browser blocks autoplay audio, THEN THE Website SHALL render the music toggle button in a muted/inactive visual state without throwing a JavaScript console error.

---

### Requirement 2: Hero Section

**User Story:** As a guest, I want to see the couple's names, wedding date, and beautiful Korean-style illustrations prominently, so that I immediately understand whose wedding I am invited to.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the bride's name "Ashmi SS" and the groom's name "Jeffrin J" using the Great Vibes or Playfair Display font at a minimum size of 48px on desktop (≥1024px) and 32px on mobile (<768px), with a maximum size of 72px on desktop and 48px on mobile.
2. THE Hero_Section SHALL display the subtext "With the blessings of our families" in Poppins font at 16px on desktop and 14px on mobile, positioned directly below the couple names.
3. THE Hero_Section SHALL display the wedding date "11 November 2026 | Wednesday" and time "10:30 AM – 11:30 AM" in Poppins font at 14–18px, positioned below the subtext.
4. THE Hero_Section SHALL render two Chibi_Doll illustrations (bride and groom) with a white outline of at least 3px and a drop shadow of at least 4px blur using a color from the Pastel_Palette.
5. WHILE the Hero_Section is visible in the viewport, THE Hero_Section SHALL display a minimum of 6 floating pastel decoration elements (petals, sparkles, or glowing blobs) animating on a continuous loop of 4–8 seconds per cycle.
6. THE Hero_Section SHALL use an animated gradient background drawn from the Pastel_Palette that transitions on a continuous 6-second linear loop.
7. WHEN the Hero_Section enters the viewport, THE Framer_Motion SHALL animate the couple names and date with a staggered fade-up entrance (translateY 20px → 0, opacity 0 → 1) over 800ms total, with a 150ms stagger interval between each element.

---

### Requirement 3: Couple Details Section

**User Story:** As a guest, I want to read the full family details of the bride and groom, so that I know the families hosting the wedding.

#### Acceptance Criteria

1. THE Website SHALL display a dedicated Couple Details section with two side-by-side cards on viewports ≥768px and stacked single-column cards on viewports <768px.
2. THE Couple Details section SHALL display for the bride, each field identified by a visible label: name "Ashmi SS", qualification "M.Sc., B.Ed", parents "A Siva Kumar & D Santhi", and address "South Kaliyadappu, Sasthankarai, Colachel (P.O)".
3. THE Couple Details section SHALL display for the groom, each field identified by a visible label: name "Jeffrin J", qualification "B.Tech", parents "Javin Amaladhas & Raja Kumari", and address "Kodumutty, Bethelpuram".
4. EACH card in the Couple Details section SHALL use glassmorphism styling with a backdrop blur of at least 8px and a border using a color from the Pastel_Palette.
5. WHEN a Couple Details card enters the viewport, THE Framer_Motion SHALL animate the bride card with a slide-in from the left (translateX -40px → 0, opacity 0 → 1) and the groom card from the right (translateX 40px → 0, opacity 0 → 1), each over 700ms.

---

### Requirement 4: Family & Friends Section

**User Story:** As a guest, I want to see the names of the couple's close family members, so that I can recognize and greet them at the wedding.

#### Acceptance Criteria

1. THE Website SHALL display a Family & Friends section with a visible "Sisters" heading, listing "Ashika SS" labeled as "Sister of the Bride" and "Jershiha" labeled as "Sister of the Groom".
2. EACH family member SHALL be displayed in an individual glassmorphism card with a background tint using a color from the Pastel_Palette, displayed in a 2-column layout on viewports ≥768px and a 1-column layout on viewports <768px.
3. WHEN a family card enters the viewport, THE Framer_Motion SHALL animate it with opacity 0 → 1 and scale 0.95 → 1.0 over 500ms.
4. THE Family & Friends section SHALL render all family cards without horizontal overflow on viewport widths from 320px to 1920px.

---

### Requirement 5: Countdown Timer

**User Story:** As a guest, I want to see a live countdown to the wedding day, so that I can feel the excitement building as the date approaches.

#### Acceptance Criteria

1. THE Countdown_Timer SHALL display the remaining time to 11 November 2026 10:30 AM IST (UTC+5:30) in four units: Days, Hours, Minutes, and Seconds, each zero-padded to two digits (e.g., "07", "03").
2. THE Countdown_Timer SHALL update each displayed unit every 1000ms to reflect the current remaining time.
3. EACH unit in the Countdown_Timer SHALL be displayed in an individual pastel glassmorphism card with a CSS box-shadow glow effect using a color from the Pastel_Palette.
4. THE Countdown_Timer SHALL use Great Vibes or Playfair Display font for the numeric values and Poppins for the unit labels ("Days", "Hours", "Minutes", "Seconds").
5. WHEN the countdown reaches zero (all units display "00"), THE Countdown_Timer SHALL replace all four unit cards with the single celebratory message "Today is the Day!" and SHALL NOT display negative values.
6. WHEN the Countdown_Timer section enters the viewport, THE Framer_Motion SHALL animate each unit card with a bounce-in entrance (scale 0 → 1.1 → 1.0, opacity 0 → 1) with a 100ms stagger interval between each card.

---

### Requirement 6: Events Section

**User Story:** As a guest, I want to see all wedding events with their dates, times, and venues clearly listed, so that I can plan my attendance.

#### Acceptance Criteria

1. THE Events section SHALL display exactly two Event_Cards in the following order: Engagement & Reception first, Wedding Ceremony second.
2. THE Engagement & Reception Event_Card SHALL display: date "10 November 2026", time "4:00 PM", and venue "Jannaki Ammal Thirumanamandapam, Colachel", each in a visually distinct field.
3. THE Wedding Ceremony Event_Card SHALL display: date "11 November 2026", time "10:30 AM – 11:30 AM", and venue "Jannaki Ammal Thirumanamandapam, Colachel", each in a visually distinct field.
4. EACH Event_Card SHALL use glassmorphism styling and SHALL display a Lucide React icon relevant to the event type (e.g., a ring icon for Engagement, a church or heart icon for Wedding Ceremony).
5. WHEN a user hovers over an Event_Card on a device with a pointer (desktop), THE Event_Card SHALL animate with translateY -4px and an increased box-shadow over 200ms using a CSS transition.
6. WHEN an Event_Card enters the viewport (top of card crosses 80% of viewport height), THE Framer_Motion SHALL animate it with opacity 0 → 1 and translateY 20px → 0 over 600ms.
7. THE Events section SHALL include at least one Chibi_Doll decorative illustration rendered within the section boundaries, not overlapping the Event_Card text content.

---

### Requirement 7: Venue Section

**User Story:** As a guest, I want to see the venue location with a map and directions, so that I can easily find the wedding venue.

#### Acceptance Criteria

1. THE Venue section SHALL display the venue name "Jannaki Ammal Thirumanamandapam, Colachel" in a location card with a Lucide React map-pin icon adjacent to the name text.
2. THE Venue section SHALL embed a Google Maps iframe or a styled placeholder `<div>` of at least 300px height centered on the venue location; IF the iframe fails to load, THE Website SHALL display a fallback text "Map unavailable — see directions below" within the map container.
3. THE Venue section SHALL display a "Get Directions" button that animates with a scale 1.0 → 1.05 pulse on hover over 200ms.
4. WHEN the "Get Directions" button is clicked, THE Website SHALL open `https://www.google.com/maps/dir/?api=1&destination=Jannaki+Ammal+Thirumanamandapam+Colachel` in a new browser tab using `target="_blank" rel="noopener noreferrer"`.
5. THE Venue section SHALL use a decorative pastel floral background pattern (SVG or CSS) behind the location card.
6. WHEN the Venue section enters the viewport, THE Framer_Motion SHALL animate the location card with opacity 0 → 1 over 600ms.

---

### Requirement 8: Gallery Section

**User Story:** As a guest, I want to browse a beautiful photo gallery of the couple, so that I can enjoy their pre-wedding moments and feel connected to their story.

#### Acceptance Criteria

1. THE Gallery section SHALL display placeholder images in a CSS columns-based or CSS grid masonry-style layout.
2. THE Gallery SHALL render exactly 9 placeholder image slots: 3 labeled "couple portrait", 3 labeled "pre-wedding shoot", and 3 labeled "family moment" (labels visible only as alt text).
3. EACH gallery image SHALL use the `loading="lazy"` attribute (or Next.js Image lazy loading) so that images more than one viewport height below the current scroll position are not fetched until the user scrolls within one viewport height of them.
4. WHEN a user hovers over a gallery image on a device with a pointer, THE Gallery SHALL animate the image with scale 1.0 → 1.05 over 300ms using a CSS transition with `overflow: hidden` on the container to prevent layout shift.
5. WHEN a user clicks a gallery image, THE Lightbox SHALL open displaying the image rendered at its natural dimensions constrained to 90vw × 90vh, with a semi-transparent dark overlay animating from opacity 0 → 0.85 over 300ms.
6. WHEN the Lightbox is open, THE Lightbox SHALL display a left arrow button and a right arrow button; clicking left SHALL navigate to the previous image and clicking right SHALL navigate to the next image; pressing the left/right keyboard arrow keys SHALL perform the same navigation.
7. WHEN the Lightbox is displaying the first image, THE left arrow button SHALL be disabled (non-clickable, visually dimmed); WHEN displaying the last image, THE right arrow button SHALL be disabled.
8. WHEN the user presses the Escape key or clicks the overlay outside the image, THE Lightbox SHALL close with opacity 0.85 → 0 over 300ms.
9. THE Gallery grid SHALL use 3 columns on viewports ≥1024px, 2 columns on viewports 768px–1023px, and 1 column on viewports <768px.

---

### Requirement 9: Decorative Ambient Elements

**User Story:** As a guest, I want to see subtle floating decorations throughout the page, so that the romantic and dreamy atmosphere is maintained as I scroll.

#### Acceptance Criteria

1. THE Website SHALL render between 8 and 15 floating flower petal elements in the Intro_Screen and between 6 and 12 in the Hero_Section, each animating on a continuous loop.
2. THE Website SHALL render between 10 and 20 sparkle particle elements in the Hero_Section, each with a randomized animation delay between 0ms and 3000ms so that sparkles do not all pulse simultaneously.
3. THE Website SHALL render between 3 and 6 animated pastel blob shapes with a CSS `filter: blur()` of at least 40px as background decoration in at least 3 distinct page sections.
4. ALL decorative ambient animation elements SHALL use only `transform` and `opacity` CSS properties for animation; they SHALL NOT animate `top`, `left`, `width`, `height`, `margin`, or `padding` properties.
5. THE Website SHALL render at least one floral border decoration as an SVG or CSS element at a minimum of 2 section dividers.
6. WHEN a user has `prefers-reduced-motion: reduce` set, THE Website SHALL render all decorative ambient elements as static (no animation), consistent with Requirement 14 criterion 6.
7. WHEN a decorative ambient element is scrolled more than one full viewport height outside the visible area, THE Website SHALL pause its animation (using `animation-play-state: paused` or equivalent) to reduce CPU usage.

---

### Requirement 10: Navigation Bar

**User Story:** As a guest, I want a clear navigation bar to jump to any section of the invitation, so that I can quickly find the information I need.

#### Acceptance Criteria

1. THE Navbar SHALL display links to the sections: Home, Story, Events, Venue, Gallery, and Family.
2. THE Navbar SHALL use glassmorphism styling with a background opacity of 0.1 and a backdrop blur of 10px.
3. WHEN the user scrolls past 80px from the top of the page, THE Navbar SHALL transition to a background opacity of 0.3 over 300ms.
4. WHEN a Navbar link is clicked, THE Website SHALL smooth-scroll to the corresponding section over 600ms.
5. WHEN the viewport width is below 768px, THE Navbar SHALL replace the link list with a hamburger menu icon.
6. WHEN the viewport width is 768px or wider, THE Navbar SHALL hide the hamburger menu icon and display the full link list.
7. WHEN the hamburger menu icon is clicked on mobile, THE Navbar SHALL display a full-width dropdown menu with all section links with a slide-down animation over 300ms.
8. WHEN a link is clicked while the hamburger menu is open, THE Navbar SHALL close the dropdown menu.
9. THE Navbar SHALL remain sticky at the top of the viewport during scrolling.

---

### Requirement 11: Responsive Layout

**User Story:** As a guest viewing the invitation on my phone via WhatsApp, I want the website to look and function perfectly on mobile, so that I have a premium experience on any device.

#### Acceptance Criteria

1. THE Website SHALL use a mobile-first CSS approach with Tailwind breakpoints (default mobile, `md:` tablet at 768px, `lg:` desktop at 1024px).
2. THE Website SHALL render all sections without horizontal overflow (no horizontal scrollbar) on viewport widths from 320px to 1920px.
3. THE Website SHALL use responsive typography scaling: heading font sizes SHALL scale from a minimum of 28px on mobile (<768px) to a maximum of 72px on desktop (≥1024px).
4. THE Website SHALL use responsive spacing: section padding SHALL be a minimum of 32px vertical on mobile and 80px vertical on desktop.
5. ALL touch targets (buttons, links, menu items) SHALL have a minimum tap area of 44×44px on mobile viewports (<768px).
6. THE Website SHALL pass a Lighthouse mobile performance score of 70 or above when tested with placeholder images on a simulated 3G connection.

---

### Requirement 12: Typography System

**User Story:** As a guest, I want consistent and elegant typography throughout the invitation, so that the reading experience feels premium and cohesive.

#### Acceptance Criteria

1. THE Website SHALL load the Google Fonts "Great Vibes" (weights: 400) and "Playfair Display" (weights: 400, 700) with a serif fallback stack (Georgia, serif) for all heading and display text.
2. THE Website SHALL load the Google Font "Poppins" (weights: 300, 400, 600) with a sans-serif fallback stack (system-ui, sans-serif) for all body, label, and UI text.
3. THE Website SHALL apply Great Vibes to couple names and romantic display text; Playfair Display SHALL be applied to section headings and Countdown_Timer numeric values.
4. THE Website SHALL apply Poppins to: body paragraphs, event details, family names, and Navbar links.
5. THE Website SHALL use `font-display: swap` for all Google Fonts to prevent invisible text during font load.
6. IF a Google Font fails to load (network error), THE Website SHALL render all text using the defined fallback font stack without any layout shift exceeding 0.1 CLS score.

---

### Requirement 13: Footer

**User Story:** As a guest who has scrolled to the bottom of the invitation, I want to see a warm closing message, so that the invitation ends on a heartfelt note.

#### Acceptance Criteria

1. THE Footer SHALL display the text "Made with love for our special day" in Great Vibes or Playfair Display font.
2. WHEN the Footer enters the viewport, THE Framer_Motion SHALL animate between 5 and 10 floating heart elements on a continuous looping animation with a randomized delay between 0ms and 2000ms per heart.
3. THE Footer SHALL include at least one floral decoration element (SVG or CSS) and a CSS radial-gradient glow background effect using colors from the Pastel_Palette.
4. THE Footer SHALL display the Chibi_Doll illustrations at a maximum height of 120px on desktop and 80px on mobile.

---

### Requirement 14: Performance and Accessibility

**User Story:** As a guest on a mobile data connection, I want the website to load quickly and be usable, so that I can view the invitation without long waits or accessibility barriers.

#### Acceptance Criteria

1. THE Website SHALL defer loading of all off-screen images until the user scrolls within one viewport height of them, using the `loading="lazy"` attribute or Next.js Image lazy loading.
2. THE Website SHALL preload critical fonts such that styled text is visible within 2 seconds of page load on a 3G connection, with no Flash of Unstyled Text (FOUT) lasting more than 100ms.
3. ALL informational images in the Website SHALL include a non-empty `alt` attribute describing the image content; ALL purely decorative images SHALL use `alt=""`.
4. ALL interactive elements (buttons, links, menu items) in the Website SHALL be reachable via keyboard Tab navigation in a logical reading order, and SHALL display a visible focus indicator (outline or ring) when focused.
5. THE Website SHALL use at least one `<header>`, one `<main>`, one `<nav>`, one `<footer>`, and a minimum of 6 `<section>` elements to define the document landmark structure.
6. WHEN a user has `prefers-reduced-motion: reduce` set in their OS or browser, THE Website SHALL render all Framer_Motion animations with a duration of 0ms (instant state change), with no transitional movement or opacity fade.
