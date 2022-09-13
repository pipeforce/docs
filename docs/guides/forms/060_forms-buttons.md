# Buttons

By default, each form shows a single submit button. If this button is pressed, the data of the form will be stored into the property store as a new instance property.

You can change this default behaviour in two steps:

## Step1

Change the JSON Schema and add a new field of type `boolean` for each button. This field should carry the value of the button after it was clicked (`true`) or not (`false`). For example:

```json
{
  "type": "object",

  "properties": {
    "buttonYes": {
      "type": "boolean"
    },
    "buttonNo": {
      "type": "boolean"
    } 
  }
}
```

## Step 2

“Tell” the form configuration, that it should “draw” these fields as buttons using the `render` attribute. For example:

```json
{
  "title": "Approval",
  "description": "Do you approve?",  
  ...
  "layout": {
    "items": [      
      {"field": "buttonYes", "render": "button"},      
      {"field": "buttonNo", "render": "button"}
    ]
  }
}
```

After a button has been clicked, a new object is created and stored in the property store which has a structure like this:

```json
{
  "buttonYes": true,
  "buttonNo": false
}
```

Here, you can see that the “Yes” button was clicked.

You can then create a event.listen pipeline to listen for such a submit, and react accordingly.

## Report an Issue
:::tip Your help is needed!
In case you're missing something on this page, you found an error or you have an idea for improvement, please [click here to create a new issue](https://github.com/pipeforce/pipeforce.github.io/issues). Another way to contribute is, to click **Edit this page** below and directly add your changes in GitHub. Many thanks for your contribution in order to improve PIPEFORCE!
:::