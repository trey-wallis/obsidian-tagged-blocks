# Obsidian Tag Feed

![Screenshot](https://raw.githubusercontent.com/trey-wallis/obsidian-tag-feed/master/.readme/reference_file.png)
![Screenshot](https://raw.githubusercontent.com/trey-wallis/obsidian-tag-feed/master/.readme/tag_feed.png)

## About

This plugin allows you to display a feed of your recently tagged blocks of text. It is similar to the Dataview plugin and Obsidian embedded queries, however it uses a UI display that is more like Logseq linked references for tags.

## Usage

The feed uses a frontmatter-like syntax in order to render.

### Tag

Specify a tag to render

-   `tag: <tag-name>`

Example:

````
```tag-feed
tag: feedback
```
````

### Time

Specify a modification time to filter by

-   `time: <1-day>|<1-week>|<1-month>`

Example:

````
```tag-feed
tag: feedback
time: 3-weeks
```
````

## Author

This project was created by <a href="https://github.com/trey-wallis">Trey Wallis</a>
