# Adding New Articles

This guide explains how to add new technical articles to your portfolio website.

## Article Structure

Articles are stored in `src/content/articles/` as MDX files (`.mdx` extension). Each article has two parts:

1. **Frontmatter** - Metadata about the article
2. **Content** - The actual article content in Markdown

## Creating a New Article

### 1. Create the Article File

Create a new `.mdx` file in `src/content/articles/` with a descriptive filename:

```
src/content/articles/my-new-article.mdx
```

### 2. Add Frontmatter

Start your article with frontmatter containing metadata:

```yaml
---
title: 'Your Article Title'
description: 'A brief description of your article for previews and SEO'
pubDate: 2024-12-15  # Publication date (YYYY-MM-DD)
updatedDate: 2024-12-16  # Optional: Last updated date
author: 'Henok Wehibe'  # Optional: defaults to 'Henok Wehibe'
tags: ['Python', 'React', 'Tutorial']  # Optional: array of tags
image: '/assets/article-cover.jpg'  # Optional: featured image
featured: true  # Optional: show on homepage (default: false)
---
```

### 3. Write Your Content

After the frontmatter, write your article in Markdown:

```markdown
# Your Article Title

Introduction paragraph goes here...

## Section Header

Your content with:

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- `inline code`

### Code Blocks

```python
def hello_world():
    print("Hello, World!")
```

### Lists

1. Numbered list item
2. Another item

- Bullet point
- Another point

### Blockquotes

> This is a blockquote for important information.

### Images

![Alt text](/assets/image.jpg)
```

## Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Article title |
| `description` | string | ✅ | Brief description |
| `pubDate` | date | ✅ | Publication date |
| `updatedDate` | date | ❌ | Last updated date |
| `author` | string | ❌ | Author name (defaults to 'Henok Wehibe') |
| `tags` | array | ❌ | Array of tag strings |
| `image` | string | ❌ | Path to featured image |
| `featured` | boolean | ❌ | Show on homepage (default: false) |

## Tips for Great Articles

### 1. Use Descriptive Titles
- Make titles specific and searchable
- Include key technologies or concepts

### 2. Write Compelling Descriptions
- Keep descriptions under 160 characters
- Focus on what readers will learn

### 3. Choose Relevant Tags
- Use existing tags when possible
- Keep tag names consistent
- Popular tags: Python, JavaScript, React, DevOps, Tutorial, etc.

### 4. Structure Your Content
- Use clear headings (H2, H3, H4)
- Break up long paragraphs
- Include code examples
- Add visual elements when helpful

### 5. Featured Articles
- Only mark high-quality, comprehensive articles as featured
- Featured articles appear on the homepage
- Limit to 2-3 featured articles at a time

## Example Article Template

```mdx
---
title: 'Building a REST API with Python and FastAPI'
description: 'Learn how to create a modern, fast REST API using Python and FastAPI framework with automatic documentation and type hints.'
pubDate: 2024-12-15
tags: ['Python', 'FastAPI', 'REST API', 'Tutorial']
featured: false
---

# Building a REST API with Python and FastAPI

In this tutorial, we'll create a modern REST API using Python and FastAPI...

## Why FastAPI?

FastAPI is a modern Python web framework that offers:

- **High Performance** - One of the fastest Python frameworks
- **Type Hints** - Full support for Python type hints
- **Automatic Documentation** - Auto-generated OpenAPI/Swagger docs
- **Easy to Learn** - Intuitive and easy to use

## Setting Up the Project

First, let's set up our project structure:

```bash
mkdir fastapi-tutorial
cd fastapi-tutorial
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install fastapi uvicorn
```

## Creating Your First Endpoint

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
```

## Running the Server

```bash
uvicorn main:app --reload
```

Your API will be available at `http://localhost:8000` with automatic documentation at `http://localhost:8000/docs`.

## Conclusion

FastAPI makes it incredibly easy to build high-performance APIs with Python...
```

## After Creating Your Article

1. **Test Locally**: Run `npm run dev` and visit `/articles` to see your new article
2. **Build**: Run `npm run build` to ensure everything compiles correctly
3. **Review**: Check formatting, links, and code syntax highlighting
4. **Deploy**: Your article will be automatically included in the next deployment

## Troubleshooting

### Article Not Appearing
- Check that the file is in `src/content/articles/`
- Ensure the file has `.mdx` extension
- Verify frontmatter syntax is correct
- Check for TypeScript/build errors

### Styling Issues
- Use standard Markdown syntax
- Check that code blocks specify the language
- Ensure proper heading hierarchy (H1 → H2 → H3)

### Build Errors
- Validate frontmatter YAML syntax
- Check for missing required fields
- Ensure dates are in YYYY-MM-DD format
