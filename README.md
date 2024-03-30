# Web Development Project 5 - *YouTubeTopHits*

Submitted by: **Kyle Vong**

This web app: **This web app utilizes Google Cloud's Youtube Data API to fetch data on Youtube's most well performing videos. These videos are features on their trending page and this application lists these videos, collect stats, and organize these data into stat cards so you can learn more about these top hits!**

Time spent: **7.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [X] **The app dashboard includes at least three summary statistics about the data such as**
  - [X] Average views across all videos
  - [X] Average likes across all videos
  - [X] Most popular genre between all trending videos
  - [X] Most well performing video based on views, likes, and comments
- [X] **A search bar allows the user to search for an item in the fetched data**
- [X] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [X] Multiple filters can be applied simultaneously
- [X] Filters use different input types such as a text input, a selection, or a slider
- [X] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [X] Thumbnails

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/EfILD89.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap! 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

One of the bigger challenges I encountered while building this app would be authorizaiton of my api calls. I found difficulty navigating the documentation of the Youtube Data api and found trouble when fetching data due to a "forbidden" status code. I found out it was due to how I was authorizing my api key and fixed it quickly. Another problem would be managing many components within my app. When your component have dependencies within other components, it can get messy fast. I learned a lot through this project and plan to build upon it in the future. 

## License

    Copyright [2024] [Kyle Vong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
