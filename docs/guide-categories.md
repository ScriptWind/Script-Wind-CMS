# Content Editor Guide: Portfolio Categories

Use Categories to group your projects under the services Script Wind provides.

## Category Fields

| Field | Type | Description |
| :--- | :--- | :--- |
| **Title** | String | Name of the service (e.g. "AI & Automation"). |
| **Slug** | Slug | Generated from Title. Used in routing and filtering. |
| **Description** | Text | Optional summary of the category (max 3 rows). |
| **Core Service** | Boolean | Mark `YES` if it represents a main service offering. |
| **Sort Order** | Number | Controls the order of category filters (Lower = First). |
| **Service Page Path** | String | e.g. `/services/mobile-app-development`. |
| **Icon Key** | String | Logic key for frontend icons (e.g. "smartphone"). |
| **Active** | Boolean | If `NO`, the category is hidden from the website. |

## Core Service List (Recommended To Seed)

When setting up your Studio, please ensure these 6 categories are created with these exact slugs:
1. **Mobile App Development** (`mobile-app-development`)
2. **Website Development** (`website-development`)
3. **Custom Web Application** (`custom-web-application`)
4. **UI/UX Design** (`ui-ux-design`)
5. **Enterprise Solutions** (`enterprise-solutions`)
6. **AI & Automation** (`ai-automation`)
