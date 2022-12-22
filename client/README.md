# Creative MVP

## App Structure

User
-- Landing Page
-- Projects Page
---- list of projects
-- Project Page
---- title
---- summary
---- creation date
---- last edited date
---- deadline date
---- fragments
-------- push fragment to body
-------- copy fragment into clipboard
-------- visual indicator when fragment is included
---- tools
-------- thesaurus
---- body
---- save
---- autosave?
---- versioning?
---- tags?
---- categorization?
---- trash
-------- possibly markdown
-- Word Ladder Page, multiple types
---- first screen, explanation, checkbox not to show again
-------- list of word ladders
-------- create new word ladder
---- second screen, entereing two sets of words
---- scrabmler button
---- third screen, edit fragments according to pairs
---- Fragments
-------- word pair
-------- text
-------- Add to project -> drop down menu with 5-10 most recents, search ability
---- save
---- trash
-- Streams Page
---- voice to speach
-- Idea Bin
---- add fragments to it
---- blank body text/scratchpad
---- ability to create new projects from here
-- Settings Page

## Menu

-- Projects
-- Word Ladder
-- Ideas Bin
-- Settings

## Data

### old

```javascript
key: create_mvp_1234
value: {
    nouns: [],
    scrambledWords: [],
    verbs: [],
}
```

### new

```javascript
key: create_mvp_1234;
value: {
  projects: [],
  exercises: {
    ladders: [],
    streams: [],
  },
  ideas: {},
  settings: {}
}
```

## Ideas

-- user can generate a random profession/type of person (verbs)
-- user can generate a random environment/location (nouns)
--
