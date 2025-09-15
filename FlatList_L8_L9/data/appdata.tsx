/*
This file will define the datatype we are using in our app.
We will also create the array DATA here and then
export both so we can import wherever we need them
*/

  // declare datatype for each item in array
  type dataType = {
    id: string;//unique identifyer
    title: string; // text displayed in flatlist
  }

  const DATA: dataType[] = [
      {id: "1",title: "First item"},
      {id: "2",title: "Second item"},
      {id: "3",title: "Third item"},
      {id: "4",title: "Fourth item"},
  ];

  //when exporting more than one item, we don't use the word default and instead put them in curly braces
  export { DATA, dataType };

