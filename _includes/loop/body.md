#{{ page.title }}

{% for description_p in page.description %}

<p>{{ description_p }}</p>

{% endfor %}

```smarty
{loop type="{{ page.type }}" [argument="value"], [...]}
```

---