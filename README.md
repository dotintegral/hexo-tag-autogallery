# Autogallery

This is a tag plugin for [hexo](http://hexo.io) that generates automatically a gallery from provided directory and using given layout.

## Instalation

`npm install hexo-tag-autogallery`

## Configuration

Before using, you need to create a layout partial that will be used for the gallery. The layout partial must be placed inside the `layout/_partial` path inside your current theme directory.

A simple example of a template `my-theme/layout/_parial/my-gallery.ejs`:

```
<div class="gallery">
  <% if (photos.length){ %>
    <%
      photos.forEach(function(photo) {
        var path = config.root + photo;
    %>
      <a class="gallery-photo" style="background-image: url(<%- path %>);" href="<%-path %>"></a>
    <% }); %>
  <% } %>

  <!--
    If you use lightGallery, you can then simply use it by adding the following
  -->
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      lightGallery(document.querySelector('.post-gallery'));
    });
  </script>
</div>

```

## Usage

```
{% autogallery layout-name images-dir %}
```

###### Parameters
 * `layout-name` - the name of the layout to be used. It should be only the filename, without the `.ejs` extension
 * `images-dir` - the directory of the images to be converted into gallery. Relative to the `source/` directory.

###### Example

```
{% autogallery my-gallery images/galleries/gallery-1 %}
```

This will create gallery using the:
  * contents of `source/images/galleries/gallery-1`
  * the partial layout `themes/current-theme/layout/_partial/my-gallery.ejs`

### License

MIT
