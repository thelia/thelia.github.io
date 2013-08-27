#{{ page.title }}

{% for description_p in page.description %}

<p>{{ description_p }}</p>

{% endfor %}

```smarty
{loop type="{{ page.type }}" [argument="value"], [...]}
```

---

<div class="row">

{% include loop/argument_row.html %}

{% include loop/output_row.html %}

{% include loop/sample_row.html %}

</div>