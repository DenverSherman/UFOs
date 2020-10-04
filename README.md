# UFOs
Intro to JavaScript

## Overview
We are tasked with creating a searchable, online webpage to neatly organize UFO sighting data. This is doen through reading a JavaScript file into an HTML table. Later, this is passed throught the TableFilter JavaScript library to creat intuitive dropdown menus for ease of information access.

## Results
With very little data, there are few results to be drawn. That said, now that we have the infrastructure to store and rpesent the information, the webpage can be linked to a form where users can report their sightings. These new entries can be scanned for appropriateness and later uploaded onto the webpage for easy access. This is a promising development in the world of UFO conspirators.

Since my code deviates from the challenge outline, I will include some additional information on my process. I was able to find a automatic HTML table filter library titled [TableFilter](https://www.tablefilter.com). I included a script in the index.html file. Here's the snippet:
```
    var tfconfig = {base_path: 'static/js/tablefilter/tablefilter.js', 
        btn_reset:true,
        col_0: 'select',
        col_1: 'select',
        col_2: 'select',
        col_3: 'select'
        };
     var tf = new TableFilter('ufo', tfconfig);
     tf.init();
```

## Summary
Future in mind, this website lacks clean data. Data is harder to clean in the Javascript text format and it will only get harder as the dataset grows. Development opportunities point the webpage towards multiple data visualizations from our set: a heatmap showing sighting density by city and a timeline showing sightings by day/week.

