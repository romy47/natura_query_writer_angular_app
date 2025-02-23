# Natural Query Writer
A concept search interface for effortlessly writing complex Boolean search queries in plain English. The frontend app is built with Angular. It is connected with Wikipedia API for search term auto-complete.

## Motivation
During my graduate studies, I conducted research on search interfaces. I discovered that most academic and general-purpose search interfaces have two separate modes: one for issuing simple searches and another with advanced search options for complex Boolean queries (using terms such as AND, OR, NOT, date filter, etc.). I also found that issuing complex Boolean queries is really hard, as you need to know the syntax and structure that the search engine supports.

To make it convenient for users to issue complex Boolean searches, I designed an interface where you have one mode to search both types of queries. I also wanted users to write complex Boolean queries in plain English so that there is no need to learn Boolean search syntax. Additionally, the interface does not overwhelm the searcher with numerous input boxes. It starts with one, then the user can add new blocks (AND, OR, NOT, date filter, group) as they build their query sentence.<br><br><br>
<div align="left">
	<img src="https://github.com/romy47/natura_query_writer_angular_app/blob/master/src/assets/images/search_input_1.png">
</div>
> Figure 1: Initial view of the search interface. This view is a good place for quickly issuing a simple query.
<br><br><br><br>
<div align="left">
	<img src="https://github.com/romy47/natura_query_writer_angular_app/blob/master/src/assets/images/search_input_3.png">
</div>
> Figure 2: The interface after adding a few boolean input blocks.
<br><br><br><br>
I borrowed the concept of the 'Mad Libs' word game and Lego blocks to build an intuitive search interface. Searchers can start small with one input and then extend the search with modular Lego-like input boxes by clicking the plus icon beside each input block. They can also create groups of blocks to make nested Boolean search blocks. The interface looks like an English sentence as they continue adding blocks.

The interface also has a tree visualization underneath that shows how their nested Boolean query is structured.
<br><br><br><br>
<div align="left">
	<img src="https://github.com/romy47/natura_query_writer_angular_app/blob/master/src/assets/images/tree_visualization.png">
</div>
> Figure 3: The tree visualization corresponds to the current boolean query.

## Features
- Autocomplete of search terms as user types, powered by Wikipedia API
- Bootstrap UI Component
- Insertable Lego-like search input blocks for slowly building complex queries
- 'Mad Libs' style English sentence with input blocks as blank spaces makes it easier to understand the complex query.
	
## Prerequisites

- Node.js (version v16 or higher)
- npm (Node Package Manager)
- Angular CLI (Command Line Interface)

## Installation
Clone repo: `$ git clone git@bitbucket.org:romy6047/natural-query-facet.git`

Install: `$ npm install`

Start app: `$ npm start `
