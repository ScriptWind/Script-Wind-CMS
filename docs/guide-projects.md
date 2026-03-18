# Content Editor Guide: Portfolio Projects

This guide details every field in the **Portfolio Project** document, helping you create professional and SEO-optimized case studies.

## 1. Overview (General Information)
*Fields responsible for the basic identity of the project.*

| Field | Type | Input / Rules | Max Chars |
| :--- | :--- | :--- | :--- |
| **Project Title** | String | Main heading of the project. | 80 |
| **Slug** | Slug | Generated from title. Used in URL. | 96 |
| **Short Summary** | Text | Brief intro shown on portfolio cards. | 180 |
| **Client Name** | String | Name of the company or client. | 100 |
| **Client Website** | URL | Link to client's official site. | N/A |
| **Company Logo** | Image | Logo of the client company. | N/A |
| **Project Logo** | Image | Specific logo for this product/project. | N/A |

## 2. Classification & Targeting
*Used for filtering and grouping projects on the website.*

| Field | Type | Options / Inputs |
| :--- | :--- | :--- |
| **Service Categories** | References | Choose up to 3 Categories (e.g. Mobile App Development). |
| **Solution Scope** | Tags | Select project scope (e.g. Frontend, Full-Stack, UI/UX). |
| **Project Status** | List | Planned, In Progress, Completed, Ongoing, Maintenance. |
| **Industry** | String | e.g. Fintech, E-commerce, Healthcare. |
| **Platforms** | Tags | Web, iOS, Android, Admin Panel, Dashboard, etc. |
| **Tech Stack** | References | Select technologies used from the Technology Library. |

## 3. Media & Visuals
*Important for first impressions and high-quality presentation.*

| Field | Type | Input / Rules | Max Chars |
| :--- | :--- | :--- | :--- |
| **Cover Image** | Image | High-res image (Hotspot enabled). | N/A |
| **Alt Text (Cover)** | String | Required for accessibility and SEO. | 120 |
| **Project Gallery** | Array | List of Gallery Items (Image + Alt + Caption). | N/A |

## 4. Case Study Content
*The main story of the project built with rich blocks.*

- **Supported Blocks**: Normal Text, H2, H3, Blockquotes, Bullet/Numbered Lists.
- **Custom Objects**: 
  - **Lead Paragraph**: Use for a sharp intro.
  - **Content Image**: Support for `Contained`, `Wide`, or `Full` layouts.
  - **Callout Box**: Highlight key takeaways or warnings.
  - **Code Block / Table / Divider**: Break up long sections of text.

## 5. Results & Metrics
*Data-driven evidence of the project's success.*

| Field | Type | Description |
| :--- | :--- | :--- |
| **Key Features** | List | Add specialized features with descriptions. |
| **Key Metrics** | List | Label (e.g. Speed) + Value (e.g. +40%). |
| **Project Links** | List | Links to Live Site, App Store, GitHub, etc. |

## 6. SEO & Publishing
*Controls indexing and sorting.*

| Field | Type | Max Chars | Description |
| :--- | :--- | :--- | :--- |
| **SEO Title** | String | 60 | Title for Google search results. |
| **SEO Description** | Text | 160 | Summary for Google search results. |
| **Featured** | Boolean | N/A | Moves project to "Featured" sections. |
| **Confidential** | Boolean | N/A | Mark as NDA to hide sensitive details. |
| **Sort Order** | Number | N/A | Default: 100. Lower numbers show first. |
