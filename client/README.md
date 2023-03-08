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

# Data Structure

## option 1

```js
// 1 giant collection, 1 document per user

{
  projects: [],
  wordLadders: [],
  ideas: [],
  settings: {}
}
```

## option 2

```js
// one possible data organization: multiple collections mapping somewhat to how the SQL would be structured
// e.g. 1 collection for users, 1 collection for projects, etc

// users, projects, word ladders, ideas, streams

// users
{
  id: string,
  firstName: string,
  email: string,
  settings: {
    colorTheme: string,
  }
  projects: [id1, id2, etc]
}

// projects
{
  id,
  name,
}

// the database organization we'll use is one collection of users with
// all data for each users

// users
{
  id: string
  password: string
  firstName: string
  lastName: string
  email: string
  settings: {
    colorTheme: string,
  }
  projects: {
    id1: {
      name: string
      createdAt: time
      updatedAt: time
      fragments: [1, 2]
      content: string
    }
  }
  ideas: { // post mvp
    fragments: [1, 2]
    content: string
  }
  wordLadders: {
    id1
    wordPairs: [] // list of ten word pairs
    fragments: [id2, id2]
  }
  streams: { // post mvp
    id1
  }
  fragments: {
    id1: some fragment
    fragmentType: string
  }
  fragmentType: word ladder, idea, etc // post mvp
  tags: [strings] melanchooy, joyous // post mvp
}
```

// MVP
user // mock user management with local storage
projects
exercises: for now wordLadder
fragments

// categories

3/6 todos:

1. create project page
2. ability to add word pair fragment to project
3. wiring up local storage
   3a. fine tuning data model
   3b. adding getting and setting to local storage
