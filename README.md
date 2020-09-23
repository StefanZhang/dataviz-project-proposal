# Data Visualization Project

## Data

The data I propose to visualize for my project is self-collected twitter data through Twitter API using Apache Flume, with hashtage "DonalTrump" [example here](https://gist.github.com/StefanZhang/a2ba319870c1d8b8135a16cdd4273d32)

## Project Description

This project is based on the results of "Real-time Sentiment Dashboard with Tweets Presidential Candidates" project that I am working on at WPI DS504 Bigdata management course, which uses Apache Flume and Apache Spark to construct data pipeline and perform sentiment analysis. 

## Questions & Tasks

 * Do majority of people on twitter like Donald? 
 * What are the most frequntly used words/phrases in tweets that are in favor of Donald? 
 * What are the most frequntly used words/phrases in tweets that are not in favor of Donald? 
 * During what days that people talk about Donald, positive or negative? And what does it potentially related to?

## Sketches

* Sentiment pie Chart
![P1-3.jpg](https://i.loli.net/2020/09/23/Hsdhl9xKDAQEfuZ.jpg)

This will describe the percentage of people's sentiment towards Donald on twitter, different color represent positive, negative and neutral. 

* Time vs Counts
![P1-4.jpg](https://i.loli.net/2020/09/23/yb42G1TIUPav3hV.jpg)

This visualization shows the relatinship between time and the counts of tweets. Using different colored lines to represent different sentiment. 

## Open Questions

  * Uncertainty here is that I am generate my own data set, which could be less friendly to work with.
  * I am not sure how to make this working as a real-time/live data visualization, have to do research on that. 
  * Data source for visualzation is coming from data base(MySQL), have to do research on that. 
