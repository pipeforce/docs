# Orientation

By default, in a form, all fields from the JSON schema are displayed vertically, each in a different row.

![](../../img/grafik-20201023-084022.png)

## Vertical orientation

You can change this default by configuring `orientation` of the layout in the form configuration.

To do so, firstly you need to add the element `layout` to the form configuration as shown in this example:

```json
{
  "title": "Person",
  "description": "The person form",  
  ...
  
  "layout": {
    "orientation": "vertical",
    "items": [
      {"field": "firstName"},
      {"field": "lastName"},
      {"field": "age"},
      {"field": "gender"}
    ]
  }
}
```

This example layout configuration would create exactly the default layout:

![](../../img/grafik-20201023-100242.png)

## Horizontal orientation

You can then change the `orientation`, `width` and `height` of a layout item like this:

```json
{
  "title": "Person",
  "description": "The person form",  
  ...
  
  "layout": {
    "orientation": "horizontal",
    "height": "100",
    "width": "900",
    "items": [
      {"field": "firstName"},
      {"field": "lastName"},
      {"field": "age", "width": "150"},
      {"field": "gender"}
    ]
  }
}
```

`width` and `height` can be also specified in individual fields.

This would result in this form layout afterwards, where all fields are displayed in a single row (horizontally):

![](../../img/image-20210319-064428.png)

Width of 900 in horizonal layout item prevents fields to cover all of the available space.

Layout items and fields in horizontal orientation, by default, try to span as much width as possible, but with respect to neighbouring fields - behave responsively.

Both `min-width` and `max-width` can be also used in place of `width` to reach responsiveness within defined limits.

## Nesting layouts and orientations

Layouts and its orientations can be nested in order to create quite complex form structures. Here’s an example:

```json
{
  "title": "Person Form",
  "description": "A simple person form.",  
  ...
  
  "layout": {
    "orientation": "horizontal",
    "items": [
      {
        "orientation": "vertical",
        "items": [
          {"field": "firstName"},
          {"field": "age"}
        ]
      },
      {
        "orientation": "vertical",
        "items": [
          {"field": "lastName"},
          {"field": "gender"}
        ]
      }
    ]
  } 
}
```

This example would produce a form like this with nested orientation:

![](../../img/grafik-20201023-101109.png)

## Report an Issue
:::tip Your help is needed!
In case you're missing something on this page, you found an error or you have an idea for improvement, please [click here to create a new issue](https://github.com/pipeforce/pipeforce.github.io/issues/new). Another way to contribute is, to click **Edit this page** below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!
:::