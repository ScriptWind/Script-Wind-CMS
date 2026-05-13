# Script Wind Blog - Content Editor Guide

Welcome to the Script Wind Blog CMS! This guide explains how to create high-quality, engaging blog posts using our custom schema and content blocks.

## 1. Core Post Information

Every blog post starts with these essential fields. Pay attention to the **character count validation** to ensure optimal display on the website and search engines.

| Field | Max Characters | Description |
| :--- | :--- | :--- |
| **Title** | 70 | The main heading of your post. Keep it catchy and keyword-rich. |
| **Excerpt** | 160 | A brief summary shown on the blog listing page. |
| **Author** | 60 | Default: "Script Wind Team". |
| **Featured Image** | N/A | High-quality image shown at the top of the post. Include **Alt Text** for accessibility. |

## 2. Dynamic Content Blocks (The "Body" Field)

Our blog uses a powerful "Portable Text" editor. You can mix and match various blocks to create a rich reading experience.

### [A] Lead Paragraph
- **When to use**: Immediately after the hero section to hook readers.
- **Validation**: Must be between **80 and 320 characters**.
- **Style**: Renders with an italic, emphasized font.

### [B] Content Image
- **Layout Options**:
  - `Contained`: Matches the text width (default).
  - `Wide`: Slightly wider than the text for impact.
  - `Full Width`: Stretches across the entire screen.
- **Caption**: Recommended max 180 characters.

### [C] Callout Box
- **Tones**: 
  - `Info` (Blue): General helpful tips.
  - `Success` (Green): Key takeaways or "do this" items.
  - `Warning` (Amber): Important notes to watch out for.
  - `Danger` (Red): Critical errors or things to avoid.

### [D] Code Block
- **Language**: Select from Bash, TypeScript, JSON, etc.
- **Filename**: Optional. If provided, it shows above the code.
- **Copy Button**: A copy button is automatically added for readers.

### [E] Table
- **Columns**: Support for 1 to 6 columns.
- **Rows**: Add as many rows as needed.
- **Header Row**: Toggle `Has Header Row` to style the first row differently.
- **Responsive**: Tables will scroll horizontally on small mobile screens.

### [F] Divider
- `Line`: A clean subtle separator.
- `Space`: Adds extra vertical whitespace between sections.

## 3. SEO & Social Sharing

These fields control how your post looks on Google, Twitter, and LinkedIn.

- **SEO Title** (60 chars): The title that appears in Google search results.
- **SEO Description** (160 chars): The meta description shown in search results.
- **SEO Image**: Specially cropped image for social media previews. If left blank, the Featured Image is used as a fallback.

---

> [!TIP]
> **Pro-tip**: Use **Lead Paragraphs** sparingly—usually just once at the start of a post. Use **Callout Boxes** to break up long walls of text and highlight the most important information.
