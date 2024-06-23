# Natural Query Writer
This is the frontend of a concept search interface built with Angular. It is connected with wikipedia API for search term auto complete but does not have any search result when search is issued.

## Motivation
WHen I was doing my grad studies I was researching on search interfaces. I found most academic and general purpose search interfaces has two seperate modes. One for issueing simple searches and one that has advanced search options that allows user to issue complex boolean search queries (with boolean terms such as: and, or, not, date filter, etc.). I also found that issuing complex boolean queries are really hard and you have to know the syntax and structure that the search ingine supports.


To make it convinient for the users to issue complex boolean search, I designed an interface where you have one mode to search both types of queries. I also wanted the users to write complex boolean queries in plain english so that there is no need to learn the the boolean search syntax. Also, the interface does not overwhelm the searcher with tons of input boxes. It starts with one, then the user can add new blocks (and, or, not, date filter, group) as they build their query sentence.

I borrowed the concept of 'Mad Libs' word game and lego blocks to build an intuitive search interface. searchers can start with small with one input and then they can extend the search with modular lego like input boxes by clicking plus icon beside each input block. They can also create groups of blocks to make nested boolean search blocks. The interface looks like a english sentence as they continue addding blocks.

The interface also has a tree visualizaion underneath that shows how their nested boolean query is structured.

## Features
- Autocomplete of search terms as user types, powered by wikipedia API
- Bootstrap UI Component
- Insertable lego like search input blocks for slowly building complex queries
- 'Mad Libs' style english sentence with input blocks as blank spaces makes it easier to understand the complex query.

	
## Prerequisites

- Node.js (version v16 or higher)
- npm (Node Package Manager)
- Angular CLI (Command Line Interface)

## Installation
Clone repo: `$ git clone git@bitbucket.org:romy6047/uregina-baseline.git`

Install: `$ npm install`

Start app: `$ npm start `
