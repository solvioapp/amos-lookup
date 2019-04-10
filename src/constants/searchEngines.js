export const searchEngines = [
  {
    id: 'googleLucky',
    displayName: 'Google',
    urlPrefix: 'https://www.google.com/search?hl=en&q=',
    urlPostfix: '&btnI',
    default: true,
  },
  {
    id: 'googleLocalLucky',
    displayName: 'Google Local',
    urlPrefix: 'https://www.google.com/search?q=',
    urlPostfix: '&btnI',
  },
  {
    id: 'youtube',
    displayName: 'Youtube Videos',
    urlPrefix: 'https://www.youtube.com/results?search_query=',
    default: true,
  },
  {
    id: 'youtubePlaylists',
    displayName: 'Youtube Playlists',
    urlPrefix: 'https://www.youtube.com/results?search_query=',
    urlPostfix: '&sp=EgIQAw%253D%253D',
    default: true,
  },
  {
    id: 'udemy',
    displayName: 'Udemy',
    urlPrefix: 'https://www.udemy.com/courses/search/?ref=home&src=ukw&q=',
    default: true,
  },
  {
    id: 'coursera',
    displayName: 'Coursera',
    urlPrefix: 'https://www.coursera.org/courses?query=',
  }
]