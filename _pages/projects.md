[comment]: <> (---)

[comment]: <> (layout: page)

[comment]: <> (title: projects)

[comment]: <> (permalink: /projects/)

[comment]: <> (description: A growing collection of your cool projects.)

[comment]: <> (nav: true)

[comment]: <> (nav_order: 3)

[comment]: <> (display_categories: [work, fun])

[comment]: <> (horizontal: false)

[comment]: <> (---)

[comment]: <> (<!-- pages/projects.md -->)

[comment]: <> (<div class="projects">)

[comment]: <> ({% if site.enable_project_categories and page.display_categories %})

[comment]: <> (  <!-- Display categorized projects -->)

[comment]: <> (  {% for category in page.display_categories %})

[comment]: <> (  <a id="{{ category }}" href=".#{{ category }}">)

[comment]: <> (    <h2 class="category">{{ category }}</h2>)

[comment]: <> (  </a>)

[comment]: <> (  {% assign categorized_projects = site.projects | where: "category", category %})

[comment]: <> (  {% assign sorted_projects = categorized_projects | sort: "importance" %})

[comment]: <> (  <!-- Generate cards for each project -->)

[comment]: <> (  {% if page.horizontal %})

[comment]: <> (  <div class="container">)

[comment]: <> (    <div class="row row-cols-1 row-cols-md-2">)

[comment]: <> (    {% for project in sorted_projects %})

[comment]: <> (      {% include projects_horizontal.liquid %})

[comment]: <> (    {% endfor %})

[comment]: <> (    </div>)

[comment]: <> (  </div>)

[comment]: <> (  {% else %})

[comment]: <> (  <div class="row row-cols-1 row-cols-md-3">)

[comment]: <> (    {% for project in sorted_projects %})

[comment]: <> (      {% include projects.liquid %})

[comment]: <> (    {% endfor %})

[comment]: <> (  </div>)

[comment]: <> (  {% endif %})

[comment]: <> (  {% endfor %})

[comment]: <> ({% else %})

[comment]: <> (<!-- Display projects without categories -->)

[comment]: <> ({% assign sorted_projects = site.projects | sort: "importance" %})

[comment]: <> (  <!-- Generate cards for each project -->)

[comment]: <> ({% if page.horizontal %})

[comment]: <> (  <div class="container">)

[comment]: <> (    <div class="row row-cols-1 row-cols-md-2">)

[comment]: <> (    {% for project in sorted_projects %})

[comment]: <> (      {% include projects_horizontal.liquid %})

[comment]: <> (    {% endfor %})

[comment]: <> (    </div>)

[comment]: <> (  </div>)

[comment]: <> (  {% else %})

[comment]: <> (  <div class="row row-cols-1 row-cols-md-3">)

[comment]: <> (    {% for project in sorted_projects %})

[comment]: <> (      {% include projects.liquid %})

[comment]: <> (    {% endfor %})

[comment]: <> (  </div>)

[comment]: <> (  {% endif %})

[comment]: <> ({% endif %})

[comment]: <> (</div>)
